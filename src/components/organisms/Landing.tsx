import React from "react";
import Image from "next/image";
import bgImage from "../../../public/background.png";
import bgImageMobile from "../../../public/background-mobile.png";
import styles from "@/styles/components/organisms/landing.module.scss";
import Link from "next/link";
import landingText from "@/constants/uiText/landing.json";
import EXTERNAL_LINKS from "@/constants/externalLinks";
import {
  AnnouncementBar,
  type AnnouncementProject,
} from "./text-flipping-board";

const LIVE_PROJECTS: AnnouncementProject[] = [
  { name: "SKILLINA", activeUsers: 12847 },
  { name: "DIGITAL TWIN", activeUsers: 5230 },
  { name: "AIMI", activeUsers: 8941 },
  { name: "AI2MD", activeUsers: 3624 },
];

const ArrowRightIcon = ({ stroke = "#000" }: { stroke?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9.33 3C9.33 3.43 9.76 4.08 10.19 4.62C10.75 5.32 11.42 5.93 12.18 6.4C12.75 6.75 13.44 7.08 14 7.08M14 7.08C13.44 7.08 12.75 7.42 12.18 7.77C11.42 8.23 10.75 8.85 10.19 9.54C9.76 10.09 9.33 10.73 9.33 11.17M14 7.08L0 7.08"
      stroke={stroke}
      strokeWidth="1"
    />
  </svg>
);

export default function Landing() {
  return (
    <section
      id="landing"
      className={styles.hero}
      aria-label={landingText.heroAriaLabel}
    >
      <div className={styles.announcementBarWrap}>
        <AnnouncementBar projects={LIVE_PROJECTS} intervalMs={4500} />
      </div>

      {/* Hero media is rendered as next/image so the browser can prioritize it immediately for LCP. */}
  <div className={styles.heroBg} aria-hidden="true">
    {/* Desktop — hidden below 768px via CSS, not downloaded on mobile */}
{/* Desktop */}
<Image
  src={bgImage}
  alt=""
  priority
  fetchPriority="high"
  placeholder="blur"
  sizes="100vw"
  quality={75}
  className={`${styles.heroBgImage} ${styles.heroBgDesktop}`}
/>

{/* Mobile */}
<Image
  src={bgImageMobile}
  alt=""
  priority
  fetchPriority="high"
  placeholder="blur"
  sizes="100vw"
  quality={75}
  className={`${styles.heroBgImage} ${styles.heroBgMobile}`}
/>
  </div>

      {/* Left-side gradient overlay for text legibility */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      {/* Centered max-width container — keeps content/cards constrained while bg fills 100% */}
      <div className={styles.heroInner}>
        {/* Hero content — bottom-left aligned */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            {landingText.headingLine1}
            <br />
            {landingText.headingLine2Prefix}
          </h1>

          <p className={styles.heroSubtext}>{landingText.subtext}</p>

          <Link
            href={EXTERNAL_LINKS.CALENDLY_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
            id="hero-cta-button"
            aria-label={landingText.ctaAriaLabel}
          >
            <span>{landingText.ctaLabel}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 14H18M18 14L15 11M18 14L15 17"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Glass cards row pinned to the bottom of the hero */}
        <div className={styles.heroCards} aria-label="Verticals">
          {/* Card 1 — AI x IoT Engineering (wide) */}
          <article className={`${styles.glassCard} ${styles.cardWide}`}>
            <h2 className={styles.cardTitle}>
              {landingText.verticalCard.titlePrefix}{" "}
              <span className={styles.cardTitleAccent}>
                {landingText.verticalCard.titleSuffix}
              </span>
            </h2>
            <p className={styles.cardDescription}>
              {landingText.verticalCard.description}
            </p>
            <div className={styles.cardCtaWrapper}>
              <button
                type="button"
                className={styles.cardCta}
                aria-label={landingText.verticalCard.ctaAriaLabel}
              >
                <span>{landingText.verticalCard.ctaLabel}</span>
                <span className={styles.cardCtaArrow} aria-hidden="true">
                  <ArrowRightIcon />
                </span>
              </button>
            </div>
          </article>

          {/* Card 2 — Capabilities grid (narrow) */}
          <article
            className={`${styles.glassCard} ${styles.cardGrid}`}
            aria-label="Capabilities"
          >
            <ul className={styles.capabilityGrid}>
              {landingText.capabilities.map((label) => (
                <li key={label} className={styles.capabilityCell}>
                  {label}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
