"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/components/organisms/TrustedPartnersSection.module.scss";
import { motion, useReducedMotion } from "@/lib/motion-lite";
import { FRAMER_EASE, MOTION_DURATION, MOTION_STAGGER } from "@/lib/motion";

/**
 * Trusted partners.
 * Each blurb is kept to ~2 lines for a clean, even grid (Figma 1897:3827).
 * Cards open the partner site in a new tab. A "#" url (none currently)
 * would render as a non-clickable card. `isPerson` renders the image as a
 * circular headshot avatar instead of a wide brand logo.
 */
type Partner = {
  name: string;
  logo: string;
  blurb: string;
  url: string;
  isPerson?: boolean;
};

const partners: Partner[] = [
  {
    name: "Social 27",
    logo: "/assets/partners/social27 (1).png",
    blurb:
      "An event platform for virtual, hybrid, and in-person conferences — built for networking and sponsor engagement.",
    url: "https://www.social27.com/",
  },
  {
    name: "Hire Extra",
    logo: "/assets/partners/hireextra (1).png",
    blurb:
      "An AI-driven crowdstaffing marketplace connecting employers with staffing vendors and freelancers.",
    url: "https://www.hirextra.com/",
  },
  {
    name: "TVC Parking Management",
    logo: "/assets/partners/TVC (1).png",
    blurb:
      "UAE-based premium valet, parking management, and traffic control for hotels, businesses, and events.",
    url: "https://tvc.ae/web/",
  },
  {
    name: "SocialJet",
    logo: "/assets/partners/socialjet (1).png",
    blurb:
      "A digital and influencer marketing agency, plus an AI-driven marketing platform built for travel advisors.",
    url: "https://socialjet.sg/",
  },
  {
    name: "Nuaiy",
    logo: "/assets/partners/nuaiy (1).png",
    blurb:
      "A mobile-first learning platform with step-by-step paths and an AI mentor for in-demand digital and AI skills.",
    url: "https://play.google.com/store/apps/details?id=com.nuaiy.app",
  },
  {
    name: "Brainify",
    logo: "/assets/partners/brainify (1).png",
    blurb:
      "An AI-powered e-learning platform with gamified paths and real-world projects to master modern digital skills.",
    url: "https://play.google.com/store/apps/details?id=com.brainify.app&hl=en",
  },
  {
    name: "HomeLiving Furniture",
    logo: "/assets/partners/homeliving (1).png",
    blurb:
      "A home-furnishing retailer curating living room, dining, bedroom, office, and outdoor collections.",
    url: "https://www.homelivingfurniture.com/?srsltid=AfmBOoo0NdUjVhykcmD10j5nh_CAdMaZqpaQohnWrwcFwSmvsKFJEMbr",
  },
  {
    name: "Webcode Genie",
    logo: "/assets/partners/webcodeGenie (1).png",
    blurb:
      "A software development and IT consulting firm building custom web platforms, mobile apps, and MVPs.",
    url: "https://webcodegenie.com/",
  },
  {
    name: "Vook",
    logo: "/assets/partners/vook (1).png",
    blurb:
      "Pioneers of the enhanced e-book — now an AI-powered audio and video transcription platform.",
    url: "https://vook.in/",
  },
  {
    name: "Cracked.ai",
    logo: "/assets/partners/cracked (1).png",
    blurb:
      "An agentic marketing platform that automates your social funnel across a network of AI influencers.",
    url: "https://cracked.ai/",
  },
  {
    name: "Sardiana Rentals",
    logo: "/assets/partners/sardinia (1).png",
    blurb:
      "Curated vacation villas and apartments across Sardinia, with full booking and property management.",
    url: "https://www.sardiniaunlimited.com/?__cf_chl_f_tk=fcZwvWOtcTHXftMNMUaoQ9aEECDT3Fxz.j6J.X1Pjog-1782839044-1.0.1.1-Se0hLrh0lHV0giSJ9O3raMLOeG0mbGIHhnjBxO6M3og",
  },
  {
    name: "Dr. Ana Cukic-Armstrong",
    logo: "/assets/Customers/anaArmstrong.webp",
    // A person's headshot, not a brand logo — render as a circular avatar.
    isPerson: true,
    blurb:
      "Award-winning CEO Dr. Ana Cukic-Armstrong, Ph.D is a hedge fund manager, entrepreneur and the Chief Executive Officer of Armstrong Investment Managers LLP, an FCA licensed Financial Institution. Dr. Cukic-Armstrong led the portfolio construction at UBS Wealth Management, one of the world's largest banks with assets CHF1.062 trillion (2014) and the multi-asset group at Insight Investment.",
    url: "https://www.awardwinningceo.com/ana-armstrong",
  },
];

const ArrowIcon = () => (
  <svg
    className={styles.arrow}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 18L18 6M18 6H11M18 6V13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrustedPartnersSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const baseTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: MOTION_DURATION.slow, ease: FRAMER_EASE.premiumOut };

  return (
    <section
      className={styles.section}
      id="trusted-partners"
      aria-label="Our Trusted Partners"
    >
      <div className={styles.container}>
        {/* ── Heading ── */}
        <motion.h2
          className={styles.heading}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={baseTransition}
        >
          Our Trusted Partners
        </motion.h2>

        {/* ── Grid ── */}
        <div className={styles.grid}>
          {partners.map((partner, i) => {
            const isLinked = partner.url && partner.url !== "#";

            return (
              <motion.a
                key={partner.name}
                className={styles.card}
                href={isLinked ? partner.url : undefined}
                target={isLinked ? "_blank" : undefined}
                rel={isLinked ? "noopener noreferrer" : undefined}
                aria-label={
                  isLinked
                    ? `${partner.name} — opens in a new tab`
                    : partner.name
                }
                data-linked={isLinked ? "true" : "false"}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  ...baseTransition,
                  delay: shouldReduceMotion ? 0 : (i % 3) * MOTION_STAGGER.tight,
                }}
              >
                {/* top row: logo + arrow */}
                <div className={styles.cardTop}>
                  <div className={styles.logoWrap}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.isPerson ? 96 : 180}
                      height={partner.isPerson ? 96 : 60}
                      className={`${styles.logo}${
                        partner.isPerson ? ` ${styles.avatarLogo}` : ""
                      }`}
                      loading="lazy"
                    />
                  </div>
                  <span className={styles.arrowWrap} aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </div>

                {/* blurb */}
                <p className={styles.blurb}>{partner.blurb}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
