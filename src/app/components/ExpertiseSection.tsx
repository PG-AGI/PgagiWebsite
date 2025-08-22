import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './ExpertiseSection.module.scss';

export default function ExpertiseSection() {
  const router = useRouter();
  
  const services = [
    { number: '01', title: 'Branding' },
    { number: '02', title: 'Mobile Apps' },
    { number: '03', title: 'Social Media' },
    { number: '04', title: 'Web Development' }
  ];

  const handleServiceClick = (serviceNumber: string) => {
    const sectionId = parseInt(serviceNumber);
    router.push(`/expertise#section-${sectionId}`);
  };

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        {/* Expertise Section */}
        <div className={styles.expertiseContent}>
          <h3 className={styles.expertiseHeading}>{'// Expertise'}</h3>
          <p className={styles.expertiseDescription}>
            We team up with bold thinkers to build brands that actually matter. Our expertise spans the full creative journey, from brand identity to digital products. We deliver solutions that connects, converts and drives real results.
          </p>
          
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

        {/* Slogan and Description */}
        <div className={styles.sloganSection}>
          <h2 className={styles.mainHeading}>
            Less talk, more impact.
          </h2>
          <p className={styles.description}>
            No big words. No bloated pitch decks. No five-hour Zoom calls. Just smart strategy, flawless execution and results that actually move the needle.
          </p>
        </div>
      </div>
    </section>
  );
} 