"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./RevenueSection.module.scss";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

type RevenueCard = {
  title: string;
  points: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

const revenueCards: RevenueCard[] = [
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

const CARD_STICKY_TOP_DESKTOP = 312;
const CARD_STICKY_TOP_MOBILE = 188;

const RevenueSection = () => {
  return (
    <section className={styles.section} id="revenue-system">
      <div className={styles.container}>
        <div className={styles.headingSticky}>
          <motion.div
            className={styles.headingBlock}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className={styles.title}>
              AI that scales <span>business revenue</span>
            </h2>
            <p className={styles.subtitle}>
              Not experiments.
              <br />
              Production systems tied to ROI.
            </p>
          </motion.div>
        </div>

        <ScrollStack
          className={styles.cardStack}
          stickyTop={CARD_STICKY_TOP_DESKTOP}
          mobileStickyTop={CARD_STICKY_TOP_MOBILE}
        >
          {revenueCards.map((card) => (
            <ScrollStackItem key={card.title}>
              <article className={styles.card}>
                <div className={styles.copyBlock}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <ul className={styles.pointList}>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className={styles.outcome}>
                    <span>Outcome:</span> {card.outcome}
                  </p>
                </div>

                <div className={styles.media}>
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={card.imageWidth}
                    height={card.imageHeight}
                    className={styles.mediaImage}
                  />
                </div>
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default RevenueSection;
