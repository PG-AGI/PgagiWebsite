"use client";
import styles from "./calendly.module.scss";
import BookCallModal from "./base/bookCallModela";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Calendly() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookCall = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      const widgetElement = widgetRef.current;
      if (widgetElement) {
        const widgetHeight = widgetElement.offsetHeight;
        widgetElement.style.height = `${widgetHeight}px`;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.calendly}>
      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1
          className={styles.heading}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Let&apos;s build the future
        </motion.h1>

        <motion.h2
          className={styles.emphasized}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          TOGETHER.
        </motion.h2>

        <motion.p
          className={styles.subheading}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Not sure where to start? Book a call and let&apos;s explore
          what&apos;s possible.
        </motion.p>

        <motion.button
          className={styles.ctaButton}
          onClick={handleBookCall}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.2 },
            },
          }}
        >
          Book a Free Consultation
        </motion.button>
      </motion.div>

      <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
