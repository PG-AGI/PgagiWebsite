"use client";

import Image from "next/image";
import { Fragment } from "react";
import styles from "./WhatMakesUsDifferentSection.module.scss";

type CardArt = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type FlowDirection = "down" | "up" | "right";

const cardArt: Record<string, CardArt> = {
  first: {
    id: "first",
    src: "/svgs/Different/First.svg",
    alt: "Architecture-led execution card",
    width: 568,
    height: 279,
  },
  second: {
    id: "second",
    src: "/svgs/Different/Second.svg",
    alt: "Security and compliance conscious card",
    width: 568,
    height: 214,
  },
  third: {
    id: "third",
    src: "/svgs/Different/Third.svg",
    alt: "Scalable infrastructure from day one card",
    width: 568,
    height: 214,
  },
  fourth: {
    id: "fourth",
    src: "/svgs/Different/four.svg",
    alt: "Human-in-the-loop reliability card",
    width: 568,
    height: 221,
  },
  fifth: {
    id: "fifth",
    src: "/svgs/Different/Five.svg",
    alt: "Growth and analytics embedded card",
    width: 568,
    height: 214,
  },
  sixth: {
    id: "sixth",
    src: "/svgs/Different/Six.svg",
    alt: "Long-term system partnerships card",
    width: 568,
    height: 221,
  },
};

const mobileOrder: CardArt[] = [
  cardArt.first,
  cardArt.second,
  cardArt.third,
  cardArt.fourth,
  cardArt.fifth,
  cardArt.sixth,
];

const FlowArrow = ({
  direction,
  className,
}: {
  direction: FlowDirection;
  className?: string;
}) => {
  return (
    <div className={`${styles.flow} ${styles[direction]} ${className ?? ""}`} aria-hidden>
      <span className={styles.track} />
      <span className={styles.tracer} />
      <span className={styles.head} />
    </div>
  );
};

const ArtCard = ({ card }: { card: CardArt }) => {
  return (
    <article className={styles.cardFrame}>
      <Image
        src={card.src}
        alt={card.alt}
        width={card.width}
        height={card.height}
        className={styles.cardImage}
        sizes="(max-width: 860px) 90vw, (max-width: 1200px) 44vw, 500px"
      />
    </article>
  );
};

const WhatMakesUsDifferentSection = () => {
  return (
    <section className={styles.section} id="what-makes-us-different">
      <div className={styles.container}>
        <h2 className={styles.title}>What makes us different</h2>

        <div className={styles.board}>
          <div className={styles.desktopGrid}>
            <div className={styles.leftTop}>
              <ArtCard card={cardArt.first} />
            </div>
            <div className={styles.rightTop}>
              <ArtCard card={cardArt.sixth} />
            </div>

            <FlowArrow direction="down" className={styles.leftFlowOne} />
            <FlowArrow direction="up" className={styles.rightFlowOne} />

            <div className={styles.leftMiddle}>
              <ArtCard card={cardArt.second} />
            </div>
            <div className={styles.rightMiddle}>
              <ArtCard card={cardArt.fifth} />
            </div>

            <FlowArrow direction="down" className={styles.leftFlowTwo} />
            <FlowArrow direction="up" className={styles.rightFlowTwo} />

            <div className={styles.leftBottom}>
              <ArtCard card={cardArt.third} />
            </div>
            <FlowArrow direction="right" className={styles.bottomFlow} />
            <div className={styles.rightBottom}>
              <ArtCard card={cardArt.fourth} />
            </div>
          </div>

          <div className={styles.mobileStack}>
            {mobileOrder.map((card, index) => (
              <Fragment key={card.id}>
                <ArtCard card={card} />
                {index < mobileOrder.length - 1 && (
                  <FlowArrow direction="down" className={styles.mobileFlow} />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferentSection;

