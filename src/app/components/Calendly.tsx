// import styles from "./calendly.module.scss";
// import { InlineWidget } from "react-calendly";
// import BookCallModal from './base/bookCallModela';
// import React, { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';

// export default function Calendly() {
//     const widgetRef = useRef<HTMLDivElement>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleBookCall = () => {
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             const widgetElement = widgetRef.current;
//             if (widgetElement) {
//                 const widgetHeight = widgetElement.offsetHeight;
//                 widgetElement.style.height = `${widgetHeight}px`;
//             }
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <section className={styles.calendly}>
//             <div className={styles.backgroundImage}>
//                 <Image src="/landing/CTA-Background.png" alt="CTA Background" width={1920} height={1080} />
//             </div>

//             <div className={styles.content}>
//                 <div className={styles.textContainer}>
//                     <h1 className={styles.mainHeading}>
//                         Let&apos;s build the future
//                     </h1>

//                     <h2 className={styles.emphasizedText}>
//                         TOGETHER.
//                     </h2>

//                     <p className={styles.subHeading}>
//                         Not sure where to start? Book a call and let&apos;s explore what&apos;s possible.
//                     </p>

//                     <button
//                         className={styles.ctaButton}
//                         onClick={handleBookCall}
//                     >
//                         Book a Free Consultation
//                     </button>
//                 </div>
//             </div>

//             <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
//         </section>
//     );
// }

"use client";
import styles from "./calendly.module.scss";
import { InlineWidget } from "react-calendly";
import BookCallModal from "./base/bookCallModela";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Calendly() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookCall = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      {/* Background Image with Fade-In */}
      <motion.div
        className={styles.backgroundImage}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/landing/CTA-Background.png"
          alt="CTA Background"
          width={1920}
          height={1080}
        />
      </motion.div>

      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // gap: "1rem",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Main Heading */}
        <motion.h1
          style={{
            fontFamily: "Poppins, Gilroy, sans-serif",
            fontSize: "3.5rem",
            fontWeight: "400",
            color: "#ffffff",
            margin: "0",
            lineHeight: "1.2",
          }}
          // className={styles.mainHeading}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Let&apos;s build the future
        </motion.h1>

        {/* Emphasized Text */}
        <motion.h2
          style={{
            fontFamily: "Poppins, Gilroy, sans-serif",
            fontSize: "4rem",
            fontWeight: "700",
            color: "#b60306",
            margin: "0",
            lineHeight: "1.1",
          }}
          // className={styles.emphasizedText}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          TOGETHER.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          // className={styles.subHeading}
          style={{
            fontFamily: "Alexandria, Poppins, sans-serif",
            fontSize: "1.4rem",
            fontWeight: "300",
            color: "#ffdfbe",
            margin: "0",
            lineHeight: "1.5",
          }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Not sure where to start? Book a call and let&apos;s explore
          what&apos;s possible.
        </motion.p>

        {/* CTA Button with Hover Effect */}
        <motion.button
          // className={styles.ctaButton}
          style={{
            background: "#b60306",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "1rem 2.5rem",
            fontFamily: "Alexandria, Poppins, sans-serif",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 16px rgba(214, 0, 0, 0.3)",
            marginTop: "1rem",
          }}
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

      {/* Modal */}
      <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
