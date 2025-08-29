"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./ExpertiseSection.module.scss";
import { motion } from "framer-motion";

export default function ExpertiseSection() {
  const router = useRouter();

  const services = [
    { number: "01", title: "Branding" },
    { number: "02", title: "Mobile Apps" },
    { number: "03", title: "Social Media" },
    { number: "04", title: "Web Development" },
  ];

  const handleServiceClick = (serviceNumber: string) => {
    const sectionId = parseInt(serviceNumber);
    router.push(`/expertise#section-${sectionId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const serviceVariants = {
    hidden: fadeUp.hidden,
    show: fadeUp.show,
    hover: { scale: 1.05, x: 12, transition: { duration: 0.3 } },
  };

  return (
    <section className={styles.expertiseSection}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={styles.expertiseContent} variants={fadeUp}>
          <motion.h3
            className={styles.expertiseHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Expertise
          </motion.h3>

          <motion.p className={styles.expertiseDescription} variants={fadeUp}>
            We team up with bold thinkers to build brands that actually matter.
            From brand identity to digital products, we deliver solutions that
            connect, convert, and drive real results.
          </motion.p>

          <motion.div
            className={styles.servicesList}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceItem}
                variants={serviceVariants}
                whileHover="hover"
                onClick={() => handleServiceClick(service.number)}
              >
                <motion.div
                  className={styles.serviceNumber}
                  whileHover={{ scale: 1.2, color: "#0ea5e9" }}
                >
                  {service.number}
                </motion.div>
                <motion.span
                  className={styles.serviceTitle}
                  whileHover={{ x: 6, color: "#0ea5e9" }}
                >
                  {service.title}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className={styles.sloganSection} variants={fadeUp}>
          <motion.h2
            className={styles.mainHeading}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Less talk, more impact.
          </motion.h2>
          <motion.p className={styles.description} variants={fadeUp}>
            No jargon. No bloated decks. No endless calls. Just smart strategy,
            flawless execution, and results that actually move the needle.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
