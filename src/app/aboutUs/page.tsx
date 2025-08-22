'use client';

import { motion } from 'framer-motion';
import styles from './aboutus.module.scss';
import Image from 'next/image';
import Calendly from "../components/Calendly";

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
            <span className={styles.aboutLabel}>{'// About'}</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>We work with founders who don&apos;t</span>
              <span className={styles.titleLine2}>wait for permission. The ones building</span>
              <span className={styles.titleLine3}>the next big thing fearlessly, with</span>
              <span className={styles.titleLine4}>design that speaks louder than words.</span>
            </h1>
          </div>
        </div>
        <div className={styles.heroDot}></div>
      </motion.section>

      

      {/* Mission & Vision Section */}
      <motion.section
        className={styles.missionVisionSection}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.missionVisionContainer}>
          <div className={styles.missionVisionContent}>
            <div className={styles.missionSection}>
              <h3 className={styles.sectionTitle}>Mission</h3>
              <p className={styles.sectionText}>
                At PGAGI, we believe in a future where AI and human intelligence coexist in harmony, creating a smarter, faster, and better world.
              </p>
            </div>

            <div className={styles.visionSection}>
              <h3 className={styles.sectionTitle}>Vision</h3>
              <p className={styles.sectionText}>
                At PGAGI, we believe innovation starts with understanding people and their challenges. Our mission is to research, design, and build powerful in-house AI products that solve real problems across industries. From streamlining everyday tasks to tackling complex global issues, we create solutions that empower businesses, improve lives, and help shape a smarter, more connected world.
              </p>
            </div>
          </div>
          
          <div className={styles.missionVisionImage}>
            <Image
              src="/landing/IMG_1531.webp"
              alt="PGAGI Mission & Vision"
              width={600}
              height={400}
              className={styles.missionVisionImg}
              priority
            />
          </div>
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
            

            {/* Services List */}
            <div className={styles.servicesList}>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>AI Research</span>
                <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>AI SAAS DEVELOPMENT</span>
                <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>AI Mobile App Development</span>
                <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={styles.listItem}>
                <span className={styles.itemLabel}>Integrating AI in Existing Workflows</span>
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
              It all began in 2021, inside a quiet astrophysics lab. Driven by curiosity, spent long nights fine-tuning machine learning models not knowing we were planting the seeds of something bigger. What started as helping researchers make predictions soon grew into a vision: bringing AI out of labs and into the real world.
              </p>
              <p>
              From those humble beginnings, PGAGI was born. First, building products for small businesses and individuals. Then, daring to create our own product—TOINGG, an AI communication operating system bridging voice and text. Step by step, the journey expanded to startups and enterprises, proving that AI could truly make a difference.
              </p>
              <p>
              Today, with a team of 35+ passionate engineers, PGAGI continues that journey. From late-night experiments in a lab to powering businesses worldwide, one thing has never changed the belief that AI, when built with purpose, can change lives.
              </p>
            </div>

            {/* Key Metrics */}
            <div className={styles.keyMetrics}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>1.5+</span>
                <span className={styles.metricLabel}>Years of Experience</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>75+</span>
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
      <Calendly />
    </div>
  );
}
