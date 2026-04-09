import styles from "@/styles/components/molecules/calendly.module.scss";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import calendlyText from "@/constants/uiText/calendly.json";

export default function Calendly(): JSX.Element {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookCall = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const widgetElement = widgetRef.current;
      if (widgetElement) {
        const widgetHeight = widgetElement.offsetHeight;
        widgetElement.style.height = `${widgetHeight}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.calendly}>
      <div className={styles.backgroundImage}>
        <Image src="/landing/CTA-Background-New.jpg" alt="CTA Background" width={1920} height={1080} />
      </div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainHeading}>
            {calendlyText.mainHeading}
          </h1>

          <h2 className={styles.emphasizedText}>
            {calendlyText.emphasizedText}
          </h2>

          <p className={styles.subHeading}>
            {calendlyText.subHeading}
          </p>

          <button
            className={styles.ctaButton}
            onClick={() => window.open("https://calendly.com/vivek_01/30min", "_blank")}
          >
            {calendlyText.ctaButtonLabel}
          </button>
        </div>
      </div>

      
    </section>
  );
}
