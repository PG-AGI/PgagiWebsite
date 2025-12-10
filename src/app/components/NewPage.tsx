import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './NewPage.module.scss';
import { AnimatedTooltip } from './ui/animated-tooltip';


const people = [


  { id: 1, name: "Vivekjyoti Bhowmik", designation: "Founder", image: "/assets/team/member1.png" },
  { id: 2, name: "Shibajyoti Bhowmik", designation: "Managing Director", image: "/assets/team/member2Shibasir.jpg" },
  { id: 3, name: "Pratik Hegde", designation: "Founding Engineer", image: "/assets/team/PRATIK.png" },
  { id: 4, name: "Abhinav", designation: "Founding Engineer", image: "/assets/team/ABHINAV.png" },
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
          {/* Left Side - Our Own Product & Team of Pilots */}
          <div className={styles.leftSide}>
            {/* Our Own Product Section */}
            <div className={styles.statItem}>
              <h3 className={styles.statTitle}>Our Own Product</h3>
              <div className={styles.separator} aria-hidden="true"></div>
              <div className={styles.toinggButtonContainer}>
                <button className={styles.toinggButton} onClick={() => {
                    window.open("https://www.toingg.com/", "_blank");
                }}>
                    TOINGG
                </button>
              </div>
              <span className={styles.productDescription}>
                In year 2023, two founders launched their first product
                <span style={{ color: "#b60306" }}> Toingg </span>
                , an AI communication OS for businesses.
              </span>
            </div>

            {/* Team of Pilots Section */}
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

          {/* Right Side - Stats */}
          <div className={styles.rightSide}>
            {/* Top Row - Launched Projects and Client Satisfaction */}
            <div className={styles.topRow}>
              {/* Launched Projects Section */}
              <div className={styles.statItem}>
                <h3 className={styles.statTitle}>Launched Projects</h3>
                <div className={styles.separator} aria-hidden="true"></div>
                <div className={styles.statContent}>
                  <AnimatedNumber target={75} />
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
                  </a>
                </div>
                <div className={styles.separator} aria-hidden="true"></div>
                <div className={styles.upworkVerification}>
                  <div className={styles.badgeItem}>
                    <Image 
                      src="/images/success.png" 
                      alt="Success Badge" 
                      width={50}
                      height={50}
                      sizes="(max-width: 480px) 35px, (max-width: 768px) 40px, 50px"
                      className={styles.successBadge}
                      priority
                    />
                    <span className={styles.badgeText}>100% Job Success</span>
                  </div>
                  <div className={styles.badgeItem}>
                    <Image 
                      src="/images/toprated.png" 
                      alt="Upwork Top Rated Badge" 
                      width={50}
                      height={50}
                      sizes="(max-width: 480px) 35px, (max-width: 768px) 40px, 50px"
                      className={styles.topratedBadge}
                      priority
                    />
                    <span className={styles.badgeText}>Top Rated Plus on Upwork</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Agency Information Section */}
            <div className={styles.agencySection}>
              <div className={styles.agencyDescription}>
                <p>
                  We specialize in engineering <strong style={{ color: "#b60306" }}>full-scale AI applications</strong> from research and product development to scalable deployment.
                </p>
                <p>
                  Whether you are launching <strong style={{ color: "#b60306" }}>a new AI product</strong> or <strong style={{ color: "#b60306" }}>optimizing an existing one</strong>, we bring together deep tech expertise to drive real-world tangible results.
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
