"use client";

import React from "react";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "@/styles/components/organisms/VisionSystemSection.module.scss";
import visionSystemText from "@/constants/uiText/visionSystem.json";

const visionCards = [
  {
    title: visionSystemText.cards[0].title,
    points: visionSystemText.cards[0].points,
    outcome: visionSystemText.cards[0].outcome,
    image: "/svgs/Landing/First-hd.webp",
    imageAlt: visionSystemText.cards[0].imageAlt,
  },
  {
    title: visionSystemText.cards[1].title,
    points: visionSystemText.cards[1].points,
    outcome: visionSystemText.cards[1].outcome,
    image: "/svgs/Landing/Second-hd.webp",
    imageAlt: visionSystemText.cards[1].imageAlt,
  },
  {
    title: visionSystemText.cards[2].title,
    points: visionSystemText.cards[2].points,
    outcome: visionSystemText.cards[2].outcome,
    image: "/svgs/Landing/Third-hd.webp",
    imageAlt: visionSystemText.cards[2].imageAlt,
  },
];

const VisionSystemSection = () => {
  return (
    <ScrollStack
      id="vision-system"
      animated={true}
      preRoll={0.10}
      scrollMultiplier={1.2}
      className={styles.outerSection}
      header={
        <>
          <h2 className={styles.title}>
            {visionSystemText.titleLine1}
            <br />
            We <span>{visionSystemText.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>{visionSystemText.subtitle}</p>
        </>
      }
    >
      {visionCards.map((card, i) => (
        <ScrollStackItem
          key={card.title}
          className={`${styles.card} ${styles[`card${i + 1}`]}`}
        >
          <CardContent {...card} />
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
};

const CardContent = ({
  title,
  points,
  outcome,
  image,
  imageAlt,
}: {
  title: string;
  points: string[];
  outcome: string;
  image: string;
  imageAlt: string;
}) => {
  // Note: the ScrollStack desktop engine recomputes its own geometry on
  // resize / window-load / ResizeObserver, so images finishing late don't need
  // a manual ScrollTrigger.refresh() here — and a per-image refresh() caused a
  // global layout recalc that hitched the scroll mid-animation.
  return (
    <>
      <div className={styles.media}>
        <div className={styles.imageInner}>
          <Image
            src={image}
            alt={imageAlt}
            width={1000}
            height={920}
            quality={86}
            sizes="(max-width: 768px) 88vw, 500px"
            className={styles.mediaImage}
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
          <span>{visionSystemText.outcomeLabel}</span> {outcome}
        </p>
      </div>
    </>
  );
};

export default VisionSystemSection;
