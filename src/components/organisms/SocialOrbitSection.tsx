"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, useReducedMotion } from "@/lib/motion-lite";
import styles from "@/styles/components/organisms/SocialOrbitSection.module.scss";
import { FRAMER_EASE, MOTION_DURATION, MOTION_STAGGER } from "@/lib/motion";

type OrbitNode = {
  platform: "Meta" | "Reddit" | "X" | "LinkedIn";
  angle: number;
};

type OrbitConfig = {
  sizeClass: "outerRing" | "innerRing";
  // CSS animation duration in seconds
  duration: number;
  // 1 = clockwise, -1 = counter-clockwise
  direction: 1 | -1;
  nodes: OrbitNode[];
};

type AccordionItem = {
  title: string;
  description: string;
};

const orbitItems: OrbitConfig[] = [
  {
    sizeClass: "outerRing",
    duration: 30,
    direction: -1,
    // 12 nodes, 30° apart — tighter icon spacing
    nodes: [
      { platform: "Meta", angle: 0 },
      { platform: "X", angle: 30 },
      { platform: "Reddit", angle: 60 },
      { platform: "LinkedIn", angle: 90 },
      { platform: "Meta", angle: 120 },
      { platform: "X", angle: 150 },
      { platform: "Reddit", angle: 180 },
      { platform: "LinkedIn", angle: 210 },
      { platform: "Meta", angle: 240 },
      { platform: "X", angle: 270 },
      { platform: "Reddit", angle: 300 },
      { platform: "LinkedIn", angle: 330 },
    ],
  },
  {
    sizeClass: "innerRing",
    duration: 20,
    direction: 1,
    // 10 nodes, 36° apart (offset 18°) — ~same arc spacing as the outer ring
    nodes: [
      { platform: "Reddit", angle: 18 },
      { platform: "LinkedIn", angle: 54 },
      { platform: "X", angle: 90 },
      { platform: "Meta", angle: 126 },
      { platform: "Reddit", angle: 162 },
      { platform: "LinkedIn", angle: 198 },
      { platform: "X", angle: 234 },
      { platform: "Meta", angle: 270 },
      { platform: "Reddit", angle: 306 },
      { platform: "LinkedIn", angle: 342 },
    ],
  },
];

const accordionItems: AccordionItem[] = [
  {
    title: "X Distribution Engine",
    description:
      "We help your product get attention on X through sharp positioning, founder-led content, reply strategy, viral threads, and distribution loops that turn views into qualified interest.",
  },
  {
    title: "LinkedIn Authority Growth",
    description:
      "We build LinkedIn distribution systems that turn your product, journey, and insights into trust-building content that attracts founders, operators, buyers, and decision-makers.",
  },
  {
    title: "Reddit Community Reach",
    description:
      "We help distribute your product through high-context Reddit content, problem-led storytelling, and community-native posts that drive real engagement without feeling like ads.",
  },
  {
    title: "Meta Ads & Demand Capture",
    description:
      "We create Meta ad flows that capture demand, test offers fast, and push the right audience into your funnel through creative, targeting, and conversion-focused campaigns.",
  },
];

const iconByPlatform = {
  Meta: "/svgs/Landing/Meta.svg",
  Reddit: "/svgs/Landing/Reddit.svg",
  X: "/svgs/Landing/X.svg",
  LinkedIn: "/linkedin.svg",
} as const;

const SocialOrbitSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const baseTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: MOTION_DURATION.slow, ease: FRAMER_EASE.premiumOut };

  return (
    <section className={styles.section} id="social-orbit">
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={baseTransition}
        >
          How we scale your product
        </motion.h2>

        <div className={styles.panel}>
          <motion.div
            className={styles.accordionColumn}
            initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : MOTION_STAGGER.normal }}
          >
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
                >
                  <button
                    type="button"
                    className={styles.accordionButton}
                    onClick={() =>
                      setOpenIndex((previous) => (previous === index ? null : index))
                    }
                    aria-expanded={isOpen}
                  >
                    <span>{item.title}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>

          <motion.div
            className={styles.visualBlock}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : MOTION_STAGGER.relaxed }}
          >
            <div className={styles.orbitScene}>
              {orbitItems.map((ring, ringIndex) => (
                // ⚡ ONE CSS animation per ring instead of 14 Framer Motion nodes
                // CSS transforms run entirely on the compositor thread — zero JS
                <div
                  key={`${ring.sizeClass}-${ringIndex}`}
                  className={`${styles.orbitRing} ${styles[ring.sizeClass]}`}
                  style={{
                    animationDuration: `${ring.duration}s`,
                    animationDirection: ring.direction === 1 ? "normal" : "reverse",
                  } as CSSProperties}
                >
                  {ring.nodes.map((node, nodeIndex) => (
                    <div
                      key={`${node.platform}-${nodeIndex}-${ringIndex}`}
                      className={styles.nodeAnchor}
                      style={{ "--node-angle": `${node.angle}deg` } as CSSProperties}
                    >
                      {/* Counter-rotate node so icon stays upright while ring spins */}
                      <div
                        className={styles.orbitNode}
                        style={{
                          animationDuration: `${ring.duration}s`,
                          // Must MATCH the ring's direction so the counter-spin
                          // cancels (not compounds) the ring rotation → upright icons
                          animationDirection: ring.direction === 1 ? "normal" : "reverse",
                        } as CSSProperties}
                      >
                        {/* Cancels the anchor's angular tilt so the logo stays upright */}
                        <div className={styles.nodeUpright}>
                          <Image
                            src={iconByPlatform[node.platform]}
                            alt={`${node.platform} logo`}
                            width={48}
                            height={48}
                            className={styles.nodeImage}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialOrbitSection;
