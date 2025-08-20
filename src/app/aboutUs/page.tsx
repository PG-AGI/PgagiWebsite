'use client';

import { motion } from 'framer-motion';
import styles from './aboutus.module.scss';
import Image from 'next/image';

export default function AboutUs() {
  // Framer Motion variants for animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.aboutLabel}>// About</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>We work with founders who don't</span>
              <span className={styles.titleLine2}>wait for permission. The ones building</span>
              <span className={styles.titleLine3}>the next big thing fearlessly, with</span>
              <span className={styles.titleLine4}>design that speaks louder than words.</span>
            </h1>
          </div>
        </div>
        <div className={styles.heroDot}></div>
      </motion.section>
      <motion.section
        className={styles.bottomImageSection}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.imageContainer}>
          <Image
            src="/landing/IMG_1531.webp"
            alt="About Us Background"
            width={1920}
            height={600}
            className={styles.bottomImage}
            priority
          />
        </div>
      </motion.section>
      {/* Main Content Section */}
      <motion.section
        className={styles.mainContent}
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.contentGrid}>
          {/* Left Column - Lists */}
          <motion.div className={styles.leftColumn} variants={fadeInUp}>
            {/* Statistics List */}
            <div className={styles.statsList}>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>Brains</span>
                <span className={styles.itemValue}>80</span>
              </div>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>Languages</span>
                <span className={styles.itemValue}>11</span>
              </div>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>Nationalities</span>
                <span className={styles.itemValue}>17</span>
              </div>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>Time Zones</span>
                <span className={styles.itemValue}>10</span>
              </div>
            </div>

            {/* Services List */}
            <div className={styles.servicesList}>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>Branding</span>
                <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>Mobile Apps</span>
                <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>Social Media</span>
                <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>Web Development</span>
                <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className={styles.rightColumn} variants={fadeInUp}>
            <div className={styles.contentText}>
              <p>
                We don't just create visuals, we shape identities. Our work helps brands stand out, stay true and speak directly to the people they serve. The kind that sparks curiosity and creates genuine connections, because great branding isn't just what you say, it's how you make people feel.
              </p>
              <p>
                It's the wink in your logo, the rhythm in your website, the pause after a line that lands smoother than your favorite espresso. We obsess over the tiny details, because that's where the magic hides (and where most people forget to look).
              </p>
              <p>
                Whether you're launching from scratch or leveling up, we build brands people actually want to be part of. No guesswork, no fluff, just sharp thinking, smart design, and a whole lot of heart.
              </p>
            </div>

            {/* Key Metrics */}
            <div className={styles.keyMetrics}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>20+</span>
                <span className={styles.metricLabel}>Years of Experience</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>400+</span>
                <span className={styles.metricLabel}>Projects Delivered</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>99%</span>
                <span className={styles.metricLabel}>Customer Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bottom Image Section */}
      {/* <motion.section
        className={styles.bottomImageSection}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.imageContainer}>
          <Image
            src="/landing/IMG_1531.webp"
            alt="About Us Background"
            width={1920}
            height={600}
            className={styles.bottomImage}
            priority
          />
        </div>
      </motion.section> */}
    
    </div>
  );
}
