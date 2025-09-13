import React from 'react';
import Image from 'next/image';
import styles from './NewPage.module.scss';

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
              <div className={styles.teamAvatars} role="group" aria-label="Team member avatars">
                <div className={styles.teamCount} aria-label="32 plus team members">35+</div>
                <div className={styles.avatar} aria-hidden="true"></div>
                <div className={styles.avatar} aria-hidden="true"></div>
                <div className={styles.avatar} aria-hidden="true"></div>
                <div className={styles.avatar} aria-hidden="true"></div>
                <div className={styles.avatar} aria-hidden="true"></div>
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
                  <span className={styles.statNumber} aria-label="75 plus projects">75+</span>
                  <p className={styles.statDescription}>Projects were launched successfully since 2023.</p>
                </div>
              </div>

              {/* Client Satisfaction Section */}
              <div className={styles.statItem}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <h3 className={styles.statTitle}>Client Satisfaction</h3>
                  <a 
                      href="https://www.upwork.com/agencies/1737467434828361728/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.verificationLink}
                      aria-label="View our Upwork profile - opens in new tab"
                    >
                      <div className={styles.verificationText}>
                        <span>As Verified on Upwork</span>
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
                      </div>
                    </a>
                </div>
                <div className={styles.separator} aria-hidden="true"></div>
                <div className={styles.upworkVerification}>
                  <Image 
                    src="/landing/Upwork.webp" 
                    alt="Upwork Logo" 
                    width={400}
                    height={50}
                    className={styles.upworkLogo}
                    priority
                  />
                  {/* <a 
                    href="https://www.upwork.com/agencies/1737467434828361728/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.verificationLink}
                    aria-label="View our Upwork profile - opens in new tab"
                  >
                    <div className={styles.verificationText}>
                      <span>As Verified on Upwork</span>
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
                    </div> */}
                  {/* </a> */}
                </div>
              </div>
            </div>

            {/* our product Section */}
            <div className={styles.statItem}>
              <h3 className={styles.statTitle}>Our Own Product</h3>
              <div className={styles.separator} aria-hidden="true"></div>
              <div className={styles.statContent}>
                {/* <span className={styles.statNumber} aria-label="Established in 2023">2023</span>
                 */}
                 <div className={styles.toinggButtonContainer}>
                        <button className={styles.toinggButton} onClick={() => {
                            window.open("https://www.toingg.com/", "_blank");
                        }}>
                            TOINGG
                        </button>
                    </div>
                <p className={styles.statDescription}>
                  In year 2023, two founders launched their first project: &quot;Toingg&quot;, a communication OS for businesses. 
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
