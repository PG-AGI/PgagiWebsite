import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './ExpertiseSection.module.scss';

export default function ExpertiseSection() {
  const router = useRouter();
  
  const services = [
    { number: '01', title: 'AI Research ' },
    { number: '02', title: 'AI SAAS DEVELOPMENT' },
    { number: '03', title: 'AI Mobile App Development' },
    { number: '04', title: 'Integrating AI in Existing Workflows' }
  ];

  const handleServiceClick = (serviceNumber: string) => {
    const sectionId = parseInt(serviceNumber);
    router.push(`/expertise#section-${sectionId}`);
  };

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h2 className={styles.mainHeading}>
            Less talk,<br/> more impact.
          </h2>
          <p className={styles.description}>
            No big words. No bloated pitch decks. No five-hour Zoom calls. Just smart strategy, flawless execution and results that actually move the needle.
          </p>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h3 className={styles.expertiseHeading}>{/* Expertise */}// Expertise</h3>
          <p className={styles.expertiseDescription}>
          Our work spans from deep AI research to deploying enterprise-ready solutions.
We collaborate with enterprises, startup founders, and global teams.
Our focus is on innovation that delivers measurable impact.
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
      </div>
    </section>
  );
} 