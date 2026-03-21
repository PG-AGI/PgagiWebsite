"use client";

import React from "react";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "./VisionSystemSection.module.scss";

const visionCards = [
  {
    title: "Product and market deep dive",
    points: [
      "Pressure-test your idea",
      "Define real user personas",
      "Map technical scope",
      "Identify scaling risks",
    ],
    outcome: "Clear product blueprint",
    image: "/svgs/Landing/First.svg",
    imageAlt: "Product and market deep dive illustration",
  },
  {
    title: "Architecture before code",
    points: [
      "High-level system design (HLD)",
      "Low-level execution plan (LLD)",
      "Security & compliance built-in",
      "Scalable cloud infrastructure",
    ],
    outcome: "No rebuild at 1,000 users",
    image: "/svgs/Landing/Second.svg",
    imageAlt: "Product architecture diagram",
  },
  {
    title: "Build. Launch. Scale.",
    points: [
      "Phase-wise execution",
      "Production-grade deployment",
      "Performance optimization",
      "Analytics embedded from day one",
    ],
    outcome: "AI product engineered to grow",
    image: "/svgs/Landing/Third.svg",
    imageAlt: "Build launch scale illustration",
  },
];

const VisionSystemSection = () => {
  const refreshTimeoutRef = React.useRef<number | null>(null);

  const handleMediaLoad = React.useCallback(() => {
    if (typeof window === "undefined") return;
    if (refreshTimeoutRef.current) window.clearTimeout(refreshTimeoutRef.current);
    refreshTimeoutRef.current = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 120);
  }, []);

  React.useEffect(
    () => () => {
      if (refreshTimeoutRef.current) {
        window.clearTimeout(refreshTimeoutRef.current);
      }
    },
    [],
  );

  return (
    <ScrollStack
      id="vision-system"
      className={styles.outerSection}
      header={
        <>
          <h2 className={styles.title}>
            You have the vision
            <br />
            We <span>engineer the system</span>
          </h2>
          <p className={styles.subtitle}>From idea to scalable AI product.</p>
        </>
      }
    >
      {visionCards.map((card, i) => (
        <ScrollStackItem
          key={card.title}
          className={`${styles.card} ${styles[`card${i + 1}`]}`}
        >
          <CardContent {...card} priority={i === 0} onMediaLoad={handleMediaLoad} />
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
  priority = false,
  onMediaLoad,
}: {
  title: string;
  points: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
  onMediaLoad?: () => void;
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
          width={420}
          height={250}
          className={styles.mediaImage}
          priority={priority}
          onLoadingComplete={onMediaLoad}
        />
      </div>
    </div>
  </>
);

export default VisionSystemSection;
