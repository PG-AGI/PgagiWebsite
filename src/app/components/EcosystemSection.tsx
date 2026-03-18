"use client";

import Image from "next/image";
import styles from "./EcosystemSection.module.scss";

type EcosystemCard = {
  title: string;
  image: string;
  width: number;
  height: number;
};

const ecosystemCards: EcosystemCard[] = [
  {
    title: "Google Cloud Ecosystem",
    image: "/svgs/Ecosystem/First.svg",
    width: 331,
    height: 794,
  },
  {
    title: "Microsoft Azure Ecosystem",
    image: "/svgs/Ecosystem/Second.svg",
    width: 333,
    height: 735,
  },
  {
    title: "AWS Ecosystem",
    image: "/svgs/Ecosystem/Third.svg",
    width: 331,
    height: 618,
  },
];

const EcosystemSection = () => {
  return (
    <section className={styles.section} id="ecosystem">
      <div className={styles.container}>
        <h2 className={styles.title}>
          We always build within the <span>ecosystem</span>
        </h2>

        <div className={styles.visualWrap}>
          <div className={styles.gridBackdrop} aria-hidden="true" />

          <svg
            className={styles.signalLayer}
            viewBox="0 0 1280 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="ecosystem-signal-gradient"
                x1="0"
                y1="0"
                x2="1280"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ff5f4d" stopOpacity="0.2" />
                <stop offset="0.22" stopColor="#ff4b3a" stopOpacity="0.92" />
                <stop offset="0.5" stopColor="#ff3e2f" stopOpacity="1" />
                <stop offset="0.78" stopColor="#ff4b3a" stopOpacity="0.92" />
                <stop offset="1" stopColor="#ff5f4d" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            <path
              id="ecosystem-path-1"
              className={styles.signalPath}
              d="M -80 180 C 120 95, 280 245, 480 176 S 860 108, 1360 185"
            />
            <path
              id="ecosystem-path-2"
              className={styles.signalPath}
              d="M -120 146 C 140 246, 320 94, 560 162 S 920 230, 1380 136"
            />
            <path
              id="ecosystem-path-3"
              className={styles.signalPathDotted}
              d="M -90 214 C 160 140, 350 240, 560 196 S 920 148, 1380 208"
            />


            {/* Animated signal dots — prefers-reduced-motion handled via CSS */}
            <circle className={styles.signalDot} r="5.6" fill="#ff503f">
              <animateMotion dur="7.8s" repeatCount="indefinite" rotate="auto">
                <mpath
                  href="#ecosystem-path-1"
                  xlinkHref="#ecosystem-path-1"
                />
              </animateMotion>
            </circle>
            <circle className={styles.signalDot} r="4.8" fill="#ff3f30">
              <animateMotion
                dur="9.6s"
                repeatCount="indefinite"
                begin="1.2s"
                rotate="auto"
              >
                <mpath
                  href="#ecosystem-path-2"
                  xlinkHref="#ecosystem-path-2"
                />
              </animateMotion>
            </circle>
            <circle className={styles.signalDot} r="4.2" fill="#ff5a45">
              <animateMotion
                dur="8.4s"
                repeatCount="indefinite"
                begin="0.6s"
                rotate="auto"
              >
                <mpath
                  href="#ecosystem-path-3"
                  xlinkHref="#ecosystem-path-3"
                />
              </animateMotion>
            </circle>
          </svg>

          <div className={styles.cardsTrack}>
            {ecosystemCards.map((card) => (
              <article key={card.title} className={styles.cardColumn}>
                <p className={styles.cardLabel}>{card.title}</p>
                <span className={styles.connector} aria-hidden="true" />

                <div className={styles.cardFrame}>
                  <Image
                    src={card.image}
                    alt={`${card.title} architecture board`}
                    width={card.width}
                    height={card.height}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
