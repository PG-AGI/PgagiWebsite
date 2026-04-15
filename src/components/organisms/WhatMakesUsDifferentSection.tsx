"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "@/lib/motion-lite";
import styles from "@/styles/components/organisms/WhatMakesUsDifferentSection.module.scss";
import { FRAMER_EASE, MOTION_DURATION, MOTION_STAGGER } from "@/lib/motion";

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

// Animation Variants — tight stagger, no per-card delay stacking
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION_STAGGER.tight, // 0.06s — fast waterfall
      delayChildren: 0.05,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // No per-card delay — container stagger handles ordering
      duration: MOTION_DURATION.fast, // 0.28s — snappy
      ease: FRAMER_EASE.premiumOut,
    }
  }
};

const arrowVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.06,
      duration: 0.3,
    }
  })
};

const FlowArrow = ({
  direction,
  className,
  delayStep = 0,
}: {
  direction: FlowDirection;
  className?: string;
  delayStep?: number;
}) => {
  return (
    <motion.div 
      className={`${styles.flow} ${styles[direction]} ${className ?? ""}`} 
      aria-hidden
      custom={delayStep}
      variants={arrowVariants}
    >
      <motion.span
        className={styles.track}
        variants={{
          hidden: {
            scaleY: direction === "down" || direction === "up" ? 0 : 1,
            scaleX: direction === "right" ? 0 : 1,
            transformOrigin: direction === "down" ? "top" : direction === "up" ? "bottom" : "left"
          },
          visible: {
            scaleY: 1,
            scaleX: 1,
            transition: {
              delay: 0.05 + delayStep * 0.06,
              duration: MOTION_DURATION.fast,
              ease: FRAMER_EASE.snappyOut,
            }
          }
        }}
      />
      <motion.span
        className={styles.tracer}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.1 + delayStep * 0.06, duration: 0.2 } }
        }}
      />
      <motion.span
        className={styles.head}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.1 + delayStep * 0.06, duration: 0.2 } }
        }}
      />
    </motion.div>
  );
};

const ArtCard = ({ card }: { card: CardArt }) => {
  return (
    <motion.article
      className={styles.cardFrame}
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: MOTION_DURATION.fast, ease: FRAMER_EASE.snappyOut },
      }}
    >
      <Image
        src={card.src}
        alt={card.alt}
        width={card.width}
        height={card.height}
        className={styles.cardImage}
        sizes="(max-width: 860px) 90vw, (max-width: 1200px) 44vw, 500px"
      />
    </motion.article>
  );
};

const WhatMakesUsDifferentSection = () => {
  return (
    <section className={styles.section} id="what-makes-us-different">
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: MOTION_DURATION.slow, ease: FRAMER_EASE.premiumOut }}
        >
          What makes us different
        </motion.h2>

        <motion.div
          className={styles.board}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.1 }}
          variants={containerVariants}
        >
          <div className={styles.desktopGrid}>
            <div className={styles.leftTop}>
              <ArtCard card={cardArt.first} />
            </div>
            <div className={styles.rightTop}>
              <ArtCard card={cardArt.sixth} />
            </div>

            <FlowArrow direction="down" className={styles.leftFlowOne} delayStep={1} />
            <FlowArrow direction="up" className={styles.rightFlowOne} delayStep={5} />

            <div className={styles.leftMiddle}>
              <ArtCard card={cardArt.second} />
            </div>
            <div className={styles.rightMiddle}>
              <ArtCard card={cardArt.fifth} />
            </div>

            <FlowArrow direction="down" className={styles.leftFlowTwo} delayStep={2} />
            <FlowArrow direction="up" className={styles.rightFlowTwo} delayStep={4} />

            <div className={styles.leftBottom}>
              <ArtCard card={cardArt.third} />
            </div>
            <FlowArrow direction="right" className={styles.bottomFlow} delayStep={3} />
            <div className={styles.rightBottom}>
              <ArtCard card={cardArt.fourth} />
            </div>
          </div>

          <div className={styles.mobileStack}>
            {mobileOrder.map((card, index) => (
              <Fragment key={card.id}>
                <ArtCard card={card} />
                {index < mobileOrder.length - 1 && (
                  <FlowArrow direction="down" className={styles.mobileFlow} delayStep={index + 1} />
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferentSection;

