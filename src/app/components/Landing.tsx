"use client";
import React from "react";
import styles from "./landing.module.scss";
import Link from "next/link";
import Partners from "./Partners";

export default function Landing() {
  return (
    <section
      id="landing"
      className={styles.hero}
      aria-label="PG-AGI Hero — Building AI Systems that Scale to Millions"
    >
      {/* Background image via CSS (zero layout shift, best LCP) */}
      <div className={styles.heroBg} aria-hidden="true" />

      {/* Left-side gradient overlay for text legibility */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      {/* Hero content — bottom-left aligned */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          Building AI
          <br className={styles.brMobile} />
          {" "}Systems that
          <br />
          Scales to Millions.
        </h1>

        <p className={styles.heroSubtext}>
          Production-ready AI systems that automate operations
          {" "}and power better decisions.
        </p>

        <Link
          href="https://calendly.com/vivek-_ou/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.heroCta}
          id="hero-cta-button"
          aria-label="Let's build together — Book a call"
        >
          <span>Let&apos;s build together</span>
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
