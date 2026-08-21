import React from "react";
import styles from "@/styles/components/organisms/VisionDiagrams.module.scss";

// SVG Icons tailored for Build, Launch, Scale
const RocketIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      fill="#f97316"
    />
    <path
      d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2z"
      fill="#ef4444"
    />
    <path
      d="M9 12l2 2s-1 2-3 2-3-2-3-2 0-2 2-3 2 1 2 1z"
      fill="#3b82f6"
    />
    <circle cx="15" cy="9" r="1.5" fill="#ffffff" />
  </svg>
);

const MonitorCheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="3" rx="2" stroke="#1e293b" />
    <path d="m8 10 3 3 5-5" stroke="#2563eb" strokeWidth="2.5" />
    <path d="M12 17v4" stroke="#1e293b" />
    <path d="M8 21h8" stroke="#1e293b" />
  </svg>
);

const GrowthChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="14" width="4" height="7" rx="1" fill="#93c5fd" />
    <rect x="9" y="10" width="4" height="11" rx="1" fill="#60a5fa" />
    <rect x="15" y="6" width="4" height="15" rx="1" fill="#2563eb" />
    <path d="M3 10L10 4L14 8L21 2" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 2H21V6" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BuildLaunchScaleDiagram: React.FC = () => {
  return (
    <div className={styles.diagramContainer}>
      <div className={styles.blsContainer}>
        {/* Top Arch with Floating Tiles */}
        <div className={styles.arcIconsWrapper}>
          <div className={styles.arcDashedLine} />
          
          <div className={`${styles.floatingIconTile} ${styles.leftIcon}`}>
            <RocketIcon />
          </div>
          <div className={`${styles.floatingIconTile} ${styles.centerIcon}`}>
            <MonitorCheckIcon />
          </div>
          <div className={`${styles.floatingIconTile} ${styles.rightIcon}`}>
            <GrowthChartIcon />
          </div>
        </div>

        {/* 3 Tier Cards Stack */}
        <div className={styles.blsCardsStack}>
          {/* Card 1 */}
          <div className={styles.blsCard}>
            <div className={styles.blsHeader}>
              <span>Production-grade deployment</span>
            </div>
            <div className={styles.blsBody}>
              <p style={{ margin: 0 }}>
                Implement robust infrastructure to handle real-world usage securely and efficiently.
              </p>
            </div>
          </div>

          <div className={styles.connector}>
            <div className={styles.line} />
          </div>

          {/* Card 2 */}
          <div className={styles.blsCard}>
            <div className={styles.blsHeader}>
              <span>Performance optimization</span>
            </div>
            <div className={styles.blsBody}>
              <p style={{ margin: 0 }}>
                Continuously tune and optimize the product for maximum speed and reliability.
              </p>
            </div>
          </div>

          <div className={styles.connector}>
            <div className={styles.line} />
          </div>

          {/* Card 3 */}
          <div className={styles.blsCard}>
            <div className={styles.blsHeader}>
              <span>Analytics embedded from day one</span>
            </div>
            <div className={styles.blsBody}>
              <p style={{ margin: 0 }}>
                Enable data-driven decisions with integrated monitoring and insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildLaunchScaleDiagram;
