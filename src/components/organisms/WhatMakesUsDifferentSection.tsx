"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, type CSSProperties } from "react";
import styles from "@/styles/components/organisms/WhatMakesUsDifferentSection.module.scss";

type CardArt = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  // Position in the process flow (reading order). Drives the synced spotlight
  // timeline — it is the single source of truth for *when* a card lights up,
  // identical on desktop (snake layout) and mobile (vertical stack).
  step: number;
};

type FlowDirection = "down" | "up" | "right";

const cardArt: Record<string, CardArt> = {
  first: {
    id: "first",
    src: "/svgs/Different/First.svg",
    alt: "Architecture-led execution card",
    width: 568,
    height: 279,
    step: 0,
  },
  second: {
    id: "second",
    src: "/svgs/Different/Second.svg",
    alt: "Security and compliance conscious card",
    width: 568,
    height: 214,
    step: 1,
  },
  third: {
    id: "third",
    src: "/svgs/Different/Third.svg",
    alt: "Scalable infrastructure from day one card",
    width: 568,
    height: 214,
    step: 2,
  },
  fourth: {
    id: "fourth",
    src: "/svgs/Different/four.svg",
    alt: "Human-in-the-loop reliability card",
    width: 568,
    height: 221,
    step: 3,
  },
  fifth: {
    id: "fifth",
    src: "/svgs/Different/Five.svg",
    alt: "Growth and analytics embedded card",
    width: 568,
    height: 214,
    step: 4,
  },
  sixth: {
    id: "sixth",
    src: "/svgs/Different/Six.svg",
    alt: "Long-term system partnerships card",
    width: 568,
    height: 221,
    step: 5,
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

// A connector on the flow. `step` places its comet on the shared timeline: each
// arrow fires just after its source card lights (handled in CSS via `--step`).
const FlowArrow = ({
  direction,
  className,
  step = 0,
}: {
  direction: FlowDirection;
  className?: string;
  step?: number;
}) => {
  return (
    <div
      className={`${styles.flow} ${styles[direction]} ${className ?? ""}`}
      aria-hidden
      style={{ "--step": step } as CSSProperties}
    >
      {/* Dim resting rail, the bright "comet" reveal that draws over it, and the head. */}
      <span className={styles.track} />
      <span className={styles.draw} />
      <span className={styles.head} />
    </div>
  );
};

const ArtCard = ({ card }: { card: CardArt }) => {
  return (
    <article className={styles.cardFrame} style={{ "--step": card.step } as CSSProperties}>
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
  // Run the CSS flow loop only while the section is on screen: the observer
  // toggles `.playing`, so the animation auto-pauses (and costs nothing) when
  // scrolled away. Pure IntersectionObserver — no per-frame JS.
  const boardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = boardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle(styles.playing, entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="what-makes-us-different">
      <div className={styles.container}>
        <h2 className={styles.title}>What makes us different</h2>

        <div ref={boardRef} className={styles.board}>
          <div className={styles.desktopGrid}>
            <div className={styles.leftTop}>
              <ArtCard card={cardArt.first} />
            </div>
            <div className={styles.rightTop}>
              <ArtCard card={cardArt.sixth} />
            </div>

            <FlowArrow direction="down" className={styles.leftFlowOne} step={1} />
            <FlowArrow direction="up" className={styles.rightFlowOne} step={5} />

            <div className={styles.leftMiddle}>
              <ArtCard card={cardArt.second} />
            </div>
            <div className={styles.rightMiddle}>
              <ArtCard card={cardArt.fifth} />
            </div>

            <FlowArrow direction="down" className={styles.leftFlowTwo} step={2} />
            <FlowArrow direction="up" className={styles.rightFlowTwo} step={4} />

            <div className={styles.leftBottom}>
              <ArtCard card={cardArt.third} />
            </div>
            <FlowArrow direction="right" className={styles.bottomFlow} step={3} />
            <div className={styles.rightBottom}>
              <ArtCard card={cardArt.fourth} />
            </div>
          </div>

          <div className={styles.mobileStack}>
            {mobileOrder.map((card, index) => (
              <Fragment key={card.id}>
                <ArtCard card={card} />
                {index < mobileOrder.length - 1 && (
                  <FlowArrow direction="down" className={styles.mobileFlow} step={index + 1} />
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
