import React from "react";
import Image from "next/image";
import bgImageMobile from "../../../public/hero-sunset-mobile.webp";
import styles from "@/styles/components/organisms/landing.module.scss";
import landingText from "@/constants/uiText/landing.json";
import EXTERNAL_LINKS from "@/constants/externalLinks";
import ROUTES from "@/constants/routes";
import TransitionLink from "@/components/atoms/TransitionLink";
import {
  AnnouncementBar,
  type AnnouncementProject,
} from "./text-flipping-board";
import { ArrowRight } from 'lucide-react';

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

const LIVE_PROJECTS: AnnouncementProject[] = [
  { name: "SKILLINA", activeUsers: 12847 },
  { name: "DIGITAL TWIN", activeUsers: 5230 },
  { name: "AIMI", activeUsers: 8941 },
  { name: "AI2MD", activeUsers: 3624 },
];


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
    {/* Desktop — sunset hero, hidden below 768px via CSS */}
{/* eslint-disable-next-line @next/next/no-img-element */}
<img
  src="/hero-sunset.webp"
  alt=""
  aria-hidden="true"
  fetchPriority="high"
  decoding="async"
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

          <div className={styles.heroCtaWrapper}>
            <a
              href={EXTERNAL_LINKS.CALENDLY_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.heroCta} df-goal-lets-build-together`}
              id="hero-cta-button"
              aria-label={landingText.ctaAriaLabel}
              data-fast-goal="lets_build_together"
              data-df-event="lets_build_together_click"
              data-df-goal="lets_build_together_click"
              onClick={() => {
                if (typeof window !== "undefined" && (window as unknown as { datafast?: (event: string) => void }).datafast) {
                  (window as unknown as { datafast: (event: string) => void }).datafast("lets_build_together_click");
                  (window as unknown as { datafast: (event: string) => void }).datafast("lets_build_together");
                }
              }}
            >
              {landingText.ctaLabel}
              <div className={styles.ctaArrow}>
                <ArrowRight size={20} />
              </div>
            </a>
          </div>
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

            {/* Mobile-only capability rows (label : value) — matches the
                mobile Figma (SS2). Hidden on desktop, where the bordered
                grid card below is shown instead. */}
            <dl className={styles.capabilityRows} aria-label="Capabilities">
              {landingText.capabilityRows.map((row) => (
                <React.Fragment key={row.label}>
                  <dt className={styles.capabilityLabel}>{row.label}</dt>
                  <dd className={styles.capabilityValue}>{row.value}</dd>
                </React.Fragment>
              ))}
            </dl>

            <div className={styles.cardCtaWrapper}>
              <TransitionLink
                href={ROUTES.EXPERTISE_VERTICAL("ai-iot")}
                className={`${styles.cardCta} df-goal-explore-this-vertical`}
                ariaLabel={landingText.verticalCard.ctaAriaLabel}
                showSpinnerOnClick
                data-fast-goal="explore_this_vertical"
                data-df-event="explore_this_vertical_click"
                data-df-goal="explore_this_vertical_click"
              >
                <span>{landingText.verticalCard.ctaLabel}</span>
                <span className={styles.cardCtaArrow} aria-hidden="true">
                  <ArrowRightIcon />
                </span>
              </TransitionLink>
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
