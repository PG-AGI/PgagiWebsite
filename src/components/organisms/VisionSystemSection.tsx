"use client";

import React from "react";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "@/styles/components/organisms/VisionSystemSection.module.scss";
import visionSystemText from "@/constants/uiText/visionSystem.json";

const VisionSystemSection = () => {
  return (
    <ScrollStack
      id="vision-system"
      animated={true}
      mobileStickyHeader
      preRoll={0.1}
      scrollMultiplier={1.2}
      cardOverlap={0}
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
      {/* ── Card 1: Product and market deep dive ── */}
      <ScrollStackItem className={`${styles.card} ${styles.card1}`}>
        <div className={styles.copyBlock}>
          <h3 className={styles.cardTitle}>
            <span className={styles.accentBlue}>
              {visionSystemText.cards[0].titlePart1}
            </span>
            <br />
            <span>{visionSystemText.cards[0].titlePart2}</span>
          </h3>
          <p className={styles.cardDescription}>
            {visionSystemText.cards[0].description}
          </p>
          <ul className={styles.pointList}>
            {visionSystemText.cards[0].points.map((pt, idx) => (
              <li
                key={idx}
                dangerouslySetInnerHTML={{ __html: pt }}
              />
            ))}
          </ul>
          <div className={`${styles.outcomePill} ${styles.bluePill}`}>
            {visionSystemText.outcomeLabel} {visionSystemText.cards[0].outcome}
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.imageInner}>
            <Image
              src="/svgs/Vision/product and market deep dive-img.png"
              alt={visionSystemText.cards[0].imageAlt}
              width={1108}
              height={1146}
              quality={100}
              unoptimized
              sizes="(max-width: 768px) 100vw, 554px"
              className={styles.mediaImage}
              priority
            />
          </div>
        </div>
      </ScrollStackItem>

      {/* ── Card 2: Architecture before code ── */}
      <ScrollStackItem className={`${styles.card} ${styles.card2}`}>
        <div className={styles.copyBlock}>
          <h3 className={styles.cardTitle}>
            <span className={styles.accentRust}>
              {visionSystemText.cards[1].titlePart1}
            </span>{" "}
            <span>{visionSystemText.cards[1].titlePart2}</span>
          </h3>
          <p className={styles.cardDescription}>
            {visionSystemText.cards[1].description}
          </p>
          <ul className={styles.pointList}>
            {visionSystemText.cards[1].points.map((pt, idx) => (
              <li
                key={idx}
                dangerouslySetInnerHTML={{ __html: pt }}
              />
            ))}
          </ul>
          <div className={`${styles.outcomePill} ${styles.rustPill}`}>
            {visionSystemText.outcomeLabel} {visionSystemText.cards[1].outcome}
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.imageInner}>
            <Image
              src="/svgs/Vision/architecture before code-img.png"
              alt={visionSystemText.cards[1].imageAlt}
              width={1108}
              height={1146}
              quality={100}
              unoptimized
              sizes="(max-width: 768px) 100vw, 554px"
              className={styles.mediaImage}
            />
          </div>
        </div>
      </ScrollStackItem>

      {/* ── Card 3: Build. Launch. Scale. ── */}
      <ScrollStackItem className={`${styles.card} ${styles.card3}`}>
        <div className={styles.copyBlock}>
          <h3 className={styles.cardTitle}>
            <span>{visionSystemText.cards[2].titlePart1} </span>
            <span className={styles.accentLime}>
              {visionSystemText.cards[2].titlePart2}
            </span>
          </h3>
          <p className={styles.cardDescription}>
            {visionSystemText.cards[2].description}
          </p>
          <ul className={styles.pointList}>
            {visionSystemText.cards[2].points.map((pt, idx) => (
              <li
                key={idx}
                dangerouslySetInnerHTML={{ __html: pt }}
              />
            ))}
          </ul>
          <div className={`${styles.outcomePill} ${styles.limePill}`}>
            {visionSystemText.outcomeLabel} {visionSystemText.cards[2].outcome}
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.imageInner}>
            <Image
              src="/svgs/Vision/build-launch-scale-img.png"
              alt={visionSystemText.cards[2].imageAlt}
              width={1108}
              height={1146}
              quality={100}
              unoptimized
              sizes="(max-width: 768px) 100vw, 554px"
              className={styles.mediaImage}
            />
          </div>
        </div>
      </ScrollStackItem>
    </ScrollStack>
  );
};

export default VisionSystemSection;
