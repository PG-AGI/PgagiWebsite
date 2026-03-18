"use client";

import styles from "./SolutionFitBreakdownSection.module.scss";

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
  return (
    <section className={styles.section} id="solution-fit-breakdown">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Solution fit <span>breakdown</span>
        </h2>

        <div className={styles.layout}>
          <div className={styles.copyBlock}>
            <h3>Who this is best for</h3>
            <ul className={styles.pointList}>
              {audienceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.visualPanel}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionFitBreakdownSection;
