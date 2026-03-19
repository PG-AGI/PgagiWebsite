"use client";

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
        </div>
      </div>
    </section>
  );
};

export default ConcentricEllipseSection;
