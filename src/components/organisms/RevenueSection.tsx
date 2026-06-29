"use client";

import React from "react";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "@/styles/components/organisms/RevenueSection.module.scss";
import revenueSectionText from "@/constants/uiText/revenueSection.json";

// Illustration panels exported @2x from Figma — intrinsic sizes match the
// on-disk WebPs so next/image serves correctly sized, crisp output.
const revenueCards = [
  {
    title: revenueSectionText.cards[0].title,
    points: revenueSectionText.cards[0].points,
    outcome: revenueSectionText.cards[0].outcome,
    image: "/svgs/Revenue/First.webp",
    imageAlt: revenueSectionText.cards[0].imageAlt,
    imageWidth: 1040,
    imageHeight: 957,
  },
  {
    title: revenueSectionText.cards[1].title,
    points: revenueSectionText.cards[1].points,
    outcome: revenueSectionText.cards[1].outcome,
    image: "/svgs/Revenue/Second.webp",
    imageAlt: revenueSectionText.cards[1].imageAlt,
    imageWidth: 1040,
    imageHeight: 953,
  },
  {
    title: revenueSectionText.cards[2].title,
    points: revenueSectionText.cards[2].points,
    outcome: revenueSectionText.cards[2].outcome,
    image: "/svgs/Revenue/Third.webp",
    imageAlt: revenueSectionText.cards[2].imageAlt,
    imageWidth: 1080,
    imageHeight: 979,
  },
];

const RevenueSection = () => {
  return (
    <div className={styles.outerWrapper} id="revenue-section">
      {/* ── Static intro: scrolls past normally ─────────────── */}
      <div className={styles.introSection}>
        {/* Narrow text block */}
        <div className={styles.introCopy}>
          <h2 className={styles.title}>
            {revenueSectionText.titlePrefix}{" "}
            <span>{revenueSectionText.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>
            {revenueSectionText.subtitleLine1}
            <br />
            {revenueSectionText.subtitleLine2}
          </p>
        </div>

        {/* Wide banner image */}
        <div className={styles.headerImageWrapper}>
          <video
            autoPlay
            loop
            muted
            playsInline
            width={1400}
            height={700}
            className={styles.headerImage}
            aria-label="Revenue section banner"
          >
        <source src="/assets/RevenueSection.webm" type="video/webm" />
        <source src="/assets/RevenueSection.mp4" type="video/mp4" />
</video>
        </div>
      </div>

      {/* ── Animated card stack starts after intro ───────────── */}
      <ScrollStack
        id="revenue-system"
        animated={true}
        centerCards
        scrollMultiplier={1.8}
      >
        {revenueCards.map((card, i) => (
          <ScrollStackItem
            key={card.title}
            className={`${styles.card} ${styles[`card${i + 1}`]}`}
          >
            <CardContent {...card} priority={i === 0} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
};

const CardContent = ({
  title,
  points,
  outcome,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  priority = false,
}: {
  title: string;
  points: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  priority?: boolean;
}) => (
  <>
    <div className={styles.media}>
      <div className={styles.imageInner}>
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          quality={86}
          sizes="(max-width: 900px) 70vw, 520px"
          className={styles.mediaImage}
          priority={priority}
        />
      </div>
    </div>
    <div className={styles.copyBlock}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.pointList}>
        {points.map((point) => (
          <li key={point}>
            <svg
              className={styles.check}
              viewBox="0 0 20 15"
              fill="none"
              aria-hidden
            >
              <path
                d="M1 9.68C1 9.68 2.82 9.68 5.25 13.5C5.25 13.5 12 3.5 18 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className={styles.outcome}>
        <span>{revenueSectionText.outcomeLabel}</span> {outcome}
      </p>
    </div>
  </>
);

export default RevenueSection;
