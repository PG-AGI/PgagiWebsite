"use client";

import React from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "@/styles/components/organisms/CaseStudiesSection.module.scss";
import ROUTES from "@/constants/routes";
import caseStudiesSectionText from "@/constants/uiText/caseStudiesSection.json";

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
    title: caseStudiesSectionText.cards[0].title,
    brand: caseStudiesSectionText.cards[0].brand,
    imageSrc: "/assets/CaseStudies/CrackedAi.jpg",
    href: "https://www.cracked.ai/",
    accentStart: "#ddd9ef",
    accentEnd: "#1e1b2a",
  },
  {
    id: "case-study-card-2",
    title: caseStudiesSectionText.cards[1].title,
    brand: caseStudiesSectionText.cards[1].brand,
    imageSrc: "/assets/CaseStudies/AIMI.jpg",
    href: "https://aim-cube.com/",
    accentStart: "#cb6aa1",
    accentEnd: "#250d1b",
  },
  {
    id: "case-study-card-3",
    title: caseStudiesSectionText.cards[2].title,
    brand: caseStudiesSectionText.cards[2].brand,
    imageSrc: "/assets/CaseStudies/Fomo.jpg",
    href: "https://fomo.fund/",
    accentStart: "#c3a6b8",
    accentEnd: "#22171f",
  },
  {
    id: "case-study-card-4",
    title: caseStudiesSectionText.cards[3].title,
    brand: caseStudiesSectionText.cards[3].brand,
    imageSrc: "/assets/CaseStudies/Toingg.jpg",
    href: "https://www.toingg.com/",
    accentStart: "#a7a3e2",
    accentEnd: "#151529",
  },
];

const CaseStudiesSection = () => {
  const CardArticle = ({ card, index }: { card: CaseStudyCard; index: number }) => (
    <a href={card.href} target="_blank" rel="noopener noreferrer"
      className={styles.cardLink} aria-label={`Open ${card.brand} case study`}>
      <div className={styles.previewFrame}>
        <Image
          src={card.imageSrc}
          alt={`${card.brand} case study preview`}
          width={1200}
          height={750}
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 90vw, min(980px, 82vw)"
          className={styles.previewImage}
          priority={index === 0}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.copyBlock}>
        <span className={styles.brandPill}>{card.brand}</span>
        <p className={styles.cardTitle}>{card.title}</p>
      </div>
    </a>
  );

  return (
    <section className={styles.outerSection} id="case-studies-showcase">
      {/* Desktop: static stacked cards (no ScrollTrigger pin — avoids blank viewport) */}
      <div className={styles.pinnedViewport}>
        <div className={styles.container}>
          <div className={styles.headingBlock}>
            <h2 className={styles.title}>{caseStudiesSectionText.title}</h2>
          </div>

          <div className={styles.stackArea}>
            {caseStudyCards.map((card, index) => (
              <article
                key={card.id}
                className={styles.card}
                data-card-index={index}
              >
                <CardArticle card={card} index={index} />
              </article>
            ))}
          </div>

          <div className={styles.ctaWrap}>
            <Link href={ROUTES.WHAT_WE_THINK_CASE_STUDIES} className={styles.viewAllButton}>
              <span className={styles.viewAllLabel}>{caseStudiesSectionText.viewAllLabel}</span>
              <span className={styles.arrowCircle} aria-hidden="true">
                <ArrowRight size={22} strokeWidth={2.2} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll-snap carousel */}
      <div className={styles.mobileFlow}>
        <h2 className={styles.mobileTitle}>{caseStudiesSectionText.title}</h2>

        <div className={styles.mobileCarousel}>
          {caseStudyCards.map((card, index) => (
            <article
              key={card.id}
              className={styles.mobileCard}
              style={
                {
                  "--accent-start": card.accentStart,
                  "--accent-end": card.accentEnd,
                } as CSSProperties
              }
            >
              <CardArticle card={card} index={index} />
            </article>
          ))}
        </div>

        <div className={styles.mobileCta}>
          <Link href={ROUTES.WHAT_WE_THINK_CASE_STUDIES} className={styles.viewAllButton}>
            <span className={styles.viewAllLabel}>{caseStudiesSectionText.viewAllLabel}</span>
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
