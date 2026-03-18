"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./RevenueSection.module.scss";

const revenueCards = [
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

const CARD_OFFSET = 36;

const RevenueSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;

    if (!section || !pinContainer || !card1 || !card2 || !card3) return;

    const isMobile = window.innerWidth < 768;
    const PEEK = isMobile ? 24 : CARD_OFFSET;

    // Card 1: entrance — rises from slightly below
    gsap.set(card1, { y: 50, opacity: 0 });
    // Cards 2 & 3: start fully below viewport
    gsap.set(card2, { y: "110vh" });
    gsap.set(card3, { y: "110vh" });

    // Card 1 entrance — fires when section enters view (before pin kicks in)
    gsap.to(card1, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        once: true,
      },
    });

    // Heading entrance
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );
    }

    // Pinned stacking timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: section,
        pinSpacing: true,
        scrub: isMobile ? 1 : 0.6,
        invalidateOnRefresh: true,
      },
    });

    // PHASE 1: Card 2 rises — Card 1 top peeks above Card 2
    tl.to(card2, {
      y: PEEK,
      ease: "power2.inOut",
      duration: 1,
    }, 0);

    tl.to(card1, {
      scale: 0.97,
      transformOrigin: "top center",
      ease: "power2.inOut",
      duration: 1,
    }, 0);

    // PHASE 2: Card 3 rises — Cards 1 & 2 tops peek above Card 3
    tl.to(card3, {
      y: PEEK * 2,
      ease: "power2.inOut",
      duration: 1,
    }, 1);

    tl.to(card2, {
      scale: 0.97,
      transformOrigin: "top center",
      ease: "power2.inOut",
      duration: 1,
    }, 1);

    tl.to(card1, {
      scale: 0.94,
      ease: "power2.inOut",
      duration: 1,
    }, 1);

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === section) t.kill();
      });
      tl.kill();
    };
  }, []);

  return (
    <section className={styles.outerSection} id="revenue-system" ref={sectionRef}>
      <div className={styles.pinnedViewport} ref={pinContainerRef}>
        <div className={styles.container}>
          {/* Heading */}
          <div className={styles.headingBlock} ref={headingRef}>
            <h2 className={styles.title}>
              AI that scales <span>business revenue</span>
            </h2>
            <p className={styles.subtitle}>
              Not experiments.
              <br />
              Production systems tied to ROI.
            </p>
          </div>

          {/* Card Stack */}
          <div className={styles.stackArea}>
            <div className={`${styles.card} ${styles.card1}`} ref={card1Ref}>
              <CardContent {...revenueCards[0]} priority />
            </div>
            <div className={`${styles.card} ${styles.card2}`} ref={card2Ref}>
              <CardContent {...revenueCards[1]} />
            </div>
            <div className={`${styles.card} ${styles.card3}`} ref={card3Ref}>
              <CardContent {...revenueCards[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardContent = ({
  title,
  points,
  outcome,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  priority = false,
}: {
  title: string;
  points: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  priority?: boolean;
}) => (
  <>
    <div className={styles.copyBlock}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.pointList}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className={styles.outcome}>
        <span>Outcome:</span> {outcome}
      </p>
    </div>
    <div className={styles.media}>
      <div className={styles.imageInner}>
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={styles.mediaImage}
          priority={priority}
        />
      </div>
    </div>
  </>
);

export default RevenueSection;
