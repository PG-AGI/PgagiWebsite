"use client";

import { Fragment } from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { motion, useReducedMotion } from "@/lib/motion-lite";
import styles from "@/styles/components/organisms/Customers.module.scss";
import { FRAMER_EASE, MOTION_DURATION } from "@/lib/motion";
import { pgagiClientTestimonials } from "@/data/pgagiClientTestimonials";
import customersText from "@/constants/uiText/customers.json";

const platformLogos = {
  upwork: { src: "/assets/Upwork%20(2).png", name: "Upwork" },
  clutch: { src: "/landing/clutch.png", name: "Clutch" },
} as const;

const allTestimonials = pgagiClientTestimonials.map((t, i) => ({
  id: i + 1,
  name: t.name.trim() || t.company.trim() || "Client",
  company: t.company.trim(),
  role: t.projectName.trim(),
  quote: t.quote.trim(),
  platform: (t.platform ?? "upwork") as "upwork" | "clutch",
  memberImage: t.memberImage ?? "",
  caseStudyUrl: t.caseStudyUrl ?? "",
}));

const featuredTestimonials = allTestimonials.filter((t) => t.memberImage);

/* ─── Rating badge ──────────────────────────────────────────────────── */
const RatingBadge = () => (
  <div className={styles.ratingBadge} aria-label={customersText.ratingAriaLabel}>
    <div className={styles.avatarStack} aria-hidden>
      {featuredTestimonials.slice(0, 4).map((t) => (
        <span key={t.id} className={styles.stackAvatar} title={t.name}>
          <Image
            src={t.memberImage}
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
      <strong className={styles.highlight}>{customersText.ratingHighlight}</strong>{" "}
      {customersText.ratingTail}
    </span>
    <span className={styles.starIcon} aria-hidden>★</span>
  </div>
);

/* ─── Verification panel ────────────────────────────────────────────── */
const verificationPlatforms = [
  { name: "Clutch",  src: "/landing/clutch.png",        href: "https://clutch.co/profile/pgagi-private",              w: 34, h: 34 },
  { name: "Upwork",  src: "/landing/upwork-icon.webp",  href: "https://www.upwork.com/agencies/1737467434828361728/", w: 34, h: 34 },
] as const;

const VerificationPanel = () => (
  <div className={styles.verificationPanel}>
    <span className={styles.verificationEyebrow}>{customersText.verifiedByLabel}</span>
    <div className={styles.platformRow} aria-label={customersText.marketplaceProfilesAriaLabel}>
      {verificationPlatforms.map((p, i) => (
        <Fragment key={p.name}>
          <a href={p.href} target="_blank" rel="noopener noreferrer"
            className={styles.platformItem}
            aria-label={`Open ${p.name} profile in a new tab`}
          >
            <Image src={p.src} alt={`${p.name} logo`} width={p.w} height={p.h} className={styles.platformLogo} />
            <span className={styles.platformName}>{p.name}</span>
          </a>
          {i < verificationPlatforms.length - 1 && (
            <span className={styles.platformSeparator} aria-hidden>&amp;</span>
          )}
        </Fragment>
      ))}
    </div>
  </div>
);

/* ─── Testimonial card ──────────────────────────────────────────────── */
type CardTestimonial = (typeof allTestimonials)[number];

const TestimonialCard = ({ t }: { t: CardTestimonial }) => {
  const logo = platformLogos[t.platform];
  return (
    <div className={styles.card}>
      <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>

      {t.caseStudyUrl ? (
        <a
          href={t.caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.caseStudyBtn}
        >
          View case study <span aria-hidden>→</span>
        </a>
      ) : (
        <button className={styles.caseStudyBtn} type="button">
          View case study <span aria-hidden>→</span>
        </button>
      )}

      <div className={styles.cardPerson}>
        <span className={styles.personAvatar}>
          {t.memberImage ? (
            <Image
              src={t.memberImage}
              alt={t.name}
              fill
              sizes="48px"
              className={styles.personAvatarImg}
            />
          ) : (
            <span className={styles.personInitials} aria-hidden>
              {t.name.charAt(0).toUpperCase()}
            </span>
          )}
        </span>
        <div className={styles.nameBlock}>
          <p className={styles.name}>{t.name}</p>
          {t.company && <p className={styles.company}>{t.company}</p>}
        </div>
      </div>

      <div className={styles.cardDivider} />

      <div className={styles.cardFooter}>
        <span className={styles.footerPlatform}>
          <Image src={logo.src} alt={logo.name} width={72} height={22} className={styles.footerLogo} />
        </span>
        <span className={styles.footerProject}>
          {t.role}&nbsp;
          <FiExternalLink size={13} aria-hidden />
        </span>
      </div>
    </div>
  );
};

/* ─── Main component ────────────────────────────────────────────────── */
const Customers = () => {
  const shouldReduceMotion = useReducedMotion();

  const row1 = [...allTestimonials].sort((a, b) => (b.memberImage ? 1 : 0) - (a.memberImage ? 1 : 0));
  const row2 = [...row1].reverse();

  return (
    <section className={styles.section} id="customers">
      <div className={styles.container}>
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
          <h2 className={styles.title}>{customersText.titlePrefix}</h2>
          <p className={styles.subtitle}>{customersText.subtitle}</p>
          <RatingBadge />
          <VerificationPanel />
        </motion.div>
      </div>

      {/* Full-width marquee rows outside the constrained container */}
      <div className={styles.marqueeWrapper} aria-hidden>
        <div className={styles.marqueeRow}>
          <div
            className={styles.marqueeTrack}
            style={shouldReduceMotion ? { animationPlayState: "paused" } : undefined}
          >
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        <div className={styles.marqueeRow}>
          <div
            className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`}
            style={shouldReduceMotion ? { animationPlayState: "paused" } : undefined}
          >
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
