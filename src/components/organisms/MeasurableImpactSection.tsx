"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "@/lib/motion-lite";
import styles from "@/styles/components/organisms/MeasurableImpactSection.module.scss";
import { FRAMER_EASE, MOTION_DURATION, MOTION_STAGGER } from "@/lib/motion";

type ImpactMetric = {
  id: string;
  value: number;
  suffix: string;
  startValue: number;
  description: string;
};

const metricMap: Record<string, ImpactMetric> = {
  tenK: {
    id: "tenK",
    value: 10,
    suffix: "K",
    startValue: 1,
    description: "AI agents deployed across business operations",
  },
  fiveHundredK: {
    id: "fiveHundredK",
    value: 500,
    suffix: "K",
    startValue: 100,
    description: "AI-driven interactions processed monthly",
  },
  threeX: {
    id: "threeX",
    value: 3,
    suffix: "x",
    startValue: 1,
    description: "Faster deployment of AI systems and workflows",
  },
  ninetyFive: {
    id: "ninetyFive",
    value: 95,
    suffix: "%",
    startValue: 20,
    description: "Automation containment across supported use cases",
  },
  twoFiftyK: {
    id: "twoFiftyK",
    value: 250,
    suffix: "K",
    startValue: 100,
    description: "Workflows executed within the first 30 days",
  },
  fortyK: {
    id: "fortyK",
    value: 40,
    suffix: "K",
    startValue: 10,
    description: "Knowledge-base queries accurately resolved",
  },
  fortyPercent: {
    id: "fortyPercent",
    value: 40,
    suffix: "%",
    startValue: 10,
    description: "Increase in customer satisfaction (CSAT)",
  },
  sixtyPercent: {
    id: "sixtyPercent",
    value: 60,
    suffix: "%",
    startValue: 20,
    description: "Reduction in operational costs through automation",
  },
};

const desktopOrder: ImpactMetric[] = [
  metricMap.tenK,
  metricMap.fiveHundredK,
  metricMap.threeX,
  metricMap.ninetyFive,
  metricMap.twoFiftyK,
  metricMap.fortyK,
  metricMap.fortyPercent,
  metricMap.sixtyPercent,
];

const mobileOrder: ImpactMetric[] = [
  metricMap.tenK,
  metricMap.fiveHundredK,
  metricMap.twoFiftyK,
  metricMap.fortyK,
  metricMap.ninetyFive,
  metricMap.threeX,
  metricMap.fortyPercent,
  metricMap.sixtyPercent,
];

const allMetrics: ImpactMetric[] = [
  metricMap.tenK,
  metricMap.fiveHundredK,
  metricMap.threeX,
  metricMap.ninetyFive,
  metricMap.twoFiftyK,
  metricMap.fortyK,
  metricMap.fortyPercent,
  metricMap.sixtyPercent,
];

const MeasurableImpactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [displayValues, setDisplayValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(allMetrics.map((metric) => [metric.id, metric.startValue])),
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || shouldAnimate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = shouldReduceMotion ? 0 : 1400;
    const startTime = performance.now();
    let rafId = 0;

    const animate = (time: number) => {
      const rawProgress =
        duration === 0 ? 1 : Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

      const nextValues: Record<string, number> = {};
      for (let i = 0; i < allMetrics.length; i++) {
        const metric = allMetrics[i];
        const currentValue =
          metric.startValue + (metric.value - metric.startValue) * easedProgress;
        nextValues[metric.id] =
          rawProgress >= 1 ? metric.value : Math.floor(currentValue);
      }

      setDisplayValues(nextValues);

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [shouldAnimate, shouldReduceMotion]);

  const getDisplayValue = (metric: ImpactMetric) => {
    const value = displayValues[metric.id] ?? metric.value;
    return `${value}${metric.suffix}`;
  };

  return (
    <section ref={sectionRef} className={styles.section} id="measurable-impact">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: MOTION_DURATION.slow, ease: FRAMER_EASE.premiumOut }
          }
        >
          Delivering measurable impact
        </motion.h2>

        <div className={styles.desktopGrid}>
          {desktopOrder.map((metric, index) => (
            <motion.article
              key={metric.id}
              className={styles.metricCard}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: MOTION_DURATION.normal,
                      delay: Math.min(index * MOTION_STAGGER.tight, 0.24),
                      ease: FRAMER_EASE.premiumOut,
                    }
              }
            >
              <p className={styles.metricValue} translate="no">{getDisplayValue(metric)}</p>
              <p className={styles.metricDescription}>{metric.description}</p>
            </motion.article>
          ))}
        </div>

        <div className={styles.mobileGrid}>
          {mobileOrder.map((metric, index) => (
            <motion.article
              key={metric.id}
              className={styles.metricCard}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: MOTION_DURATION.normal,
                      delay: Math.min(index * MOTION_STAGGER.tight, 0.2),
                      ease: FRAMER_EASE.premiumOut,
                    }
              }
            >
              <p className={styles.metricValue} translate="no">{getDisplayValue(metric)}</p>
              <p className={styles.metricDescription}>{metric.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeasurableImpactSection;
