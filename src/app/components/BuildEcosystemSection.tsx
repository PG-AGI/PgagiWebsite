"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./BuildEcosystemSection.module.scss";

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

const BuildCard = ({ card, className }: BuildCardProps) => {
  return (
    <article className={`${styles.integrationCard} ${className ?? ""}`}>
      <Image
        src={card.src}
        alt={card.alt}
        width={card.width}
        height={card.height}
        className={styles.cardImage}
        unoptimized
      />
    </article>
  );
};

const BuildEcosystemSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const workspace = getNode("workspace");
  const project = getNode("project");
  const crm = getNode("crm");
  const communication = getNode("communication");
  const erp = getNode("erp");

  return (
    <section className={styles.section} id="build-ecosystem">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Build inside your <span>ecosystem</span>
        </motion.h2>

        <motion.div
          className={styles.scrollArea}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.stage}>
            <div className={styles.gridBackdrop} aria-hidden="true" />
            <span className={styles.glowCenter} aria-hidden="true" />

            <svg
              className={styles.signalLayer}
              viewBox="0 0 1160 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="build-eco-gradient"
                  x1="0"
                  y1="0"
                  x2="1160"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ff5f4d" stopOpacity="0.08" />
                  <stop offset="0.5" stopColor="#ff3f30" stopOpacity="1" />
                  <stop offset="1" stopColor="#ff5f4d" stopOpacity="0.08" />
                </linearGradient>
              </defs>

              <path
                id="build-link-top-left"
                className={styles.neutralPath}
                d="M250 126 C 340 70, 430 250, 520 186"
              />
              <path
                id="build-link-bottom-left"
                className={styles.neutralPath}
                d="M250 266 C 360 220, 430 120, 520 194"
              />
              <path
                id="build-link-top-right"
                className={styles.neutralPath}
                d="M640 186 C 720 110, 805 86, 910 126"
              />
              <path
                id="build-link-bottom-right"
                className={styles.neutralPath}
                d="M640 194 C 730 260, 810 256, 910 266"
              />

              <path
                id="build-flow-main"
                className={styles.signalPath}
                d="M250 196 C 360 160, 450 220, 580 190 C 700 165, 810 235, 910 205"
              />
              <path
                id="build-flow-dotted"
                className={styles.signalPathDotted}
                d="M250 208 C 350 180, 450 230, 580 202 C 720 176, 820 246, 910 214"
              />

              {!shouldReduceMotion && (
                <>
                  <circle className={styles.signalDot} r="5.2" fill="#ff4a3a">
                    <animateMotion dur="7.8s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#build-flow-main" xlinkHref="#build-flow-main" />
                    </animateMotion>
                  </circle>

                  <circle className={styles.signalDotSmall} r="4.2" fill="#ff5d4a">
                    <animateMotion
                      dur="9.4s"
                      repeatCount="indefinite"
                      rotate="auto"
                      begin="1.1s"
                    >
                      <mpath
                        href="#build-flow-dotted"
                        xlinkHref="#build-flow-dotted"
                      />
                    </animateMotion>
                  </circle>
                </>
              )}
            </svg>

            <span className={`${styles.pulseNode} ${styles.nodeLeft}`} aria-hidden="true" />
            <span className={`${styles.pulseNode} ${styles.nodeCenter}`} aria-hidden="true" />
            <span className={`${styles.pulseNode} ${styles.nodeRight}`} aria-hidden="true" />

            <div className={styles.cardsRail}>
              <div className={styles.leftColumn}>
                <BuildCard card={workspace} className={styles.workspaceCard} />
                <BuildCard card={project} className={styles.projectCard} />
              </div>

              <div className={styles.centerColumn}>
                <BuildCard card={crm} className={styles.crmCard} />
              </div>

              <div className={styles.rightColumn}>
                <BuildCard card={communication} className={styles.communicationCard} />
                <BuildCard card={erp} className={styles.erpCard} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildEcosystemSection;
