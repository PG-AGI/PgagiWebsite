"use client";

import styles from "@/styles/components/organisms/SolutionFitBreakdownSection.module.scss";
import { motion, useReducedMotion } from "@/lib/motion-lite";
import { FRAMER_EASE, MOTION_DURATION, MOTION_STAGGER } from "@/lib/motion";

const audienceItems = [
  "Founders building AI-native products",
  "Enterprises with repetitive workflows",
  "Teams generating 1k+ leads/month",
  "Businesses seeking ROI-first AI",
];

const solutionRows = [
  {
    title: "Founders building AI-native products",
    detail: "AI-first tools to power and scale software products",
  },
  {
    title: "Enterprises with repetitive workflows",
    detail: "Automate tedious, manual processes with custom AI solutions",
  },
  {
    title: "Teams generating 1k+ leads/month",
    detail: "Streamline lead generation and qualification workflows",
  },
  {
    title: "Businesses seeking ROI-first AI",
    detail: "Drive measurable value from AI investments",
  },
];

const analysisItems = [
  "Cost-benefit analysis",
  "Payback period",
  "Net present value",
  "Internal rate of return",
  "Benchmarking",
];

const SolutionFitBreakdownSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const baseTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: MOTION_DURATION.slow, ease: FRAMER_EASE.premiumOut };

  return (
    <section className={styles.section} id="solution-fit-breakdown">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={baseTransition}
        >
          Solution fit <span>breakdown</span>
        </motion.h2>

        <motion.div
          className={styles.layout}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            ...baseTransition,
            delay: shouldReduceMotion ? 0 : MOTION_STAGGER.tight,
          }}
        >
          <motion.div
            className={styles.copyBlock}
            initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              ...baseTransition,
              delay: shouldReduceMotion ? 0 : MOTION_STAGGER.normal,
            }}
          >
            <h3>Who this is best for</h3>
            <ul className={styles.pointList}>
              {audienceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={styles.visualPanel}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 16, scale: 0.98 }}
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }
            }
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              ...baseTransition,
              delay: shouldReduceMotion ? 0 : MOTION_STAGGER.relaxed,
            }}
          >
            <div className={styles.mainCard}>
              {solutionRows.map((row) => (
                <article key={row.title} className={styles.row}>
                  <h4>{row.title}</h4>
                  <p>{row.detail}</p>
                </article>
              ))}
            </div>

            <div className={styles.metricsCard}>
              {analysisItems.map((item) => (
                <div key={item} className={styles.metricRow}>
                  <span className={styles.metricIcon} aria-hidden>
                    &#10003;
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionFitBreakdownSection;
