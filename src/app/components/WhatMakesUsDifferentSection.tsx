"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import styles from "./WhatMakesUsDifferentSection.module.scss";
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

// Animation Variants for performance — shared between children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION_STAGGER.relaxed,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Preserve the relative delays from before
      duration: MOTION_DURATION.slow,
      ease: FRAMER_EASE.premiumOut
    }
  })
};

const arrowVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5
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
              delay: 0.3 + delayStep * MOTION_STAGGER.normal,
              duration: MOTION_DURATION.slow,
              ease: FRAMER_EASE.snappyOut,
            }
          }
        }}
      />
      <motion.span 
        className={styles.tracer} 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.6 + delayStep * 0.1, duration: 0.4 } }
        }}
      />
      <motion.span 
        className={styles.head} 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.6 + delayStep * 0.1, duration: 0.4 } }
        }}
      />
    </motion.div>
  );
};

const ArtCard = ({ card, delayStep = 0 }: { card: CardArt, delayStep?: number }) => {
  return (
    <motion.article 
      className={styles.cardFrame}
      custom={delayStep}
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
          viewport={{ once: true, margin: "-100px", amount: 0.15 }}
          variants={{
            hidden: { opacity: 0, scale: 0.97 },
            visible: { 
              opacity: 1, 
              scale: 1, 
              transition: { duration: MOTION_DURATION.cinematic, ease: FRAMER_EASE.premiumOut } 
            }
          }}
        >
          <div className={styles.desktopGrid}>
            <div className={styles.leftTop}>
              <ArtCard card={cardArt.first} delayStep={1} />
            </div>
            <div className={styles.rightTop}>
              <ArtCard card={cardArt.sixth} delayStep={6} />
            </div>

            <FlowArrow direction="down" className={styles.leftFlowOne} delayStep={1} />
            <FlowArrow direction="up" className={styles.rightFlowOne} delayStep={5} />

            <div className={styles.leftMiddle}>
              <ArtCard card={cardArt.second} delayStep={2} />
            </div>
            <div className={styles.rightMiddle}>
              <ArtCard card={cardArt.fifth} delayStep={5} />
            </div>

            <FlowArrow direction="down" className={styles.leftFlowTwo} delayStep={2} />
            <FlowArrow direction="up" className={styles.rightFlowTwo} delayStep={4} />

            <div className={styles.leftBottom}>
              <ArtCard card={cardArt.third} delayStep={3} />
            </div>
            <FlowArrow direction="right" className={styles.bottomFlow} delayStep={3} />
            <div className={styles.rightBottom}>
              <ArtCard card={cardArt.fourth} delayStep={4} />
            </div>
          </div>

          <div className={styles.mobileStack}>
            {mobileOrder.map((card, index) => (
              <Fragment key={card.id}>
                <ArtCard card={card} delayStep={index + 1} />
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

