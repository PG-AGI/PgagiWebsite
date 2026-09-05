import React from 'react';
import { getImageProps } from 'next/image';
import bgImageMobile from '../../../public/expertise/newExpertiseBgMobile.webp';
import styles from '@/styles/components/organisms/expertise.module.scss';
import CoreExpertiseAreas from './CoreExpertiseAreas';
import ProductVisionCta from './ProductVisionCta';

const HERO_ALT =
  'An AI robot and a person with a laptop looking out over a sunlit valley';

export default function Expertise() {
  // Art-directed hero: a single <picture> so each breakpoint downloads ONLY its
  // own asset. (Two <Image>s toggled with display:none both get preloaded and
  // downloaded on every device — mobile paid for the desktop file too.)
  const {
    props: { srcSet: heroDesktopSrcSet },
  } = getImageProps({
    src: '/expertise/newExpertiseBg.webp',
    alt: HERO_ALT,
    fill: true,
    sizes: '100vw',
    quality: 85,
  });
  const {
    props: { srcSet: heroMobileSrcSet, ...heroImgProps },
  } = getImageProps({
    src: bgImageMobile,
    alt: HERO_ALT,
    fill: true,
    priority: true,
    placeholder: 'blur',
    sizes: '100vw',
    quality: 75,
  });

  return (
    <>
    {/* ── Section 1 — Hero (full-bleed bg image, locked to image ratio so it's never cropped) ── */}
    <section className={styles.hero}>
      {/* getImageProps emits no preload hint, so declare them manually — the
          media query means each device preloads exactly one file. React hoists
          these <link>s into <head>. */}
      <link
        rel="preload"
        as="image"
        imageSrcSet={heroDesktopSrcSet}
        imageSizes="100vw"
        media="(min-width: 769px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        imageSrcSet={heroMobileSrcSet}
        imageSizes="100vw"
        media="(max-width: 768px)"
        fetchPriority="high"
      />
      <picture>
        {/* Desktop / tablet ≥769px — full landscape scene */}
        <source
          media="(min-width: 769px)"
          srcSet={heroDesktopSrcSet}
          sizes="100vw"
        />
        {/* Mobile fallback — right-side crop with extended sky (person + robot
            stay in frame at a wider zoom) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...heroImgProps}
          srcSet={heroMobileSrcSet}
          alt={HERO_ALT}
          className={styles.heroBg}
        />
      </picture>
      <div className={styles.heroFade} aria-hidden="true" />
      <div className={styles.heroOverlay}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Engineering Expertise</h1>
          <p className={styles.heroDescription}>
            Our engineering expertise combines AI, cloud, web, mobile, and IoT
            technologies to build scalable, secure, and production-ready digital
            solutions. From intelligent automation and AI-powered SaaS
            platforms to connected IoT systems and mobile applications, we help
            businesses transform ideas into high-performance products with a
            strong focus on innovation, reliability, and long-term growth.
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
