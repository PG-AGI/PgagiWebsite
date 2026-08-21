"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "@/styles/components/organisms/VisionSystemSection.module.scss";
import visionSystemText from "@/constants/uiText/visionSystem.json";
import DeepDiveDiagram from "./vision-system/DeepDiveDiagram";
import ArchitectureDiagram from "./vision-system/ArchitectureDiagram";
import BuildLaunchScaleDiagram from "./vision-system/BuildLaunchScaleDiagram";

const VisionSystemSection = () => {
  return (
    <ScrollStack
      id="vision-system"
      animated={true}
      mobileStickyHeader
      preRoll={0.1}
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
          <DeepDiveDiagram />
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
          <ArchitectureDiagram />
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
          <BuildLaunchScaleDiagram />
        </div>
      </ScrollStackItem>
    </ScrollStack>
  );
};

export default VisionSystemSection;
