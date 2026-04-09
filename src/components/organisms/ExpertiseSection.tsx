import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/components/organisms/ExpertiseSection.module.scss';
import ROUTES from '@/constants/routes';
import expertiseSectionText from '@/constants/uiText/expertiseSection.json';


export default function ExpertiseSection() {
  const router = useRouter();
  
  const services = expertiseSectionText.services;

  const handleServiceClick = (serviceNumber: string) => {
    const sectionId = parseInt(serviceNumber);
    router.push(ROUTES.EXPERTISE_SECTION(sectionId));
  };

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        {/* Top Section: Centered Expertise Heading and Description */}
        <div className={styles.expertiseContent}>
          <div className={styles.expertiseButtonContainer}>
            <button
              type="button"
              onClick={() => router.push(ROUTES.EXPERTISE)}
              className={styles.expertiseButton}
            >
              {expertiseSectionText.buttonLabel}
            </button>
          </div>

          <p className={styles.expertiseDescription}>
            {expertiseSectionText.description}
          </p>
        </div>

        {/* Bottom Section: Two-column layout */}
        <div className={styles.bottomSection}>
          {/* Left Column: Slogan and Description */}
          <div className={styles.sloganSection}>
            <h2 className={styles.mainHeading}>
              {expertiseSectionText.mainHeading}
            </h2>
            <p className={styles.description}>
              {expertiseSectionText.subDescription}
            </p>
          </div>

          {/* Right Column: Services List */}
          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={styles.serviceItem}
                onClick={() => handleServiceClick(service.number)}
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
