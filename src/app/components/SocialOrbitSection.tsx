"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./SocialOrbitSection.module.scss";

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
    nodes: [
      { platform: "Meta", angle: 0 },
      { platform: "X", angle: 45 },
      { platform: "Reddit", angle: 90 },
      { platform: "LinkedIn", angle: 135 },
      { platform: "Meta", angle: 180 },
      { platform: "X", angle: 225 },
      { platform: "Reddit", angle: 270 },
      { platform: "LinkedIn", angle: 315 },
    ],
  },
  {
    sizeClass: "innerRing",
    duration: 20,
    direction: 1,
    nodes: [
      { platform: "Reddit", angle: 22.5 },
      { platform: "LinkedIn", angle: 67.5 },
      { platform: "X", angle: 112.5 },
      { platform: "Meta", angle: 157.5 },
      { platform: "Reddit", angle: 202.5 },
      { platform: "LinkedIn", angle: 247.5 },
      { platform: "X", angle: 292.5 },
      { platform: "Meta", angle: 337.5 },
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
