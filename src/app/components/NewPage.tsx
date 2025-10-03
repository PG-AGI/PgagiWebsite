import React from 'react';
import Image from 'next/image';
import styles from './NewPage.module.scss';
import { AnimatedTooltip } from './ui/animated-tooltip';


const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

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

{/* <div className={styles.wrapperContainer}>
      <AnimatedTooltip items={people} />
    </div> */}
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
