"use client";

import React from "react";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "./RevenueSection.module.scss";

const revenueCards = [
  {
    title: "Deep Business Immersion",
    points: [
      "Study workflows (pre-sales, ops, support)",
      "Identify bottlenecks",
      "Map high-impact leverage points",
    ],
    outcome: "Clear ROI targets",
    image: "/svgs/Revenue/First.svg",
    imageAlt: "ROI leverage analysis diagram",
    imageWidth: 321,
    imageHeight: 296,
  },
  {
    title: "ROI-Driven System Arch.",
    points: [
      "Modular AI system design",
      "Cost-aware infrastructure",
      "Human-in-the-loop control",
      "Secure, compliant foundation",
    ],
    outcome: "AI that improves margins",
    image: "/svgs/Revenue/Second.svg",
    imageAlt: "ROI-driven architecture diagram",
    imageWidth: 320,
    imageHeight: 295,
  },
  {
    title: "Enterprise Implementation",
    points: [
      "Seamless integration with your stack",
      "Cloud-native deployment",
      "Performance monitoring",
      "Continuous optimization",
    ],
    outcome: "AI embedded into operations",
    image: "/svgs/Revenue/Third.svg",
    imageAlt: "Enterprise implementation workflow diagram",
    imageWidth: 408,
    imageHeight: 376,
  },
];

const RevenueSection = () => {
  return (
    <ScrollStack
      id="revenue-system"
      animated={false}
      className={styles.outerSection}
      header={
        <>
          <h2 className={styles.title}>
            AI that scales <span>business revenue</span>
          </h2>
          <p className={styles.subtitle}>
            Not experiments.
            <br />
            Production systems tied to ROI.
          </p>
        </>
      }
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
    <div className={styles.copyBlock}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.pointList}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className={styles.outcome}>
        <span>Outcome:</span> {outcome}
      </p>
    </div>
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
  </>
);

export default RevenueSection;
