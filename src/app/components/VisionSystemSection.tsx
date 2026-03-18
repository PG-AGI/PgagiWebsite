"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./VisionSystemSection.module.scss";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

type VisionCard = {
  title: string;
  points: string[];
  outcome: string;
  image: string;
  imageAlt: string;
};

const visionCards: VisionCard[] = [
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

const CARD_STICKY_TOP_DESKTOP = 312;
const CARD_STICKY_TOP_MOBILE = 188;

const VisionSystemSection = () => {
  return (
    <section className={styles.section} id="vision-system">
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
              You have the vision
              <br />
              We <span>engineer the system</span>
            </h2>
            <p className={styles.subtitle}>From idea to scalable AI product.</p>
          </motion.div>
        </div>

        <ScrollStack
          className={styles.cardStack}
          stickyTop={CARD_STICKY_TOP_DESKTOP}
          mobileStickyTop={CARD_STICKY_TOP_MOBILE}
        >
          {visionCards.map((card) => (
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
                    width={420}
                    height={250}
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

export default VisionSystemSection;
