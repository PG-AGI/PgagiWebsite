// import React from "react";
// import Image from "next/image";
// import styles from "./NewPage.module.scss";

// const StatsSection = () => {
//   return (
//     <section id="stats-section" className={styles.statsSection}>
//       <div className={styles.container}>
//         {/* Main Content Area */}
//         <div className={styles.mainContent}>
//           {/* Left Side - Team of Pilots */}
//           <div
//             className={styles.leftSide}
//             // style={{ border: "1px solid red", height: "200px" }}
//           >
//             <div className={styles.teamSection}>
//               <h2 className={styles.teamTitle}>Team of Pilots</h2>
//               <div className={styles.teamAvatars}>
//                 <div className={styles.teamCount}>32+</div>
//                 <div className={styles.avatar}></div>
//                 <div className={styles.avatar}></div>
//                 <div className={styles.avatar}></div>
//                 <div className={styles.avatar}></div>
//                 <div className={styles.avatar}></div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Stats and Agency Info */}
//           <div className={styles.rightSide}>
//             {/* Top Row - Launched Projects and Client Satisfaction */}
//             <div className={styles.topRow}>
//               {/* Launched Projects Section */}
//               <div className={styles.statItem}>
//                 <h3 className={styles.statTitle}>Launched Projects</h3>
//                 <div className={styles.separator}></div>
//                 <div className={styles.statContent}>
//                   <span className={styles.statNumber}>75+</span>
//                   <p className={styles.statDescription}>
//                     Projects were launched successful since 2023.
//                   </p>
//                 </div>
//               </div>

//               {/* Client Satisfaction Section */}
//               <div className={styles.statItem}>
//                 <h3 className={styles.statTitle}>Client Satisfaction</h3>
//                 <div className={styles.separator}></div>
//                 <div className={styles.upworkVerification}>
//                   <Image
//                     src="/landing/Upwork.webp"
//                     alt="Upwork"
//                     width={100}
//                     height={24}
//                     className={styles.upworkLogo}
//                   />
//                   <a
//                     href="https://www.upwork.com/agencies/1737467434828361728/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={styles.verificationLink}
//                   >
//                     <div className={styles.verificationText}>
//                       <span>As Verified on Upwork</span>
//                       <svg
//                         className={styles.blueTick}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
//                           fill="#1DA1F2"
//                         />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* Year of Establishment Section */}
//             <div className={styles.statItem}>
//               <h3 className={styles.statTitle}>Year of Establishment</h3>
//               <div className={styles.separator}></div>
//               <div className={styles.statContent}>
//                 <span className={styles.statNumber}>2023</span>
//                 <p className={styles.statDescription}>
//                   That year two founders launched their first project:
//                   &quot;Toingg&quot; , a communication OS for businesses.
//                 </p>
//               </div>
//             </div>
//             {/* Agency Information Section */}
//             <div className={styles.agencySection}>
//               {/* Agency Identity */}

//               {/* Agency Description */}
//               <div className={styles.agencyDescription}>
//                 <p>
//                   We&apos;re a full-service agency driven by{" "}
//                   <strong>strategy, design, and technology</strong>. From brand
//                   foundations to fully developed digital products, we create
//                   work that doesn&apos;t just look good:{" "}
//                   <strong>it performs, connects, and endures</strong>.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer with CTA */}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./StatsSection.module.scss";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const StatsSection = () => {
  return (
    <section id="stats-section" className={styles.statsSection}>
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main Content Area */}
        <div className={styles.mainContent}>
          {/* Left Side - Team of Pilots */}
          <motion.div className={styles.leftSide} variants={fadeInUp}>
            <div className={styles.teamSection}>
              <motion.h2 className={styles.teamTitle} variants={fadeInUp}>
                Team of Pilots
              </motion.h2>
              <motion.div
                className={styles.teamAvatars}
                variants={staggerContainer}
              >
                <motion.div className={styles.teamCount} variants={fadeInUp}>
                  32+
                </motion.div>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.avatar}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Stats and Agency Info */}
          <motion.div className={styles.rightSide} variants={staggerContainer}>
            {/* Top Row */}
            <div className={styles.topRow}>
              {/* Launched Projects */}
              <motion.div className={styles.statItem} variants={fadeInUp}>
                <h3 className={styles.statTitle}>Launched Projects</h3>
                <div className={styles.separator}></div>
                <div className={styles.statContent}>
                  <motion.span
                    className={styles.statNumber}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                  >
                    75+
                  </motion.span>
                  <p className={styles.statDescription}>
                    Projects were launched successful since 2023.
                  </p>
                </div>
              </motion.div>

              {/* Client Satisfaction */}
              <motion.div className={styles.statItem} variants={fadeInUp}>
                <h3 className={styles.statTitle}>Client Satisfaction</h3>
                <div className={styles.separator}></div>
                <motion.div
                  className={styles.upworkVerification}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/landing/Upwork.webp"
                    alt="Upwork"
                    width={100}
                    height={24}
                    className={styles.upworkLogo}
                  />
                  <a
                    href="https://www.upwork.com/agencies/1737467434828361728/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.verificationLink}
                  >
                    <div className={styles.verificationText}>
                      <span>As Verified on Upwork</span>
                      <motion.svg
                        className={styles.blueTick}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          fill="#1DA1F2"
                        />
                      </motion.svg>
                    </div>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Year of Establishment */}
            <motion.div className={styles.statItem} variants={fadeInUp}>
              <h3 className={styles.statTitle}>Year of Establishment</h3>
              <div className={styles.separator}></div>
              <div className={styles.statContent}>
                <span className={styles.statNumber}>2023</span>
                <p className={styles.statDescription}>
                  That year two founders launched their first project:
                  &quot;Toingg&quot;, a communication OS for businesses.
                </p>
              </div>
            </motion.div>

            {/* Agency Information */}
            <motion.div className={styles.agencySection} variants={fadeInUp}>
              <div className={styles.agencyDescription}>
                <p>
                  We&apos;re a full-service agency driven by{" "}
                  <strong>strategy, design, and technology</strong>. From brand
                  foundations to fully developed digital products, we create
                  work that doesn&apos;t just look good:{" "}
                  <strong>it performs, connects, and endures</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
