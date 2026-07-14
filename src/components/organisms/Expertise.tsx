import React from 'react';
import Image from 'next/image';
import bgImageMobile from '../../../public/expertise/newExpertiseBgMobile.webp';
import styles from '@/styles/components/organisms/expertise.module.scss';
import CoreExpertiseAreas from './CoreExpertiseAreas';
import ProductVisionCta from './ProductVisionCta';

export default function Expertise() {
  return (
    <>
    {/* ── Section 1 — Hero (full-bleed bg image, locked to image ratio so it's never cropped) ── */}
    <section className={styles.hero}>
      {/* Desktop / tablet — full landscape scene, hidden ≤768px */}
      <Image
        src="/expertise/newExpertiseBg.webp"
        alt="An AI robot and a person with a laptop looking out over a sunlit valley"
        fill
        priority
        sizes="100vw"
        quality={85}
        className={`${styles.heroBg} ${styles.heroBgDesktop}`}
      />
      {/* Mobile — right-side crop with extended sky (person + robot stay in
          frame at a wider zoom); hidden >768px */}
      <Image
        src={bgImageMobile}
        alt="An AI robot and a person with a laptop looking out over a sunlit valley"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        quality={75}
        className={`${styles.heroBg} ${styles.heroBgMobile}`}
      />
      <div className={styles.heroOverlay}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Engineering Expertise</h1>
          <p className={styles.heroDescription}>
            A technical capability overview for the Expertise page, prepared for
            the design team. It is written to read precisely for engineering
            audiences and clearly for non-technical stakeholders, and covers four
            areas: AI engineering, AI with IoT, AI SaaS platforms, and mobile
            applications with integrated AI.
          </p>
          <div className={styles.heroPills}>
            <span className={styles.heroPill}>AI Engineering</span>
            <span className={styles.heroPill}>AI + IoT</span>
            <span className={styles.heroPill}>AI SaaS Platforms</span>
            <span className={styles.heroPill}>Mobile + AI</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── Section 2 — Core Expertise Areas (Figma 2113:4814 + cards) ── */}
    <CoreExpertiseAreas />

    {/* ── Section 3 — shared "See what your AI product could become" CTA ── */}
    <ProductVisionCta />
    </>
  );
}
