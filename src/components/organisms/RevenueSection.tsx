"use client";

import React from "react";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "@/styles/components/organisms/RevenueSection.module.scss";
import revenueSectionText from "@/constants/uiText/revenueSection.json";

const revenueCards = [
  {
    titlePart1: revenueSectionText.cards[0].titlePart1,
    titlePart2: revenueSectionText.cards[0].titlePart2,
    accentClass: styles.accentBlue,
    pillClass: styles.bluePill,
    cardClass: styles.card1,
    description: revenueSectionText.cards[0].description,
    points: revenueSectionText.cards[0].points,
    outcome: revenueSectionText.cards[0].outcome,
    image: "/svgs/Revenue/First.png",
    imageAlt: revenueSectionText.cards[0].imageAlt,
  },
  {
    titlePart1: revenueSectionText.cards[1].titlePart1,
    titlePart2: revenueSectionText.cards[1].titlePart2,
    accentClass: styles.accentRust,
    pillClass: styles.rustPill,
    cardClass: styles.card2,
    description: revenueSectionText.cards[1].description,
    points: revenueSectionText.cards[1].points,
    outcome: revenueSectionText.cards[1].outcome,
    image: "/svgs/Revenue/Second.png",
    imageAlt: revenueSectionText.cards[1].imageAlt,
  },
  {
    titlePart1: revenueSectionText.cards[2].titlePart1,
    titlePart2: revenueSectionText.cards[2].titlePart2,
    accentClass: styles.accentLime,
    pillClass: styles.limePill,
    cardClass: styles.card3,
    description: revenueSectionText.cards[2].description,
    points: revenueSectionText.cards[2].points,
    outcome: revenueSectionText.cards[2].outcome,
    image: "/svgs/Revenue/Third.png",
    imageAlt: revenueSectionText.cards[2].imageAlt,
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

        {/* Wide banner video */}
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
        scrollMultiplier={1.2}
      >
        {revenueCards.map((card, i) => (
          <ScrollStackItem
            key={i}
            className={`${styles.card} ${card.cardClass}`}
          >
            <div className={styles.copyBlock}>
              <h3 className={styles.cardTitle}>
                {i === 2 ? (
                  <>
                    <span>{card.titlePart1} </span>
                    <span className={card.accentClass}>{card.titlePart2}</span>
                  </>
                ) : (
                  <>
                    <span className={card.accentClass}>{card.titlePart1}</span>{" "}
                    <span>{card.titlePart2}</span>
                  </>
                )}
              </h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <ul className={styles.pointList}>
                {card.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
              <div className={`${styles.outcomePill} ${card.pillClass}`}>
                {revenueSectionText.outcomeLabel} {card.outcome}
              </div>
            </div>

            <div className={styles.media}>
              <div className={styles.imageInner}>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={1000}
                  height={1000}
                  quality={95}
                  sizes="(max-width: 768px) 90vw, 480px"
                  className={styles.mediaImage}
                  priority={i === 0}
                />
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
};

export default RevenueSection;
