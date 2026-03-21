"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BuildEcosystemSection.module.scss";
import {
  FRAMER_EASE,
  GSAP_EASE,
  MOBILE_BREAKPOINT,
  MOTION_DURATION,
  MOTION_SCRUB,
  MOTION_STAGGER,
} from "@/lib/motion";

type BuildNode = {
  key: string;
  alt: string;
  src: string;
  width: number;
  height: number;
};

type BuildCardProps = {
  card: BuildNode;
  className?: string;
  motionDelay?: number;
};

const buildNodes: BuildNode[] = [
  {
    key: "workspace",
    alt: "Workspace and collaboration integrations",
    src: "/svgs/BuildEco/Workpace.svg",
    width: 323,
    height: 141,
  },
  {
    key: "project",
    alt: "Project and operations integrations",
    src: "/svgs/BuildEco/Project.svg",
    width: 322,
    height: 141,
  },
  {
    key: "crm",
    alt: "CRM integrations",
    src: "/svgs/BuildEco/CRM.svg",
    width: 322,
    height: 141,
  },
  {
    key: "communication",
    alt: "Communication integrations",
    src: "/svgs/BuildEco/Comunication.svg",
    width: 315,
    height: 141,
  },
  {
    key: "erp",
    alt: "ERP integrations",
    src: "/svgs/BuildEco/ERP.svg",
    width: 323,
    height: 141,
  },
];

const getNode = (key: string) => {
  const node = buildNodes.find((item) => item.key === key);

  if (!node) {
    throw new Error(`Missing BuildEco node for key: ${key}`);
  }

  return node;
};

const BuildCard = ({ card, className, motionDelay = 0 }: BuildCardProps) => {
  return (
    <motion.article
      className={`${styles.integrationCard} ${className ?? ""}`}
      initial={{ opacity: 0, y: 22, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay: motionDelay,
        duration: MOTION_DURATION.normal,
        ease: FRAMER_EASE.premiumOut,
      }}
    >
      <Image
        src={card.src}
        alt={card.alt}
        width={card.width}
        height={card.height}
        className={styles.cardImage}
        unoptimized
      />
    </motion.article>
  );
};

const BuildEcosystemSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const workspace = getNode("workspace");
  const project = getNode("project");
  const crm = getNode("crm");
  const communication = getNode("communication");
  const erp = getNode("erp");

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    const stage = stageRef.current;
    const section = sectionRef.current;

    if (!scrollArea || !stage || !section) return;

    // Only use GSAP horizontal scroll on tablet and above-mobile.
    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${MOBILE_BREAKPOINT}px) and (max-width: 920px)`, () => {
      const getHorizontalDistance = () => {
        const stageStyles = window.getComputedStyle(stage);
        const marginLeft = Number.parseFloat(stageStyles.marginLeft) || 0;
        const marginRight = Number.parseFloat(stageStyles.marginRight) || 0;

        return Math.max(
          0,
          stage.scrollWidth + marginLeft + marginRight - scrollArea.clientWidth,
        );
      };

      const setMobileDistanceVar = () => {
        section.style.setProperty(
          "--mobile-horizontal-distance",
          `${getHorizontalDistance()}px`,
        );
      };

      setMobileDistanceVar();

      if (getHorizontalDistance() <= 0) {
        section.style.removeProperty("--mobile-horizontal-distance");
        return undefined;
      }

      const scrollTween = gsap.to(stage, {
        x: () => -getHorizontalDistance(),
        ease: GSAP_EASE.smoothInOut,
        scrollTrigger: {
          trigger: scrollArea,
          start: "top top",
          end: () => `+=${getHorizontalDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: shouldReduceMotion ? false : MOTION_SCRUB.cinematic,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onRefresh: setMobileDistanceVar,
        },
      });

      return () => {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
        gsap.set(stage, { clearProps: "transform" });
        section.style.removeProperty("--mobile-horizontal-distance");
      };
    });

    return () => mm.revert();
  }, [shouldReduceMotion]);

  return (
    <section ref={sectionRef} className={styles.section} id="build-ecosystem">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: MOTION_DURATION.slow,
            ease: FRAMER_EASE.premiumOut,
          }}
        >
          Build inside your <span>ecosystem</span>
        </motion.h2>

        <div
          ref={scrollAreaRef}
          className={styles.scrollArea}
        >
          <div ref={stageRef} className={styles.stage}>
            <div className={styles.gridBackdrop} aria-hidden="true" />
            <span className={styles.glowCenter} aria-hidden="true" />

            <svg
              className={styles.signalLayer}
              viewBox="0 0 1160 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="build-eco-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ca1e11" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#ca1e11" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ca1e11" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Path coordinates recalculated for uniform 240px wide boxes and 120px gaps */}
              <g className={styles.neutralPaths}>
                {/* Top wavy connections */}
                <path className={styles.neutralPath} d="M340 126 C 370 100, 430 210, 460 186" />
                <path className={styles.neutralPath} d="M700 186 C 730 160, 790 100, 820 126" />
                
                {/* Middle connections */}
                <path className={styles.neutralPath} d="M340 196 Q 400 170, 460 190" />
                <path className={styles.neutralPath} d="M700 190 Q 760 210, 820 196" />
                
                {/* Bottom connections */}
                <path className={styles.neutralPath} d="M340 266 C 370 280, 430 210, 460 194" />
                <path className={styles.neutralPath} d="M700 194 C 730 210, 790 280, 820 266" />
              </g>

              {/* Animated pulses along the paths */}
              <circle className={styles.signalDot} r="5" fill="#ca1e11">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M340 126 C 370 100, 430 210, 460 186" />
              </circle>
              <circle className={styles.signalDot} r="5" fill="#ca1e11">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M700 186 C 730 160, 790 100, 820 126" />
              </circle>
              <circle className={styles.signalDot} r="4" fill="#ca1e11" opacity="0.6">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M340 266 C 370 280, 430 210, 460 194" />
              </circle>
              <circle className={styles.signalDot} r="4" fill="#ca1e11" opacity="0.6">
                <animateMotion dur="3s" repeatCount="indefinite" path="M700 194 C 730 210, 790 280, 820 266" />
              </circle>
            </svg>

            <span className={`${styles.pulseNode} ${styles.nodeLeftTop}`} aria-hidden="true" />
            <span className={`${styles.pulseNode} ${styles.nodeLeftBottom}`} aria-hidden="true" />
            <span className={`${styles.pulseNode} ${styles.nodeCenterLeft}`} aria-hidden="true" />
            <span className={`${styles.pulseNode} ${styles.nodeCenterRight}`} aria-hidden="true" />
            <span className={`${styles.pulseNode} ${styles.nodeRightTop}`} aria-hidden="true" />
            <span className={`${styles.pulseNode} ${styles.nodeRightBottom}`} aria-hidden="true" />

            {/* Gap midpoint nodes */}
            <span className={`${styles.pulseNode} ${styles.gapLeft}`} aria-hidden="true" />
            <span className={`${styles.pulseNode} ${styles.gapRight}`} aria-hidden="true" />

            <div className={styles.cardsRail}>
              <div className={styles.leftColumn}>
                <BuildCard card={workspace} className={styles.workspaceCard} motionDelay={0} />
                <BuildCard
                  card={project}
                  className={styles.projectCard}
                  motionDelay={MOTION_STAGGER.normal}
                />
              </div>

              <div className={styles.centerColumn}>
                <BuildCard
                  card={crm}
                  className={styles.crmCard}
                  motionDelay={MOTION_STAGGER.normal * 2}
                />
              </div>

              <div className={styles.rightColumn}>
                <BuildCard
                  card={communication}
                  className={styles.communicationCard}
                  motionDelay={MOTION_STAGGER.normal * 3}
                />
                <BuildCard
                  card={erp}
                  className={styles.erpCard}
                  motionDelay={MOTION_STAGGER.normal * 4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildEcosystemSection;
