"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./VisionSystemSection.module.scss";

const visionCards = [
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

const CARD_OFFSET = 36; // px gap between stacked cards

const VisionSystemSection = () => {
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

    // ─── CORRECT STACKING GEOMETRY ────────────────────────────────────────────
    // Cards are absolute positioned at top:0. y = translateY offset.
    // Card 3 (z=12, frontmost): has HIGHEST y value (sits lowest on screen)
    // Card 2 (z=11, middle):    has MEDIUM y value
    // Card 1 (z=10, back):      has y=0 (sits highest, its top edge peeks above all)
    //
    // Visual result:
    //   0..PEEK     = Card 1 top edge visible
    //   PEEK..PEEK*2 = Card 2 top edge visible
    //   PEEK*2..end = Card 3 fully visible (frontmost)
    // ─────────────────────────────────────────────────────────────────────────

    const PEEK = isMobile ? 24 : CARD_OFFSET; // how many px of each card top to show

    // Card 1: entrance animation — rises from slightly below
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
          opacity: 1, y: 0,
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

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ─── PINNED STACKING TIMELINE ─────────────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: isMobile ? "top 60px" : "top top",
        end: "+=200%",
        pin: section,
        pinSpacing: true,
        scrub: prefersReducedMotion ? false : (isMobile ? 0.35 : 0.6), // Faster scrub for snappier mobile feeling
        invalidateOnRefresh: true,
      },
    });

    // PHASE 1: Card 2 rises from below
    // Final: Card1 @ y=0 (top), Card2 @ y=PEEK (below Card1's top)
    // Since z-index: card2 > card1, Card2 covers Card1 from y=PEEK downward
    // → Card1's top PEEK px are visible above Card2
    tl.to(card2, {
      y: PEEK,               // Card2 final position — PEEK px below container top
      ease: "power2.inOut",
      duration: 1,
    }, 0);

    // Card 1 scales back very subtly as it gets covered
    tl.to(card1, {
      scale: 0.97,
      transformOrigin: "top center",
      ease: "power2.inOut",
      duration: 1,
    }, 0);

    // PHASE 2: Card 3 rises from below
    // Final: Card1 @ y=0, Card2 @ y=PEEK, Card3 @ y=PEEK*2
    // Since z-index: card3 > card2 > card1, layers read cleanly top-to-bottom
    tl.to(card3, {
      y: PEEK * 2,           // Card3 final position — 2×PEEK px below container top
      ease: "power2.inOut",
      duration: 1,
    }, 1);

    // Cards 1 & 2 scale back slightly more as Card 3 arrives
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
    <section className={styles.outerSection} id="vision-system" ref={sectionRef}>
      {/* This is the element that gets pinned */}
      <div className={styles.pinnedViewport} ref={pinContainerRef}>
        <div className={styles.container}>
          {/* Heading */}
          <div className={styles.headingBlock} ref={headingRef}>
            <h2 className={styles.title}>
              You have the vision
              <br />
              We <span>engineer the system</span>
            </h2>
            <p className={styles.subtitle}>From idea to scalable AI product.</p>
          </div>

          {/* Card Stack */}
          <div className={styles.stackArea}>
            {/* Card 1 — always visible first */}
            <div className={`${styles.card} ${styles.card1}`} ref={card1Ref}>
              <CardContent {...visionCards[0]} priority />
            </div>

            {/* Card 2 — starts below, slides up */}
            <div className={`${styles.card} ${styles.card2}`} ref={card2Ref}>
              <CardContent {...visionCards[1]} />
            </div>

            {/* Card 3 — starts below, slides up last */}
            <div className={`${styles.card} ${styles.card3}`} ref={card3Ref}>
              <CardContent {...visionCards[2]} />
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
  priority = false,
}: {
  title: string;
  points: string[];
  outcome: string;
  image: string;
  imageAlt: string;
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
          width={420}
          height={250}
          className={styles.mediaImage}
          priority={priority}
        />
      </div>
    </div>
  </>
);

export default VisionSystemSection;
