"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './expertise.module.scss';

export default function Expertise() {
  const [activeSection, setActiveSection] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const expertiseSections = useMemo(() => [
    {
      id: 1,
      number: "01",
      title: "AI Research",
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
      title: "AI SAAS DEVELOPMENT",
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
      title: "AI Mobile App Development", 
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
      title: "Integrating AI in Existing Workflows",
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
  ], []);

  useEffect(() => {
    // Handle hash navigation on page load
    const handleHashNavigation = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash;
        if (hash) {
          const sectionId = parseInt(hash.replace('#section-', ''));
          if (sectionId >= 1 && sectionId <= expertiseSections.length) {
            setActiveSection(sectionId);
            
            // Scroll to the section after a short delay to ensure DOM is ready
            setTimeout(() => {
              const targetSection = document.getElementById(`section-${sectionId}`);
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }
        }
      }
    };

    handleHashNavigation();
  }, []);

  useEffect(() => {
    // Completely passive approach - only update when scrolling stops
    const handleScrollEnd = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        // Only calculate active section when scrolling stops
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        let currentSection = 1;
        sectionRefs.current.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.5) {
              currentSection = index + 1;
            }
          }
        });
        
        setActiveSection(currentSection);
      }, 150); // Wait 150ms after scrolling stops
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScrollEnd, { passive: true });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScrollEnd);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Set section refs
  const setSectionRef = (el: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <span className={styles.subtitle}>{'// Expertise'}</span>
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
            {expertiseSections.map((section, index) => (
              <div 
                key={section.id} 
                className={styles.section} 
                id={`section-${section.id}`}
                ref={(el) => setSectionRef(el, index)}
              >
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionNumber}>{section.number}</div>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                </div>
                
                <div className={styles.sectionContent}>
                  <h3 className={styles.sectionTagline}>{section.tagline}</h3>
                  <p className={styles.sectionDescription}>{section.description}</p>
                  
                  <div className={styles.servicesList}>
                    {section.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className={styles.serviceItem}>
                        <div className={styles.checkmark}>
                          {serviceIndex === 0 ? (
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