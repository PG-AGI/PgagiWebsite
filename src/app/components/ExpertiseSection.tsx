import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './ExpertiseSection.module.scss';

export default function ExpertiseSection() {
  const router = useRouter();
  
  const services = [
    { number: '01', title: 'AI Research' },
    { number: '02', title: 'AI Architecture' },
    { number: '03', title: 'AI Mobile App Development' },
    { number: '04', title: 'AI SAAS Development' }
  ];

  const handleServiceClick = (serviceNumber: string) => {
    const sectionId = parseInt(serviceNumber);
    router.push(`/expertise#section-${sectionId}`);
  };

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        {/* Top Section: Centered Expertise Heading and Description */}
        <div className={styles.expertiseContent}>
          <h3 className={styles.expertiseHeading}>{'// Expertise'}</h3>
          <p className={styles.expertiseDescription}>
          We partner with bold founders to build end-to-end AI products that truly matter to users. Our expertise spans from designing and developing AI-driven products to delivering enterprise-grade solutions that scale.
          </p>
        </div>

        {/* Bottom Section: Two-column layout */}
        <div className={styles.bottomSection}>
          {/* Left Column: Slogan and Description */}
          <div className={styles.sloganSection}>
            <h2 className={styles.mainHeading}>
              Less talk more impact
            </h2>
            <p className={styles.description}>
              No big words. No bloated pitch decks. No five-hour Zoom calls. Just smart strategy, flawless execution and results that actually move the needle.
            </p>
          </div>

          {/* Right Column: Services List */}
          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={styles.serviceItem}
                onClick={() => handleServiceClick(service.number)}
                style={{ cursor: 'pointer' }}
              >
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


