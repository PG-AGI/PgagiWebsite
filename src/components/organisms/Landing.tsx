"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/components/organisms/landing.module.scss";
import Link from "next/link";
import Partners from "./Partners";
import landingText from "@/constants/uiText/landing.json";

const heroVerificationPlatforms = [
  {
    name: "Clutch",
    src: "/landing/clutch.png",
    href: "https://clutch.co/profile/pgagi-private",
    width: 22,
    height: 22,
  },
  {
    name: "Upwork",
    src: "/landing/upwork-icon.webp",
    href: "https://www.upwork.com/agencies/1737467434828361728/",
    width: 22,
    height: 22,
  },
] as const;

export default function Landing() {
  return (
    <section
      id="landing"
      className={styles.hero}
      aria-label={landingText.heroAriaLabel}
    >
      {/* Background image via CSS (zero layout shift, best LCP) */}
      <div className={styles.heroBg} aria-hidden="true" />

      {/* Left-side gradient overlay for text legibility */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      {/* Hero content — bottom-left aligned */}
      <div className={styles.heroContent}>
        <div
          className={styles.heroTrustBadge}
          aria-label={landingText.verifiedByAriaLabel}
        >
          <span className={styles.heroTrustLabel}>{landingText.verifiedByLabel}</span>
          <div className={styles.heroTrustPlatforms}>
            {heroVerificationPlatforms.map((platform, index) => (
              <React.Fragment key={platform.name}>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.heroTrustPlatform}
                  aria-label={landingText.verificationPlatforms[index]?.openProfileAriaLabel ?? `Open ${platform.name} profile in a new tab`}
                >
                  <span className={styles.heroTrustLogoWrap}>
                    <Image
                      src={platform.src}
                      alt={`${platform.name} logo`}
                      width={platform.width}
                      height={platform.height}
                      className={styles.heroTrustLogo}
                    />
                  </span>
                  <span className={styles.heroTrustName}>{platform.name}</span>
                </a>
                {index < heroVerificationPlatforms.length - 1 ? (
                  <span className={styles.heroTrustDivider} aria-hidden>
                    &amp;
                  </span>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>

        <h1 className={styles.heroHeading}>
          {landingText.headingLine1}
          <br className={styles.brMobile} />
          {" "}{landingText.headingLine2Prefix}
          <br />
          {landingText.headingLine3}
        </h1>

        <p className={styles.heroSubtext}>
          {landingText.subtext}
        </p>

        <Link
          href="https://calendly.com/vivek_01/30min"
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

      {/* Partners bar — pinned to bottom of hero */}
      <div className={styles.partnersWrapper}>
        <Partners />
      </div>
    </section>
  );
}
