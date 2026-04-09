"use client";

import { ArrowRight } from "lucide-react";
import styles from "@/styles/components/organisms/ConcentricEllipseSection.module.scss";
import concentricEllipseText from "@/constants/uiText/concentricEllipse.json";

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
            <h2 className={styles.title}>{concentricEllipseText.title}</h2>
            <p className={styles.subtitle}>
              {concentricEllipseText.subtitle}
            </p>

            <button 
              type="button" 
              className={styles.ctaButton}
              onClick={() => window.open("https://calendly.com/vivek_01/30min", "_blank")}
            >
              <span className={styles.ctaLabel}>{concentricEllipseText.ctaLabel}</span>
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
