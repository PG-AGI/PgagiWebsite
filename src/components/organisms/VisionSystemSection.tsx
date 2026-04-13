"use client";

import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "@/styles/components/organisms/VisionSystemSection.module.scss";
import visionSystemText from "@/constants/uiText/visionSystem.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const visionCards = [
  {
    title: visionSystemText.cards[0].title,
    points: visionSystemText.cards[0].points,
    outcome: visionSystemText.cards[0].outcome,
    image: "/svgs/Landing/First.svg",
    imageAlt: visionSystemText.cards[0].imageAlt,
  },
  {
    title: visionSystemText.cards[1].title,
    points: visionSystemText.cards[1].points,
    outcome: visionSystemText.cards[1].outcome,
    image: "/svgs/Landing/Second.svg",
    imageAlt: visionSystemText.cards[1].imageAlt,
  },
  {
    title: visionSystemText.cards[2].title,
    points: visionSystemText.cards[2].points,
    outcome: visionSystemText.cards[2].outcome,
    image: "/svgs/Landing/Third.svg",
    imageAlt: visionSystemText.cards[2].imageAlt,
  },
];

const VisionSystemSection = () => {
  return (
    <ScrollStack
      id="vision-system"
      animated={true}
      preRoll={0.10}
      scrollMultiplier={1.8}
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
          <CardContent {...card} priority={false} />
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
  priority?: boolean;
}) => {
  // When image loads, refresh GSAP scroll trigger calculations
  const handleImageLoad = () => {
    if (typeof window !== "undefined") {
      // Refresh scroll trigger calculations when image finishes loading
      ScrollTrigger.refresh();
    }
  };

  return (
    <>
      <div className={styles.copyBlock}>
        <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.pointList}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className={styles.outcome}>
        <span>{visionSystemText.outcomeLabel}</span> {outcome}
      </p>
    </div>
    <div className={styles.media}>
      <div className={styles.imageInner}>
        <Image
          src={image}
          alt={imageAlt}
          width={420}
          height={250}
          className={styles.mediaImage}
          loading="eager"
          priority={true}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
    </>
  );
};

export default VisionSystemSection;
