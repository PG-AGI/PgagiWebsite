// import React from "react";
// import { useRouter } from "next/navigation";
// import styles from "./ExpertiseSection.module.scss";

// export default function ExpertiseSection() {
//   const router = useRouter();

//   const services = [
//     { number: "01", title: "Branding" },
//     { number: "02", title: "Mobile Apps" },
//     { number: "03", title: "Social Media" },
//     { number: "04", title: "Web Development" },
//   ];

//   const handleServiceClick = (serviceNumber: string) => {
//     const sectionId = parseInt(serviceNumber);
//     router.push(`/expertise#section-${sectionId}`);
//   };

//   return (
//     <section className={styles.expertiseSection}>
//       <div className={styles.container}>
//         {/* Expertise Section */}
//         <div className={styles.expertiseContent}>
//           <h3 className={styles.expertiseHeading}>{"Expertise"}</h3>
//           <p className={styles.expertiseDescription}>
//             We team up with bold thinkers to build brands that actually matter.
//             Our expertise spans the full creative journey, from brand identity
//             to digital products. We deliver solutions that connects, converts
//             and drives real results.
//           </p>

//           <div className={styles.servicesList}>
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={styles.serviceItem}
//                 onClick={() => handleServiceClick(service.number)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <div className={styles.serviceNumber}>{service.number}</div>
//                 <span className={styles.serviceTitle}>{service.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Slogan and Description */}
//         <div className={styles.sloganSection}>
//           <h2 className={styles.mainHeading}>Less talk, more impact.</h2>
//           <p className={styles.description}>
//             No big words. No bloated pitch decks. No five-hour Zoom calls. Just
//             smart strategy, flawless execution and results that actually move
//             the needle.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
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

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Merge fade + hover into one variant
  const serviceVariants = {
    hidden: fadeUp.hidden,
    show: fadeUp.show,
    hover: { scale: 1.05, x: 10, transition: { duration: 0.3 } },
  };

  return (
    <section className={styles.expertiseSection}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{ border: "1px solid red", height: "auto" }}
      >
        {/* Expertise Section */}
        <motion.div className={styles.expertiseContent} variants={fadeUp}>
          <motion.h3
            className={styles.expertiseHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {"Expertise"}
          </motion.h3>

          <motion.p className={styles.expertiseDescription} variants={fadeUp}>
            We team up with bold thinkers to build brands that actually matter.
            Our expertise spans the full creative journey, from brand identity
            to digital products. We deliver solutions that connects, converts
            and drives real results.
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
                style={{ cursor: "pointer" }}
              >
                <motion.div
                  className={styles.serviceNumber}
                  whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                >
                  {service.number}
                </motion.div>
                <motion.span
                  className={styles.serviceTitle}
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Slogan and Description */}
        <motion.div className={styles.sloganSection} variants={fadeUp}>
          <motion.h2
            className={styles.mainHeading}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Less talk, more impact.
          </motion.h2>
          <motion.p className={styles.description} variants={fadeUp}>
            No big words. No bloated pitch decks. No five-hour Zoom calls. Just
            smart strategy, flawless execution and results that actually move
            the needle.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
