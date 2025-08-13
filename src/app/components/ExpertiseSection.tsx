import React from 'react';
import styles from './ExpertiseSection.module.scss';

export default function ExpertiseSection() {
  const services = [
    { number: '01', title: 'Branding' },
    { number: '02', title: 'Mobile Apps' },
    { number: '03', title: 'Social Media' },
    { number: '04', title: 'Web Development' }
  ];

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h2 className={styles.mainHeading}>
            Less talk, more impact.
          </h2>
          <p className={styles.description}>
            No big words. No bloated pitch decks. No five-hour Zoom calls. Just smart strategy, flawless execution and results that actually move the needle.
          </p>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h3 className={styles.expertiseHeading}>{/* Expertise */}Expertise</h3>
          <p className={styles.expertiseDescription}>
            We team up with bold thinkers to build brands that actually matter. Our expertise spans the full creative journey, from brand identity to digital products. We deliver solutions that connects, converts and drives real results.
          </p>
          
          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.serviceNumber}>
                  {service.number}
                </div>
                <span className={styles.serviceTitle}>
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 