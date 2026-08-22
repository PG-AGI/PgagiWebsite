"use client";

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import styles from "@/styles/components/organisms/ConcentricEllipseSection.module.scss";
import concentricEllipseText from "@/constants/uiText/concentricEllipse.json";
import EXTERNAL_LINKS from "@/constants/externalLinks";

const ConcentricEllipseSection = () => {
  useEffect(() => {
    const el = document.getElementById("concentric-ellipse-section");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (typeof window !== "undefined" && (window as unknown as { datafast?: (event: string) => void }).datafast) {
            (window as unknown as { datafast: (event: string) => void }).datafast("scrolled_to_bottom");
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.section} df-goal-scrolled-to-bottom`}
      id="concentric-ellipse-section"
      data-fast-goal="scrolled_to_bottom"
      data-df-event="scrolled_to_bottom"
      data-df-goal="scrolled_to_bottom"
    >
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
              className={`${styles.ctaButton} df-goal-schedule-strategic-consultation`}
              data-fast-goal="schedule_strategic_consultation"
              data-df-event="schedule_strategic_consultation_click"
              data-df-goal="schedule_strategic_consultation_click"
              onClick={() => {
                if (typeof window !== "undefined" && (window as unknown as { datafast?: (event: string) => void }).datafast) {
                  (window as unknown as { datafast: (event: string) => void }).datafast("schedule_strategic_consultation_click");
                  (window as unknown as { datafast: (event: string) => void }).datafast("schedule_strategic_consultation");
                }
                window.open(EXTERNAL_LINKS.CALENDLY_BOOKING, "_blank");
              }}
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
