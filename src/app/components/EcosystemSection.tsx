"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./EcosystemSection.module.scss";
import { GSAP_EASE, MOTION_DURATION, MOTION_STAGGER } from "@/lib/motion";

type EcosystemCard = {
  title: string;
  image: string;
  width: number;
  height: number;
};

const ecosystemCards: EcosystemCard[] = [
  {
    title: "Google Workspace Ecosystem",
    image: "/svgs/Ecosystem/First (1).jpg",
    width: 331,
    height: 794,
  },
  {
    title: "Microsoft Azure Ecosystem",
    image: "/svgs/Ecosystem/Second.jpg",
    width: 333,
    height: 735,
  },
  {
    title: "AWS Ecosystem",
    image: "/svgs/Ecosystem/Third.jpg",
    width: 331,
    height: 618,
  },
];

/* ─────────────────────────────────────────────────────────────
   Signal Component - Unique Prefixes prevent ID Clashes
───────────────────────────────────────────────────────────── */
const SignalSVG = ({ className, prefix }: { className: string; prefix: string }) => (
  <svg className={className} viewBox="0 0 1280 320" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id={`${prefix}-grad`} x1="0" y1="0" x2="1280" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff5f4d" stopOpacity="0.2" />
        <stop offset="0.22" stopColor="#ff4b3a" stopOpacity="0.92" />
        <stop offset="0.5" stopColor="#ff3e2f" stopOpacity="1" />
        <stop offset="0.78" stopColor="#ff4b3a" stopOpacity="0.92" />
        <stop offset="1" stopColor="#ff5f4d" stopOpacity="0.2" />
      </linearGradient>
    </defs>

    <path
      id={`${prefix}-p1`}
      className={styles.signalPath}
      style={{ stroke: `url(#${prefix}-grad)` }}
      d="M -80 180 C 120 95, 280 245, 480 176 S 860 108, 1360 185"
    />
    <path
      id={`${prefix}-p2`}
      className={styles.signalPath}
      style={{ stroke: `url(#${prefix}-grad)` }}
      d="M -120 146 C 140 246, 320 94, 560 162 S 920 230, 1380 136"
    />
    <path
      id={`${prefix}-p3`}
      className={styles.signalPathDotted}
      d="M -90 214 C 160 140, 350 240, 560 196 S 920 148, 1380 208"
    />

    <circle className={styles.signalDot} r="5.6" fill="#ff503f">
      <animateMotion dur="7.8s" repeatCount="indefinite" rotate="auto">
        <mpath href={`#${prefix}-p1`} xlinkHref={`#${prefix}-p1`} />
      </animateMotion>
    </circle>
    <circle className={styles.signalDot} r="4.8" fill="#ff3f30">
      <animateMotion dur="9.6s" repeatCount="indefinite" begin="1.2s" rotate="auto">
        <mpath href={`#${prefix}-p2`} xlinkHref={`#${prefix}-p2`} />
      </animateMotion>
    </circle>
    <circle className={styles.signalDot} r="4.2" fill="#ff5a45">
      <animateMotion dur="8.4s" repeatCount="indefinite" begin="0.6s" rotate="auto">
        <mpath href={`#${prefix}-p3`} xlinkHref={`#${prefix}-p3`} />
      </animateMotion>
    </circle>
  </svg>
);

const EcosystemSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const scrollLeft = slider.scrollLeft;
    const cardWidth = slider.offsetWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, ecosystemCards.length - 1));
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", handleScroll, { passive: true });
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const jumpToPanel = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({ left: slider.offsetWidth * index, behavior: "smooth" });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const title = titleRef.current;
    const cardsTrack = cardsTrackRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 28, skewY: 1 },
          {
            opacity: 1, y: 0, skewY: 0,
            duration: MOTION_DURATION.slow,
            ease: GSAP_EASE.premiumOut,
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          },
        );
      }

      if (cardsTrack) {
        const cards = cardsTrack.querySelectorAll("article");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: MOTION_DURATION.normal,
            ease: GSAP_EASE.premiumOut,
            stagger: MOTION_STAGGER.relaxed,
            scrollTrigger: { trigger: section, start: "top 72%", once: true },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ───── Desktop Section (Hidden on Mobile) ───── */}
      <section className={styles.section} id="ecosystem" ref={sectionRef}>
        <div className={styles.container}>
          <h2 className={styles.title} ref={titleRef}>We always build within the <span>ecosystem</span></h2>
          <div className={styles.visualWrap}>
            <div className={styles.gridBackdrop} aria-hidden="true" />
            <SignalSVG className={styles.signalLayer} prefix="desk" />
            <div className={styles.cardsTrack} ref={cardsTrackRef}>
              {ecosystemCards.map((card) => (
                <article key={card.title} className={styles.cardColumn}>
                  <p className={styles.cardLabel}>{card.title}</p>
                  <span className={styles.connector} aria-hidden="true" />
                  <div className={styles.cardFrame}>
                    <Image src={card.image} alt={card.title} width={card.width} height={card.height} className={styles.cardImage} priority />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Mobile Scroll-Snap Carousel (Hidden on Desktop) ───── */}
      <div className={styles.pinWrapper} id="ecosystem-mobile">
        <div className={styles.pinInner}>
          <div className={styles.mobileContainer}>
            <h2 className={styles.mobileTitle}>We always build within the <span>ecosystem</span></h2>
            <div className={styles.mobileVisualWrap}>
              <div className={styles.gridBackdrop} aria-hidden="true" />
              <SignalSVG className={styles.signalLayer} prefix="mob" />

              <div ref={sliderRef} className={styles.mobileCardsSlider}>
                {ecosystemCards.map((card) => (
                  <div key={card.title} className={styles.mobilePanel}>
                    <p className={styles.cardLabel}>{card.title}</p>
                    <span className={styles.connector} aria-hidden="true" />
                    <div className={styles.mobileCardFrame}>
                      <Image src={card.image} alt={card.title} width={card.width} height={card.height} className={styles.mobileCardImage} />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.scrollDots}>
                {ecosystemCards.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                    onClick={() => jumpToPanel(i)}
                    aria-label={`Go to panel ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcosystemSection;
