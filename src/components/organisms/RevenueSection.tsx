"use client";

import React from "react";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "@/styles/components/organisms/RevenueSection.module.scss";
import revenueSectionText from "@/constants/uiText/revenueSection.json";

const revenueCards = [
  {
    title: revenueSectionText.cards[0].title,
    points: revenueSectionText.cards[0].points,
    outcome: revenueSectionText.cards[0].outcome,
    image: "/svgs/Revenue/First.svg",
    imageAlt: revenueSectionText.cards[0].imageAlt,
    imageWidth: 321,
    imageHeight: 296,
  },
  {
    title: revenueSectionText.cards[1].title,
    points: revenueSectionText.cards[1].points,
    outcome: revenueSectionText.cards[1].outcome,
    image: "/svgs/Revenue/Second.svg",
    imageAlt: revenueSectionText.cards[1].imageAlt,
    imageWidth: 320,
    imageHeight: 295,
  },
  {
    title: revenueSectionText.cards[2].title,
    points: revenueSectionText.cards[2].points,
    outcome: revenueSectionText.cards[2].outcome,
    image: "/svgs/Revenue/Third.svg",
    imageAlt: revenueSectionText.cards[2].imageAlt,
    imageWidth: 408,
    imageHeight: 376,
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
          className={styles.mediaImage}
          priority={priority}
        />
      </div>
    </div>
    <div className={styles.copyBlock}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.pointList}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className={styles.outcome}>
        <span>{revenueSectionText.outcomeLabel}</span> {outcome}
      </p>
    </div>
  </>
);

export default RevenueSection;
