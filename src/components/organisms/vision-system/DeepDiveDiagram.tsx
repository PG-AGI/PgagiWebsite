import React from "react";
import styles from "@/styles/components/organisms/VisionDiagrams.module.scss";

// SVG Icons tailored to match the Figma/reference styling
const TargetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#fca5a5" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" stroke="#ef4444" strokeWidth="2" fill="#fecaca" />
    <circle cx="12" cy="12" r="2" fill="#ef4444" />
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const AlertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="#fef08a" stroke="#d97706" />
    <line x1="12" y1="9" x2="12" y2="13" stroke="#b45309" />
    <line x1="12" y1="17" x2="12.01" y2="17" stroke="#b45309" />
  </svg>
);

const DeepDiveDiagram: React.FC = () => {
  return (
    <div className={styles.diagramContainer}>
      <div className={styles.deepDiveFlow}>
        {/* Step 1 */}
        <div className={styles.deepDiveCard}>
          <div className={styles.deepDiveHeader}>
            <span className={styles.iconWrap}><TargetIcon /></span>
            <span>Pressure test your idea</span>
          </div>
          <div className={styles.deepDiveBody}>
            <span className={styles.subPoint}>Market value</span>
            <span className={styles.subPoint}>Competition</span>
            <span className={styles.subPoint}>Differentiators</span>
          </div>
        </div>

        <div className={styles.connector}>
          <div className={styles.line} />
        </div>

        {/* Step 2 */}
        <div className={styles.deepDiveCard}>
          <div className={styles.deepDiveHeader}>
            <span className={styles.iconWrap}><UserIcon /></span>
            <span>Define real user personas</span>
          </div>
          <div className={styles.deepDiveBody}>
            <span className={styles.subPoint}>Demographics</span>
            <span className={styles.subPoint}>Behaviours</span>
            <span className={styles.subPoint}>Painpoints</span>
          </div>
        </div>

        <div className={styles.connector}>
          <div className={styles.line} />
        </div>

        {/* Step 3 */}
        <div className={styles.deepDiveCard}>
          <div className={styles.deepDiveHeader}>
            <span className={styles.iconWrap}><DatabaseIcon /></span>
            <span>Map technical scope</span>
          </div>
          <div className={styles.deepDiveBody}>
            <span className={styles.subPoint}>Features</span>
            <span className={styles.subPoint}>Technical</span>
            <span className={styles.subPoint}>Requirements</span>
            <span className={styles.subPoint}>Limitations</span>
          </div>
        </div>

        <div className={styles.connector}>
          <div className={styles.line} />
        </div>

        {/* Step 4 */}
        <div className={styles.deepDiveCard}>
          <div className={styles.deepDiveHeader}>
            <span className={styles.iconWrap}><AlertIcon /></span>
            <span>Identify scaling risks</span>
          </div>
          <div className={styles.deepDiveBody}>
            <span className={styles.subPoint}>Workload</span>
            <span className={styles.subPoint}>Infrastructure</span>
            <span className={styles.subPoint}>Code</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepDiveDiagram;
