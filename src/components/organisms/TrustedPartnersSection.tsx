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
 * would render as a non-clickable card.
 */
const partners = [
  {
    name: "Social 27",
    logo: "/assets/partners/social27.png",
    blurb:
      "An event platform for virtual, hybrid, and in-person conferences — built for networking and sponsor engagement.",
    url: "https://www.social27.com/",
  },
  {
    name: "Hire Extra",
    logo: "/assets/partners/hx.png",
    blurb:
      "An AI-driven crowdstaffing marketplace connecting employers with staffing vendors and freelancers.",
    url: "https://www.hirextra.com/",
  },
  {
    name: "TVC Parking Management",
    logo: "/assets/partners/TVClogo (1).png",
    blurb:
      "UAE-based premium valet, parking management, and traffic control for hotels, businesses, and events.",
    url: "https://tvc.ae/web/",
  },
  {
    name: "SocialJet",
    logo: "/assets/partners/SocialJet.png",
    blurb:
      "A digital and influencer marketing agency, plus an AI-driven marketing platform built for travel advisors.",
    url: "https://socialjet.sg/",
  },
  {
    name: "Nuaiy",
    logo: "/assets/partners/nuaiy.png",
    blurb:
      "A mobile-first learning platform with step-by-step paths and an AI mentor for in-demand digital and AI skills.",
    url: "https://play.google.com/store/apps/details?id=com.nuaiy.app",
  },
  {
    name: "Brainify",
    logo: "/assets/partners/brAInify.png",
    blurb:
      "An AI-powered e-learning platform with gamified paths and real-world projects to master modern digital skills.",
    url: "https://play.google.com/store/apps/details?id=com.brainify.app&hl=en",
  },
  {
    name: "HomeLiving Furniture",
    logo: "/assets/partners/HomeLiving.png",
    blurb:
      "A home-furnishing retailer curating living room, dining, bedroom, office, and outdoor collections.",
    url: "https://www.homelivingfurniture.com/?srsltid=AfmBOoo0NdUjVhykcmD10j5nh_CAdMaZqpaQohnWrwcFwSmvsKFJEMbr",
  },
  {
    name: "Webcode Genie",
    logo: "/assets/partners/wcg-logo.png",
    blurb:
      "A software development and IT consulting firm building custom web platforms, mobile apps, and MVPs.",
    url: "https://webcodegenie.com/",
  },
  {
    name: "Vook",
    logo: "/assets/partners/Vook.png",
    blurb:
      "Pioneers of the enhanced e-book — now an AI-powered audio and video transcription platform.",
    url: "https://vook.in/",
  },
  {
    name: "Cracked.ai",
    logo: "/assets/partners/cracked.svg",
    blurb:
      "An agentic marketing platform that automates your social funnel across a network of AI influencers.",
    url: "https://cracked.ai/",
  },
  {
    name: "Sardiana Rentals",
    logo: "/assets/partners/SadrinaRides.svg",
    blurb:
      "Curated vacation villas and apartments across Sardinia, with full booking and property management.",
    url: "https://www.sardiniaunlimited.com/?__cf_chl_f_tk=fcZwvWOtcTHXftMNMUaoQ9aEECDT3Fxz.j6J.X1Pjog-1782839044-1.0.1.1-Se0hLrh0lHV0giSJ9O3raMLOeG0mbGIHhnjBxO6M3og",
  },
];

/* Accent colours pulled from the landing-page palette (red / blue / gold /
   green / coral / navy), cycled across the cards for a colourful, aesthetic
   grid. Used only on the accent bar + arrow — never as a background. */
const ACCENTS = [
  "#9f0000", // brand red
  "#4d76b7", // blue
  "#a6824f", // gold / bronze
  "#2e8b6f", // green
  "#c0512f", // coral / terracotta
  "#002d60", // deep navy
];

const ArrowIcon = () => (
  <svg
    className={styles.arrow}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="2"
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
                style={{ "--accent": ACCENTS[i % ACCENTS.length] } as React.CSSProperties}
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
                      width={180}
                      height={60}
                      className={styles.logo}
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
