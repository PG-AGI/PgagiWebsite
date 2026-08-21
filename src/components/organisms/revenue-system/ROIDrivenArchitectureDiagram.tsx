import React from "react";
import styles from "@/styles/components/organisms/RevenueDiagrams.module.scss";

// Icons for the orange cards
const ModularIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4" />
    <path d="m4.93 4.93 2.83 2.83" />
    <path d="M2 12h4" />
    <path d="m4.93 19.07 2.83-2.83" />
    <path d="M12 18v4" />
    <path d="m16.24 16.24 2.83 2.83" />
    <path d="M18 12h4" />
    <path d="m16.24 7.76 2.83-2.83" />
  </svg>
);

const UserMeterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const HumanInLoopIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const SecurityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const NetworkServerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    {/* Globe */}
    <circle cx="12" cy="24" r="6" fill="#22c55e" fillOpacity="0.25" stroke="#22c55e" strokeWidth="1.5" />
    <path d="M8 24h8M12 18a9 9 0 0 1 0 12M12 18a9 9 0 0 0 0 12" stroke="#22c55e" strokeWidth="1" />
    {/* Server Stack */}
    <rect x="18" y="6" width="14" height="6" rx="2" fill="#0ea5e9" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
    <circle cx="21" cy="9" r="1" fill="#38bdf8" />
    <rect x="18" y="14" width="14" height="6" rx="2" fill="#0ea5e9" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
    <circle cx="21" cy="17" r="1" fill="#38bdf8" />
    {/* Connecting trace */}
    <path d="M12 18v-4h6M18 20h3" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ROIDrivenArchitectureDiagram: React.FC = () => {
  return (
    <div className={styles.diagramContainer}>
      <div className={styles.roiArchCanvas}>
        {/* Left ROI Arch. Node */}
        <div className={styles.roiCenterCard}>
          <NetworkServerIcon />
          <span>ROI Arch.</span>
        </div>

        {/* Branching SVG Connectors */}
        <div className={styles.branchingSvgWrapper}>
          <svg className={styles.archBranchesSvg} viewBox="0 0 90 280" fill="none">
            {/* Trunk */}
            <path
              d="M0,140 C30,140 30,35 70,35"
              stroke="#c2410c"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M0,140 C30,140 30,105 70,105"
              stroke="#c2410c"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M0,140 C30,140 30,175 70,175"
              stroke="#c2410c"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M0,140 C30,140 30,245 70,245"
              stroke="#c2410c"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Right 4 Orange Tiered Cards */}
        <div className={styles.orangeCardsStack}>
          {/* Card 1 */}
          <div className={styles.orangeCard}>
            <div className={styles.orangeHeader}>
              <ModularIcon />
              <span>Modular AI system design</span>
            </div>
            <div className={styles.orangeBody}>
              Flexible, reusable AI components tailored for specific tasks.
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.orangeCard}>
            <div className={styles.orangeHeader}>
              <UserMeterIcon />
              <span>Cost-aware infrastructure</span>
            </div>
            <div className={styles.orangeBody}>
              Optimize resources to minimize expenses and maximize efficiency.
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.orangeCard}>
            <div className={styles.orangeHeader}>
              <HumanInLoopIcon />
              <span>Human-in-the-loop control</span>
            </div>
            <div className={styles.orangeBody}>
              Integrate human oversight for validation and decision-making.
            </div>
          </div>

          {/* Card 4 */}
          <div className={styles.orangeCard}>
            <div className={styles.orangeHeader}>
              <SecurityIcon />
              <span>Secure, compliant foundation</span>
            </div>
            <div className={styles.orangeBody}>
              Build with security and regulatory compliance at the core.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROIDrivenArchitectureDiagram;
