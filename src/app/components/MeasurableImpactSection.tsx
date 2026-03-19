"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MeasurableImpactSection.module.scss";

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

    const duration = 1400;
    const startTime = performance.now();
    let rafId = 0;

    const animate = (time: number) => {
      const rawProgress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

      const nextValues = Object.fromEntries(
        allMetrics.map((metric) => {
          const currentValue =
            metric.startValue + (metric.value - metric.startValue) * easedProgress;
          const roundedValue =
            rawProgress >= 1 ? metric.value : Math.floor(currentValue);
          return [metric.id, roundedValue];
        }),
      );

      setDisplayValues(nextValues);

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [shouldAnimate]);

  const getDisplayValue = (metric: ImpactMetric) => {
    const value = displayValues[metric.id] ?? metric.value;
    return `${value}${metric.suffix}`;
  };

  return (
    <section ref={sectionRef} className={styles.section} id="measurable-impact">
      <div className={styles.container}>
        <h2 className={styles.title}>Delivering measurable impact</h2>

        <div className={styles.desktopGrid}>
          {desktopOrder.map((metric) => (
            <article key={metric.id} className={styles.metricCard}>
              <p className={styles.metricValue} translate="no">{getDisplayValue(metric)}</p>
              <p className={styles.metricDescription}>{metric.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.mobileGrid}>
          {mobileOrder.map((metric) => (
            <article key={metric.id} className={styles.metricCard}>
              <p className={styles.metricValue} translate="no">{getDisplayValue(metric)}</p>
              <p className={styles.metricDescription}>{metric.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeasurableImpactSection;
