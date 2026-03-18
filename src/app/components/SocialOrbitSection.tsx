"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./SocialOrbitSection.module.scss";

type OrbitNode = {
  platform: "Meta" | "Reddit" | "X";
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
    nodes: [
      { platform: "Meta", angle: 6 },
      { platform: "X", angle: 48 },
      { platform: "Reddit", angle: 96 },
      { platform: "Meta", angle: 146 },
      { platform: "X", angle: 196 },
      { platform: "Reddit", angle: 246 },
      { platform: "Meta", angle: 296 },
      { platform: "X", angle: 342 },
    ],
  },
  {
    sizeClass: "innerRing",
    duration: 20,
    direction: 1,
    nodes: [
      { platform: "Reddit", angle: 18 },
      { platform: "X", angle: 72 },
      { platform: "Meta", angle: 136 },
      { platform: "Reddit", angle: 204 },
      { platform: "X", angle: 260 },
      { platform: "Meta", angle: 320 },
    ],
  },
];

const accordionItems: AccordionItem[] = [
  {
    title: "Distribution Systems (Reddit, X, Meta)",
    description:
      "We design and optimize AI-powered distribution systems across Reddit, X, and Meta to identify demand, target the right audiences, and automate engagement at scale. Turn social channels into consistent growth engines.",
  },
  {
    title: "Distribution Systems (Reddit, X, Meta)",
    description:
      "We test multiple post formats and hooks, then scale only the variants with measurable pull from real audiences.",
  },
  {
    title: "Distribution Systems (Reddit, X, Meta)",
    description:
      "Each platform gets channel-native messaging, cadence, and workflow so output stays consistent without losing relevance.",
  },
  {
    title: "Distribution Systems (Reddit, X, Meta)",
    description:
      "We close the loop with analytics and insight pipelines to continuously improve content performance.",
  },
];

const iconByPlatform = {
  Meta: "/svgs/Landing/Meta.svg",
  Reddit: "/svgs/Landing/Reddit.svg",
  X: "/svgs/Landing/X.svg",
} as const;

const SocialOrbitSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} id="social-orbit">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>How we scale your product</h2>

        <div className={styles.panel}>
          <div className={styles.accordionColumn}>
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
          </div>

          <div className={styles.visualBlock}>
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
                          animationDirection: ring.direction === 1 ? "reverse" : "normal",
                        } as CSSProperties}
                      >
                        <Image
                          src={iconByPlatform[node.platform]}
                          alt={`${node.platform} logo`}
                          width={48}
                          height={48}
                          className={styles.nodeImage}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialOrbitSection;
