"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Customers.module.scss";
import { FRAMER_EASE, MOTION_DURATION } from "@/lib/motion";

/* ─── YouTube helpers ─────────────────────────────────────────────── */
const testimonialYouTubeUrls = [
  "https://www.youtube.com/watch?v=vsuDM890kmU",
  "https://youtu.be/6xaFA25-cc8?si=dlXudFrTusBX7aaJ",
];

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

/* ─── Video facade ────────────────────────────────────────────────── */
const VideoFacade = ({
  url,
  title,
  onActivate,
}: {
  url: string;
  title: string;
  onActivate?: () => void;
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
            src={getThumbnailUrl(url)}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className={styles.thumbnail}
            loading="lazy"
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

/* ─── Testimonials data ───────────────────────────────────────────── */
const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Startup Founder",
    quote:
      "PG-AGI transformed how we operate. The AI understands our workflows and automates them seamlessly — we cut delivery time in half.",
    initials: "SM",
    color: "#7c6fa0",
  },
  {
    id: 2,
    name: "Tomás Restrepo",
    role: "Agency Owner",
    quote:
      "We use PG-AGI for all our clients now. One conversation sets up their entire workflow. Turnaround went from weeks to hours.",
    initials: "TR",
    color: "#2e8b57",
  },
  {
    id: 3,
    name: "Théo Marchal",
    role: "E-commerce Brand",
    quote:
      "The AI understood our brand perfectly. Our conversion rate improved 3x after deploying the automated campaigns.",
    initials: "TM",
    color: "#b84040",
  },
  {
    id: 4,
    name: "Jordan Ellis",
    role: "SaaS Founder",
    quote:
      "Finally, AI that actually gets our product. The workflows it built look like they came from our senior engineering team.",
    initials: "JE",
    color: "#3a7fb5",
  },
  {
    id: 5,
    name: "Morgan Hayes",
    role: "Local Business Owner",
    quote:
      "I used to spend thousands on consultants. Now I describe what I need and PG-AGI builds it. My costs dropped by 60%.",
    initials: "MH",
    color: "#c47f2a",
  },
  {
    id: 6,
    name: "Sanne de Vries",
    role: "Coach & Consultant",
    quote:
      "I'm not technical at all. PG-AGI handles everything — scheduling, onboarding, follow-ups. It's like having a full team.",
    initials: "SV",
    color: "#4a9070",
  },
  {
    id: 7,
    name: "Anika Patel",
    role: "Marketing Director",
    quote:
      "The intelligence behind PG-AGI is remarkable. It adapts to our brand voice and generates content that actually converts.",
    initials: "AP",
    color: "#8b5e9a",
  },
  {
    id: 8,
    name: "Marcus Chen",
    role: "Operations Lead",
    quote:
      "Deployed across 5 departments in one week. The ROI was visible within the first month. Absolutely outstanding results.",
    initials: "MC",
    color: "#4a7fa5",
  },
  {
    id: 9,
    name: "Lena Hofmann",
    role: "Product Manager",
    quote:
      "PG-AGI cut our planning cycles from days to minutes. It synthesises data, drafts PRDs and flags risks — all in one place.",
    initials: "LH",
    color: "#a05030",
  },
  {
    id: 10,
    name: "David Okafor",
    role: "CTO, FinTech Startup",
    quote:
      "We integrated PG-AGI in a weekend. It handled our compliance checks, reporting pipeline and internal Q&A bot flawlessly.",
    initials: "DO",
    color: "#3060a0",
  },
];

/* ─── Grid items: videos at positions 0 & 4 ──────────────────────── */
type GridItem =
  | { kind: "video"; videoIndex: number; key: string }
  | { kind: "quote"; testimonial: (typeof testimonials)[number]; key: string };

const desktopGridItems: GridItem[] = [
  { kind: "video", videoIndex: 0, key: "v0" },
  { kind: "quote", testimonial: testimonials[0], key: "q0" },
  { kind: "quote", testimonial: testimonials[1], key: "q1" },
  { kind: "quote", testimonial: testimonials[2], key: "q2" },
  { kind: "video", videoIndex: 1, key: "v1" },
  { kind: "quote", testimonial: testimonials[3], key: "q3" },
  { kind: "quote", testimonial: testimonials[4], key: "q4" },
  { kind: "quote", testimonial: testimonials[5], key: "q5" },
  { kind: "quote", testimonial: testimonials[6], key: "q6" },
];

/* ─── Rating badge ────────────────────────────────────────────────── */
const avatarColors = ["#7c6fa0", "#2e8b57", "#b84040", "#3a7fb5"];

const RatingBadge = () => (
  <div className={styles.ratingBadge}>
    <div className={styles.avatarStack}>
      {avatarColors.map((color, i) => (
        <span
          key={i}
          className={styles.stackAvatar}
          style={{ background: color, zIndex: avatarColors.length - i }}
        />
      ))}
    </div>
    <span className={styles.ratingText}>
      <strong>4.9</strong> /5 from{" "}
      <strong className={styles.highlight}>500+</strong> clients
    </span>
    <span className={styles.starIcon} aria-hidden>
      ★
    </span>
  </div>
);

/* ─── Testimonial card ────────────────────────────────────────────── */
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <span
        className={styles.avatar}
        style={{ background: testimonial.color }}
      >
        {testimonial.initials}
      </span>
      <div className={styles.nameBlock}>
        <p className={styles.name}>{testimonial.name}</p>
        <p className={styles.role}>{testimonial.role}</p>
      </div>
    </div>
    <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
  </div>
);

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
  const mobileCol1Items = [
    { kind: "video" as const, videoIndex: 0 },
    ...testimonials.slice(0, 5).map((t) => ({ kind: "quote" as const, testimonial: t })),
  ];
  const mobileCol2Items = [
    { kind: "video" as const, videoIndex: 1 },
    ...testimonials.slice(5, 10).map((t) => ({ kind: "quote" as const, testimonial: t })),
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
            Wall of <em>Love</em>
          </h2>
          <p className={styles.subtitle}>
            Join thousands of businesses growing with PG&#8209;AGI
          </p>
          <RatingBadge />
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
