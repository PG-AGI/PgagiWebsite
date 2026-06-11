"use client";

import Image from "next/image";
import styles from "@/styles/components/organisms/TrustedPartnersSection.module.scss";
import { motion, useReducedMotion } from "@/lib/motion-lite";
import { FRAMER_EASE, MOTION_DURATION, MOTION_STAGGER } from "@/lib/motion";

const partners = [
  { name: "Social 27",              logo: "/assets/partners/social27.png" },
  { name: "Hire Extra",             logo: "/assets/partners/hx.png" },
  { name: "TVC Parking Management", logo: "/assets/partners/TVClogo (1).png" },
  { name: "SocialJet",              logo: "/assets/partners/SocialJet.png" },
  { name: "Nuaiy",                  logo: "/assets/partners/nuaiy.png" },
  { name: "Brainify",               logo: "/assets/partners/brAInify.png" },
  { name: "HomeLiving Furniture",   logo: "/assets/partners/HomeLiving.png" },
  { name: "Webcode Genie",          logo: "/assets/partners/wcg-logo.png" },
  { name: "Vook",                   logo: "/assets/partners/Vook.png" },
  { name: "Cracked.ai",             logo: "/assets/partners/cracked.svg" },
  { name: "Sardiana Rentals",       logo: "/assets/partners/SadrinaRides.svg" },
];

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
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className={styles.cell}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                ...baseTransition,
                delay: shouldReduceMotion ? 0 : (i % 4) * MOTION_STAGGER.tight,
              }}
            >
              {/* 1 — label */}
              <span className={styles.partnerName}>{partner.name}</span>

              {/* 2 — divider */}
              <hr className={styles.divider} aria-hidden="true" />

              {/* 3 — logo */}
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedPartnersSection;
