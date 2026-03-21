"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CaseStudiesSection.module.scss";
import {
  FRAMER_EASE,
  GSAP_EASE,
  MOBILE_MEDIA_QUERY,
  MOTION_DURATION,
  MOTION_SCRUB,
  REDUCED_MOTION_QUERY,
} from "@/lib/motion";

type CaseStudyCard = {
  id: string;
  title: string;
  brand: string;
  imageSrc: string;
  href: string;
  accentStart: string;
  accentEnd: string;
};

const caseStudyCards: CaseStudyCard[] = [
  {
    id: "case-study-card-1",
    title:
      "Transforming customer engagement and lead management with AI-powered automation",
    brand: "Cracked AI",
    imageSrc: "/assets/CaseStudies/CrackedAi.jpg",
    href: "https://www.cracked.ai/",
    accentStart: "#ddd9ef",
    accentEnd: "#1e1b2a",
  },
  {
    id: "case-study-card-2",
    title:
      "Accelerating AI strategy and execution with focused consulting and delivery",
    brand: "AIM Cube",
    imageSrc: "/assets/CaseStudies/AIMI.jpg",
    href: "https://aim-cube.com/",
    accentStart: "#cb6aa1",
    accentEnd: "#250d1b",
  },
  {
    id: "case-study-card-3",
    title:
      "Simplifying investor discovery through a high-signal, AI-powered platform",
    brand: "FOMO Fund",
    imageSrc: "/assets/CaseStudies/Fomo.jpg",
    href: "https://fomo.fund/",
    accentStart: "#c3a6b8",
    accentEnd: "#22171f",
  },
  {
    id: "case-study-card-4",
    title:
      "Building reliable voice AI experiences for seamless customer interactions",
    brand: "Toingg",
    imageSrc: "/assets/CaseStudies/Toingg.jpg",
    href: "https://www.toingg.com/",
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
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia(MOBILE_MEDIA_QUERY).matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cards = cardRefs.current.filter((card): card is HTMLElement => Boolean(card));
    if (cards.length === 0) return;

    const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    const ctx = gsap.context(() => {
      gsap.set(cards[0], { y: 50, opacity: 0 });
      cards.slice(1).forEach((card) =>
        gsap.set(card, {
          y: (window.visualViewport?.height ?? window.innerHeight) * 1.1,
        }),
      );

      gsap.to(cards[0], {
        y: 0, opacity: 1, duration: MOTION_DURATION.cinematic, ease: GSAP_EASE.premiumOut, force3D: true,
        scrollTrigger: { trigger: section, start: "top 82%", once: true },
      });

      if (headingRef.current) {
        gsap.fromTo(headingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: MOTION_DURATION.slow, ease: GSAP_EASE.premiumOut,
            scrollTrigger: { trigger: section, start: "top 82%", once: true } },
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: MOTION_DURATION.normal, ease: GSAP_EASE.premiumOut,
            scrollTrigger: { trigger: section, start: "top 65%", once: true } },
        );
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${(cards.length - 1) * 100}%`,
          pin: section,
          pinSpacing: true,
          scrub: prefersReducedMotion ? false : MOTION_SCRUB.stack,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });

      cards.slice(1).forEach((card, incomingCardIndex) => {
        const phaseStart = incomingCardIndex;
        tl.to(card, { y: CARD_OFFSET * (incomingCardIndex + 1), ease: "none", duration: 1, force3D: true }, phaseStart);

        for (let coveredCardIndex = 0; coveredCardIndex <= incomingCardIndex; coveredCardIndex += 1) {
          const coveredCard = cards[coveredCardIndex];
          const scaleValue = Math.max(0.89, 1 - 0.03 * (incomingCardIndex - coveredCardIndex + 1));
          tl.to(coveredCard, { scale: scaleValue, transformOrigin: "top center", ease: "none", duration: 1, force3D: true }, phaseStart);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setCardRef = (index: number) => (element: HTMLElement | null) => {
    cardRefs.current[index] = element;
  };

  const CardArticle = ({ card, index }: { card: CaseStudyCard; index: number }) => (
    <a href={card.href} target="_blank" rel="noopener noreferrer"
      className={styles.cardLink} aria-label={`Open ${card.brand} case study`}>
      <div className={styles.previewFrame}>
        <Image src={card.imageSrc} alt={`${card.brand} case study preview`}
          fill sizes="(max-width: 900px) 86vw, 980px"
          className={styles.previewImage} priority={index === 0} />
      </div>
      <div className={styles.overlay} />
      <div className={styles.copyBlock}>
        <span className={styles.brandPill}>{card.brand}</span>
        <p className={styles.cardTitle}>{card.title}</p>
      </div>
    </a>
  );

  return (
    <section className={styles.outerSection} id="case-studies-showcase" ref={sectionRef}>
      {/* Desktop: GSAP pinned card stack */}
      <div className={styles.pinnedViewport} ref={pinContainerRef}>
        <div className={styles.container}>
          <div className={styles.headingBlock} ref={headingRef}>
            <h2 className={styles.title}>Case studies</h2>
          </div>

          <div className={styles.stackArea}>
            {caseStudyCards.map((card, index) => (
              <article key={card.id} className={styles.card} ref={setCardRef(index)}
                style={{ "--accent-start": card.accentStart, "--accent-end": card.accentEnd, zIndex: 10 + index } as React.CSSProperties}>
                <CardArticle card={card} index={index} />
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

      {/* Mobile: horizontal scroll-snap carousel */}
      <div className={styles.mobileFlow}>
        <motion.h2 className={styles.mobileTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: MOTION_DURATION.normal, ease: FRAMER_EASE.premiumOut }}
        >
          Case studies
        </motion.h2>

        <div className={styles.mobileCarousel}>
          {caseStudyCards.map((card, index) => (
            <article key={card.id} className={styles.mobileCard}
              style={{ "--accent-start": card.accentStart, "--accent-end": card.accentEnd } as React.CSSProperties}>
              <CardArticle card={card} index={index} />
            </article>
          ))}
        </div>

        <div className={styles.mobileCta}>
          <Link href="/whatwethink#case-studies" className={styles.viewAllButton}>
            <span className={styles.viewAllLabel}>View all</span>
            <span className={styles.arrowCircle} aria-hidden="true">
              <ArrowRight size={22} strokeWidth={2.2} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
