"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CaseStudiesSection.module.scss";

type CaseStudyCard = {
  id: string;
  title: string;
  brand: string;
  accentStart: string;
  accentEnd: string;
};

const caseStudyCards: CaseStudyCard[] = [
  {
    id: "case-study-card-1",
    title:
      "Transforming customer engagement and lead management with AI-Powered automation",
    brand: "Cracked.",
    accentStart: "#ddd9ef",
    accentEnd: "#1e1b2a",
  },
  {
    id: "case-study-card-2",
    title:
      "Transforming customer engagement and lead management with AI-Powered automation",
    brand: "Cracked.",
    accentStart: "#cb6aa1",
    accentEnd: "#250d1b",
  },
  {
    id: "case-study-card-3",
    title:
      "Transforming customer engagement and lead management with AI-Powered automation",
    brand: "Cracked.",
    accentStart: "#c3a6b8",
    accentEnd: "#22171f",
  },
  {
    id: "case-study-card-4",
    title:
      "Transforming customer engagement and lead management with AI-Powered automation",
    brand: "Cracked.",
    accentStart: "#a7a3e2",
    accentEnd: "#151529",
  },
];

const CARD_OFFSET = 34;

const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;
    const cards = cardRefs.current.filter(
      (card): card is HTMLDivElement => Boolean(card),
    );

    if (!section || !pinContainer || cards.length === 0) return;

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const peek = isMobile ? 22 : CARD_OFFSET;

    gsap.set(cards[0], { y: 50, opacity: 0 });
    cards.slice(1).forEach((card) => gsap.set(card, { y: "110vh" }));

    gsap.to(cards[0], {
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
        },
      );
    }

    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            once: true,
          },
        },
      );
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${(cards.length - 1) * 100}%`,
        pin: section,
        pinSpacing: true,
        scrub: prefersReducedMotion ? false : isMobile ? 1 : 0.6,
        invalidateOnRefresh: true,
      },
    });

    cards.slice(1).forEach((card, incomingCardIndex) => {
      const phaseStart = incomingCardIndex;

      tl.to(
        card,
        {
          y: peek * (incomingCardIndex + 1),
          ease: "power2.inOut",
          duration: 1,
        },
        phaseStart,
      );

      for (let coveredCardIndex = 0; coveredCardIndex <= incomingCardIndex; coveredCardIndex += 1) {
        const coveredCard = cards[coveredCardIndex];
        const scaleValue = Math.max(
          0.89,
          1 - 0.03 * (incomingCardIndex - coveredCardIndex + 1),
        );

        tl.to(
          coveredCard,
          {
            scale: scaleValue,
            transformOrigin: "top center",
            ease: "power2.inOut",
            duration: 1,
          },
          phaseStart,
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) trigger.kill();
      });
      tl.kill();
    };
  }, []);

  const setCardRef = (index: number) => (element: HTMLDivElement | null) => {
    cardRefs.current[index] = element;
  };

  return (
    <section className={styles.outerSection} id="case-studies-showcase" ref={sectionRef}>
      <div className={styles.pinnedViewport} ref={pinContainerRef}>
        <div className={styles.container}>
          <div className={styles.headingBlock} ref={headingRef}>
            <h2 className={styles.title}>Case studies</h2>
          </div>

          <div className={styles.stackArea}>
            {caseStudyCards.map((card, index) => (
              <article
                key={card.id}
                className={styles.card}
                ref={setCardRef(index)}
                style={
                  {
                    "--accent-start": card.accentStart,
                    "--accent-end": card.accentEnd,
                    zIndex: 10 + index,
                  } as React.CSSProperties
                }
              >
                <div className={styles.previewFrame}>
                  <Image
                    src="/assets/CaseStudies/CrackedAi.png"
                    alt={`${card.brand} case study preview`}
                    fill
                    sizes="(max-width: 900px) 86vw, 980px"
                    className={styles.previewImage}
                    priority={index === 0}
                  />
                </div>

                <div className={styles.overlay} />

                <div className={styles.copyBlock}>
                  <span className={styles.brandPill}>{card.brand}</span>
                  <p className={styles.cardTitle}>{card.title}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.ctaWrap} ref={ctaRef}>
            <Link href="/whatwethink#case-studies" className={styles.viewAllButton}>
              <span className={styles.viewAllLabel}>View all</span>
              <span className={styles.arrowCircle} aria-hidden="true">
                <ArrowRight size={22} strokeWidth={2.2} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
