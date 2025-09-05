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
      tagline: "Where Ideas Become Intelligence",
      description: "We push the boundaries of what’s possible with AI. From data to discovery, we explore, test, and shape innovations that move businesses forward.",
      services: [
        "Model Research & Prototyping",
        "Data Strategy & Analysis", 
        "Custom AI Experiments",
        "Performance Benchmarking",
        "Emerging Tech Exploration",
        
      ]
    },
    {
      id: 2,
      number: "02", 
      title: "AI Architecture",
      tagline: "Where Systems Find Their Strength",
      description: "Strong AI needs a strong foundation. We design secure, scalable architectures that power intelligence at every level.",
      services: [
        "End-to-End AI Infrastructure",
        "Cloud & On-Prem Solutions",
        "MLOps & Automation",
        "Scalable Data Pipelines",
        "Security & Compliance",
        
      ]
    },
    {
      id: 3,
      number: "03",
      title: "AI Mobile App Development", 
      tagline: "Where Intelligence Meets Mobility",
      description: "We bring AI into everyday moments—crafting mobile apps that think, learn, and feel seamless in the palm of your hand.",
      services: [
        "AI-Powered Apps",
        "On-Device AI Models",
        "Cross-Platform Integration",
        "User-Centric Design",
        "Continuous Optimization"
      ]
    },
    {
      id: 4,
      number: "04",
      title: "AI SaaS Development",
      tagline: "Where Products Come to Life",
      description: "From idea to launch, we build AI-driven SaaS platforms that scale with your vision and grow with your users.",
      services: [
        "Custom SaaS Platforms",
        "Multi-Tenant Architecture",
        "Subscription & Monetization",
        "Seamless Integrations",
        "Analytics & Insights",
        
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
            <span className={styles.titleLine1}>We partner with bold founders to build end-to-end AI products that truly matter to users.</span>
            <span className={styles.titleLine2}>Our expertise spans from designing and developing AI-driven products to delivering enterprise-grade solutions that scale.</span>
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