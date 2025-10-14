import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './NewPage.module.scss';
import { AnimatedTooltip } from './ui/animated-tooltip';


const people = [


  { id: 1, name: "VivekJyothi Bhowmik", designation: "Founder", image: "/assets/team/member1.png" },
  { id: 2, name: "ShibaJyothi Bhowmik", designation: "Managing Director", image: "/assets/team/member2.png" },
  { id: 3, name: "Pratik Hegde", designation: "Founding Engineer", image: "/assets/team/PRATIK.png" },
  { id: 4, name: "Abhinav", designation: "Founding Engineer", image: "/assets/team/member8.png" },
  { id: 5, name: "Sahil Sinha", designation: "Founding Engineer", image: "/assets/team/member9.png" },
  // {id: 6, name: "With", designation: "Team Size of", image: "/assets/team/3f1b3d45-eabe-4788-84d9-d6e8ce6eb2c1-modified.jpg" },
];

const AnimatedNumber: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    const duration = 2000; // ms
    const step = Math.ceil(target / (duration / 16));
    const animate = () => {
      start += step;
      if (start >= target) {
        setCount(target);
      } else {
        setCount(start);
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [hasAnimated, target]);

  return (
    <span
      ref={ref}
      className={styles.statNumber}
      aria-label={`${target} plus projects`}
      style={{ display: 'inline-block', width: '3ch', textAlign: 'right' }} // Add this line
    >
      {count}+
    </span>
  );
};

const StatsSection = () => {
  return (
    <section 
      id="stats-section" 
      className={styles.statsSection}
      aria-label="Company Statistics and Team Information"
    >
      <div className={styles.container}>
        {/* Main Content Area */}
        <div className={styles.mainContent}>
          {/* Left Side - Team of Pilots */}
          <div className={styles.leftSide}>
            <div className={styles.teamSection}>
              <h2 className={styles.teamTitle}>Team of Pilots</h2>
              {/* <div className={styles.teamAvatars} role="group" aria-label="Team member avatars">
                <div className={styles.teamCount} aria-label="32 plus team members">35+</div>
                <div className={styles.avatar} aria-hidden="true"></div>
                <div className={styles.avatar} aria-hidden="true"></div>
                <div className={styles.avatar} aria-hidden="true"></div>
                <div className={styles.avatar} aria-hidden="true"></div>
                <div className={styles.avatar} aria-hidden="true"></div>
              </div> */}

<div className={styles.wrapperContainer}>
      <AnimatedTooltip items={people} />
      <div className={styles.teamCount} aria-label="32 plus team members">45+</div>
    </div>
            </div>
          </div>

          {/* Right Side - Stats and Agency Info */}
          <div className={styles.rightSide}>
            {/* Top Row - Launched Projects and Client Satisfaction */}
            <div className={styles.topRow}>
              {/* Launched Projects Section */}
              <div className={styles.statItem}>
                <h3 className={styles.statTitle}>Launched Projects</h3>
                <div className={styles.separator} aria-hidden="true"></div>
                <div className={styles.statContent}>
                  <AnimatedNumber target={75} />
                  {/* <p className={styles.statDescription}>Projects were launched successfully since 2023.</p> */}
                </div>
              </div>

              {/* Client Satisfaction Section */}
              <div className={styles.statItem}>
                <div className={styles.headerRow}>
                  <h3 className={`${styles.statTitle} ${styles.clientSatisfactionTitle}`}>Client Satisfaction</h3>
                  <a 
                    href="https://www.upwork.com/agencies/1737467434828361728/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.verificationLink}
                    aria-label="View our Upwork profile - opens in new tab"
                  >
                    <span className={styles.verificationText}>
                      <span>Verify</span>
                      <svg 
                        className={styles.blueTick} 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#1DA1F2"/>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className={styles.separator} aria-hidden="true"></div>
                <div className={styles.upworkVerification}>
                  <Image 
                    src="/landing/Upwork.webp" 
                    alt="Upwork Logo" 
                    width={400}
                    height={50}
                    sizes="(max-width: 480px) 70px, (max-width: 768px) 90px, (max-width: 1199px) 120px, 150px"
                    className={styles.upworkLogo}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* our product Section */}
            <div className={styles.statItem}>
              <h3 className={styles.statTitle}>Our Own Product</h3>
              <div className={styles.separator} aria-hidden="true"></div>
              <div className={styles.toinggButtonContainer}>
                  <button className={styles.toinggButton} onClick={() => {
                      window.open("https://www.toingg.com/", "_blank");
                  }}>
                      TOINGG
                  </button>
                  <p className={styles.statDescription}>
                      In year 2023, two founders launched their first project: &quot;Toingg&quot;, an AI communication OS for businesses. 
                  </p>
              </div>

            </div>

            {/* Agency Information Section */}
            <div className={styles.agencySection}>
              {/* Agency Description */}
              <div className={styles.agencyDescription}>
                <p>
                We specialize in engineering <strong> full-scale AI applications </strong>  from research and product development to scalable deployment. Whether you are launching <strong> a new AI product </strong> or <strong> optimizing an existing one</strong>, we bring together deep tech expertise to drive real-world tangible results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default StatsSection;
