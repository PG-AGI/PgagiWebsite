"use client";

import { ArrowRight } from "lucide-react";
import styles from "./ConcentricEllipseSection.module.scss";

const ConcentricEllipseSection = () => {
  return (
    <section className={styles.section} id="concentric-ellipse-section">
      <div className={styles.layout}>
        <div className={styles.surface}>
          <span className={`${styles.ellipse} ${styles.ellipseOne}`} aria-hidden="true" />
          <span className={`${styles.ellipse} ${styles.ellipseTwo}`} aria-hidden="true" />
          <span className={`${styles.ellipse} ${styles.ellipseThree}`} aria-hidden="true" />
          <span className={`${styles.ellipse} ${styles.ellipseFour}`} aria-hidden="true" />

          <div className={styles.contentCard}>
            <h2 className={styles.title}>Let&apos;s build your AI system the right way.</h2>
            <p className={styles.subtitle}>
              Architecture first, ROI driven, Built to scale.
            </p>

            <button type="button" className={styles.ctaButton}>
              <span className={styles.ctaLabel}>Schedule Strategic Consultation</span>
              <span className={styles.arrowCircle} aria-hidden="true">
                <ArrowRight size={16} strokeWidth={2.3} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcentricEllipseSection;
