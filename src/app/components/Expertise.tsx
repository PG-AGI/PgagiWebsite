"use client";

import React, { useState, useEffect } from 'react';
import styles from './expertise.module.scss';

export default function Expertise() {
  const [activeSection, setActiveSection] = useState(1);

  const expertiseSections = [
    {
      id: 1,
      number: "01",
      title: "Branding",
      tagline: "Where Brands Come Alive",
      description: "Where brands come alive. We craft identities that don't just look good they mean something. From strategy to storytelling, we help brands show up with confidence, clarity, and a whole lot of personality. Whether you're building from scratch or ready for a rebrand, we'll make sure every detail reflects who you are and where you're headed.",
      services: [
        "Brand Strategy & Positioning",
        "Visual Identity Design", 
        "Brand Voice & Messaging",
        "Brand Guidelines",
        "Packaging Design",
        "Naming & Tagline Development"
      ]
    },
    {
      id: 2,
      number: "02", 
      title: "Mobile Apps",
      tagline: "From Concept to Home Screen",
      description: "We transform ideas into intuitive, powerful mobile experiences. From native iOS and Android development to cross-platform solutions, we build apps that users love and businesses rely on. Our mobile expertise covers everything from concept to launch, ensuring your app stands out in crowded app stores.",
      services: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Maintenance & Updates"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Web Development", 
      tagline: "Websites that work as good as they look",
      description: "From polished marketing sites to dynamic, content-rich platforms, our dev team turns bold ideas into seamless digital experiences. Designed for speed, built for scale, and engineered to convert. Our websites don't just exist online, they perform.",
      services: [
        "Custom Front-End Development",
        "Framer & No-Code Development",
        "E-commerce Development",
        "Accessibility Optimization",
        "Interactive Web Experiences"
      ]
    },
    {
      id: 4,
      number: "04",
      title: "AI & Machine Learning",
      tagline: "Intelligence That Drives Innovation",
      description: "We harness the power of artificial intelligence to solve complex business challenges. From custom AI models to intelligent automation, we help businesses leverage cutting-edge technology to gain competitive advantages and unlock new possibilities.",
      services: [
        "Custom AI Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Machine Learning Pipelines",
        "AI Strategy & Consulting"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const expertiseSection = document.querySelector(`.${styles.expertiseSection}`) as HTMLElement;
      
      if (expertiseSection) {
        const sectionTop = expertiseSection.offsetTop;
        const sectionHeight = expertiseSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the expertise section is visible
        const scrollProgress = (scrollTop - sectionTop + windowHeight) / sectionHeight;
        
        if (scrollProgress > 0 && scrollProgress <= 1) {
          // Calculate which section should be active based on scroll position
          const sectionIndex = Math.floor(scrollProgress * expertiseSections.length);
          const currentSection = Math.min(Math.max(sectionIndex + 1, 1), expertiseSections.length);
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <span className={styles.subtitle}>// Expertise</span>
          <h1 className={styles.mainTitle}>
            <span className={styles.titleLine1}>We build the stuff brands brag about.</span>
            <span className={styles.titleLine2}>Bold identities, beautiful websites, scroll stopping campaigns and digital experiences people actually love.</span>
          </h1>
        </div>

        {/* Main Content - Left Static, Right Scrollable with Page */}
        <div className={styles.mainContent}>
          {/* Left Side - Static */}
          <div className={styles.leftSide}>
            <div className={styles.leftContent}>
              <p className={styles.leftText}>
                Craft the Brand They<br />
                Remember. Move Faster<br />
                Than They Can Follow.
              </p>
              <div className={styles.dot}></div>
            </div>
          </div>

          {/* Right Side - Scrollable Content with Headers */}
          <div className={styles.rightSide}>
            {expertiseSections.map((section) => (
              <div key={section.id} className={styles.section} id={`section-${section.id}`}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionNumber}>{section.number}</div>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                </div>
                
                <div className={styles.sectionContent}>
                  <h3 className={styles.sectionTagline}>{section.tagline}</h3>
                  <p className={styles.sectionDescription}>{section.description}</p>
                  
                  <div className={styles.servicesList}>
                    {section.services.map((service, index) => (
                      <div key={index} className={styles.serviceItem}>
                        <div className={styles.checkmark}>
                          {index === 0 ? (
                            // First item gets a solid black bullet point
                            <div style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }}></div>
                          ) : (
                            // Other items get checkmarks
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 