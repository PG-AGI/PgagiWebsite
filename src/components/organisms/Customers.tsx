"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "@/lib/motion-lite";
import styles from "@/styles/components/organisms/Customers.module.scss";
import { FRAMER_EASE, MOTION_DURATION } from "@/lib/motion";
import { pgagiClientTestimonials } from "@/data/pgagiClientTestimonials";
import customersText from "@/constants/uiText/customers.json";

type AvatarGender = "male" | "female" | "neutral";

/* ─── YouTube helpers ─────────────────────────────────────────────── */
const testimonialYouTubeUrls = [
  "https://www.youtube.com/watch?v=vsuDM890kmU",
  "https://youtu.be/6xaFA25-cc8?si=dlXudFrTusBX7aaJ",
];

/** Local posters so full artwork stays visible (not YouTube crops) */
const videoPosterByIndex: Record<number, string> = {
  0: "/thumbnail1.png",
  1: "/thumbnail2.png",
};

const videoPosterSrc = (videoIndex: number) => videoPosterByIndex[videoIndex];

const extractYouTubeId = (urlOrId: string): string => {
  if (!urlOrId.includes("/") && !urlOrId.includes("=")) return urlOrId;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];
  for (const pattern of patterns) {
    const match = urlOrId.match(pattern);
    if (match?.[1]) return match[1];
  }
  return urlOrId;
};

const getEmbedUrl = (urlOrId: string) =>
  `https://www.youtube.com/embed/${extractYouTubeId(urlOrId)}?rel=0&playsinline=1&autoplay=1&controls=1`;

const getThumbnailUrl = (urlOrId: string) =>
  `https://img.youtube.com/vi/${extractYouTubeId(urlOrId)}/hqdefault.jpg`;

/** Deterministic illustrated avatars with simple gender-based style selection (used in rating badge) */
const testimonialAvatarUrl = (
  seed: string,
  gender: AvatarGender = "neutral",
  size: 64 | 128 = 128
) => {
  const style =
    gender === "female" ? "lorelei" : gender === "male" ? "adventurer" : "bottts";
  return `https://api.dicebear.com/9.x/${style}/png?seed=${encodeURIComponent(seed)}&size=${size}`;
};

const platformLogos = {
  upwork: { src: "/landing/upwork-icon.webp", name: "Upwork" },
  clutch: { src: "/landing/clutch.png", name: "Clutch" },
} as const;

/* ─── Video facade ────────────────────────────────────────────────── */
const VideoFacade = ({
  url,
  title,
  onActivate,
  thumbnailSrc,
  posterLoadPriority = false,
}: {
  url: string;
  title: string;
  onActivate?: () => void;
  /** When set, replaces the YouTube auto thumbnail */
  thumbnailSrc?: string;
  /** When true with a custom poster, use next/image priority (only one LCP candidate) */
  posterLoadPriority?: boolean;
}) => {
  const [activated, setActivated] = useState(false);

  const activate = useCallback(() => {
    setActivated(true);
    onActivate?.();
  }, [onActivate]);

  return (
    <div
      className={styles.facadeWrap}
      onClick={activate}
      role="button"
      tabIndex={0}
      aria-label={`Play ${title}`}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && activate()}
    >
      {activated ? (
        <iframe
          className={styles.videoIframe}
          src={getEmbedUrl(url)}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={thumbnailSrc ?? getThumbnailUrl(url)}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className={`${styles.thumbnail}${thumbnailSrc ? ` ${styles.thumbnailCustomPoster}` : ""}`}
            {...(thumbnailSrc
              ? posterLoadPriority
                ? { priority: true }
                : { loading: "eager" as const }
              : { loading: "lazy" as const })}
          />
          <span className={styles.playButton} aria-hidden>
            <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </>
      )}
    </div>
  );
};

/* ─── Testimonials: real reviews (same source as main-branch carousel) ─ */
const testimonials = pgagiClientTestimonials.map((t, i) => ({
  id: i + 1,
  name: t.name.trim() || t.company.trim() || "Client",
  role: t.projectName.trim(),
  quote: t.quote.trim(),
  gender: t.gender ?? "neutral",
  platform: t.platform ?? ("upwork" as "upwork" | "clutch"),
}));

/* ─── Grid items: videos at positions 0 & 4 ──────────────────────── */
type GridItem =
  | { kind: "video"; videoIndex: number; key: string }
  | { kind: "quote"; testimonial: (typeof testimonials)[number]; key: string };

const desktopGridItems: GridItem[] = [
  { kind: "video", videoIndex: 0, key: "v0" },
  ...testimonials.slice(0, 4).map((testimonial) => ({
    kind: "quote" as const,
    testimonial,
    key: `q-${testimonial.id}`,
  })),
  { kind: "video", videoIndex: 1, key: "v1" },
  ...testimonials.slice(4).map((testimonial) => ({
    kind: "quote" as const,
    testimonial,
    key: `q-${testimonial.id}`,
  })),
];

const verificationPlatforms = [
  {
    name: "Clutch",
    src: "/landing/clutch.png",
    href: "https://clutch.co/profile/pgagi-private",
    width: 34,
    height: 34,
  },
  {
    name: "Upwork",
    src: "/landing/upwork-icon.webp",
    href: "https://www.upwork.com/agencies/1737467434828361728/",
    width: 34,
    height: 34,
  },
] as const;

/* ─── Rating badge — same faces as first four testimonial cards ───────── */
const ratingStackFaces = testimonials.slice(0, 4);

const RatingBadge = () => (
  <div
    className={styles.ratingBadge}
    aria-label={customersText.ratingAriaLabel}
  >
    <div className={styles.avatarStack} aria-hidden>
      {ratingStackFaces.map((t, i) => (
        <span
          key={t.id}
          className={styles.stackAvatar}
          title={t.name}
        >
          <Image
            src={testimonialAvatarUrl(t.name, t.gender, 64)}
            alt=""
            fill
            sizes="30px"
            className={styles.stackAvatarImage}
          />
        </span>
      ))}
    </div>
    <span className={styles.ratingText}>
      <strong>{customersText.ratingPrefix}</strong> {customersText.ratingSuffix}{" "}
      <strong className={styles.highlight}>{customersText.ratingHighlight}</strong> {customersText.ratingTail}
    </span>
    <span className={styles.starIcon} aria-hidden>
      ★
    </span>
  </div>
);

const VerificationPanel = () => (
  <div className={styles.verificationPanel}>
      <span className={styles.verificationEyebrow}>{customersText.verifiedByLabel}</span>
      <div className={styles.platformRow} aria-label={customersText.marketplaceProfilesAriaLabel}>
        {verificationPlatforms.map((platform, index) => (
          <Fragment key={platform.name}>
            <a
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.platformItem}
              aria-label={`Open ${platform.name} profile in a new tab`}
            >
              <Image
                src={platform.src}
                alt={`${platform.name} logo`}
                width={platform.width}
                height={platform.height}
                className={styles.platformLogo}
              />
              <span className={styles.platformName}>{platform.name}</span>
            </a>
            {index < verificationPlatforms.length - 1 ? (
              <span className={styles.platformSeparator} aria-hidden>
                &amp;
            </span>
          ) : null}
        </Fragment>
      ))}
    </div>
  </div>
);

/* ─── Testimonial card ────────────────────────────────────────────── */
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => {
  const logo = platformLogos[testimonial.platform];
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.avatar}>
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            sizes="(max-width: 768px) 28px, 44px"
            className={styles.avatarImage}
          />
        </span>
        <div className={styles.nameBlock}>
          <p className={styles.name}>{testimonial.name}</p>
          <p className={styles.role}>{testimonial.role}</p>
        </div>
      </div>
      <div className={styles.starRating} aria-label="5 out of 5 stars">
        {"★★★★★"}
      </div>
      <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
    </div>
  );
};

/* ─── Main component ──────────────────────────────────────────────── */
const Customers = () => {
  const shouldReduceMotion = useReducedMotion();
  const [videoActivated, setVideoActivated] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Clear timer on unmount */
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  /* Called when a video is tapped — pause marquee & cancel any pending resume */
  const handleVideoActivate = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setVideoActivated(true);
  }, []);

  /* Called when user moves/scrolls away from a video card — resume after 3 s */
  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setVideoActivated(false);
      resumeTimerRef.current = null;
    }, 3000);
  }, []);

  /* Split testimonials into 2 columns for mobile marquee.
     Video 1 goes into col1, Video 2 into col2 as the first item. */
  const testimonialsByColumn = testimonials.reduce<
    [(typeof testimonials), (typeof testimonials)]
  >(
    (cols, testimonial, index) => {
      cols[index % 2].push(testimonial);
      return cols;
    },
    [[], []]
  );

  const mobileCol1Items = [
    { kind: "video" as const, videoIndex: 0 },
    ...testimonialsByColumn[0].map((testimonial) => ({
      kind: "quote" as const,
      testimonial,
    })),
  ];
  const mobileCol2Items = [
    { kind: "video" as const, videoIndex: 1 },
    ...testimonialsByColumn[1].map((testimonial) => ({
      kind: "quote" as const,
      testimonial,
    })),
  ];

  return (
    <section className={styles.section} id="customers">
      <div className={styles.container}>
        {/* ── Header ── */}
        <motion.div
          className={styles.header}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: MOTION_DURATION.slow, ease: FRAMER_EASE.premiumOut }
          }
        >
          <h2 className={styles.title}>
            {customersText.titlePrefix} <em>{customersText.titleEmphasis}</em>
          </h2>
          <p className={styles.subtitle}>
            {customersText.subtitle}
          </p>
          <RatingBadge />
          <VerificationPanel />
        </motion.div>

        {/* ── Desktop 3-column grid (videos + quotes) ── */}
        <div className={styles.desktopGrid}>
          {desktopGridItems.map((item, i) => (
            <motion.div
              key={item.key}
              className={item.kind === "video" ? styles.videoCell : undefined}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: MOTION_DURATION.normal,
                      delay: Math.min((i % 3) * 0.08 + Math.floor(i / 3) * 0.05, 0.3),
                      ease: FRAMER_EASE.premiumOut,
                    }
              }
            >
              {item.kind === "video" ? (
                <VideoFacade
                  url={testimonialYouTubeUrls[item.videoIndex]}
                  title={`Customer testimonial video ${item.videoIndex + 1}`}
                  thumbnailSrc={videoPosterSrc(item.videoIndex)}
                  posterLoadPriority={item.videoIndex === 0}
                />
              ) : (
                <TestimonialCard testimonial={item.testimonial} />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Mobile 2-column opposite-direction marquee ── */}
        <div
          className={styles.mobileMarquee}
          data-paused={videoActivated || undefined}
        >
          {/* Column 1 — scrolls up */}
          <div className={styles.marqueeCol}>
            <div
              className={`${styles.marqueeTrack} ${shouldReduceMotion ? "" : styles.scrollUp}`}
            >
              {[...mobileCol1Items, ...mobileCol1Items].map((item, i) =>
                item.kind === "video" ? (
                  <div
                    key={`mc1-v-${i}`}
                    className={styles.mobileVideoCard}
                    onPointerLeave={scheduleResume}
                  >
                    <VideoFacade
                      url={testimonialYouTubeUrls[item.videoIndex]}
                      title={`Customer testimonial video ${item.videoIndex + 1}`}
                      onActivate={handleVideoActivate}
                      thumbnailSrc={videoPosterSrc(item.videoIndex)}
                      posterLoadPriority={item.videoIndex === 0}
                    />
                  </div>
                ) : (
                  <TestimonialCard
                    key={`mc1-q-${item.testimonial.id}-${i}`}
                    testimonial={item.testimonial}
                  />
                )
              )}
            </div>
          </div>

          {/* Column 2 — scrolls down */}
          <div className={styles.marqueeCol}>
            <div
              className={`${styles.marqueeTrack} ${shouldReduceMotion ? "" : styles.scrollDown}`}
            >
              {[...mobileCol2Items, ...mobileCol2Items].map((item, i) =>
                item.kind === "video" ? (
                  <div
                    key={`mc2-v-${i}`}
                    className={styles.mobileVideoCard}
                    onPointerLeave={scheduleResume}
                  >
                    <VideoFacade
                      url={testimonialYouTubeUrls[item.videoIndex]}
                      title={`Customer testimonial video ${item.videoIndex + 1}`}
                      onActivate={handleVideoActivate}
                      thumbnailSrc={videoPosterSrc(item.videoIndex)}
                      posterLoadPriority={item.videoIndex === 0}
                    />
                  </div>
                ) : (
                  <TestimonialCard
                    key={`mc2-q-${item.testimonial.id}-${i}`}
                    testimonial={item.testimonial}
                  />
                )
              )}
            </div>
          </div>

          {/* Fade overlays */}
          <div className={styles.fadeTop} aria-hidden />
          <div className={styles.fadeBottom} aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default Customers;
