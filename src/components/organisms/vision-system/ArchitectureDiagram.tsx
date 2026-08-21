import React from "react";
import styles from "@/styles/components/organisms/VisionDiagrams.module.scss";

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className={styles.diagramContainer}>
      <div className={styles.architectureCanvas}>
        <h4 className={styles.archTitle}>Product Architecture</h4>

        {/* Top Product Node */}
        <div className={styles.productNode}>Product</div>

        {/* Flow Grid with Connecting Elements */}
        <div className={styles.archFlowGrid}>
          {/* SVG Connector Lines */}
          <svg className={styles.svgConnectors} viewBox="0 0 400 200" fill="none">
            {/* Main trunk from Product */}
            <path
              d="M200,28 L200,60"
              stroke="#0f172a"
              strokeWidth="1.5"
            />
            {/* Branch 1 to Left Module 1 (Coral) */}
            <path
              d="M200,60 C200,85 180,95 125,95"
              stroke="#0f172a"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            />
            {/* Branch 2 to Left Module 2 (Blue) */}
            <path
              d="M200,60 C200,120 180,135 125,135"
              stroke="#0f172a"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            />
            {/* Branch 3 to Left Module 3 (Amber) */}
            <path
              d="M200,60 C200,155 180,175 125,175"
              stroke="#0f172a"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            />
            {/* Branch 4 to Right Grouped Modules */}
            <path
              d="M200,60 C200,110 240,125 270,125"
              stroke="#0f172a"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            />

            {/* Marker definition for crisp arrowheads */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="6"
                markerHeight="6"
                refX="4"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
              </marker>
            </defs>
          </svg>

          {/* Left Column Modules */}
          <div className={styles.leftModulesStack}>
            <div className={`${styles.modulePill} ${styles.coral}`}>Module</div>
            <div className={`${styles.modulePill} ${styles.blue}`}>Module</div>
            <div className={`${styles.modulePill} ${styles.amber}`}>Module</div>
          </div>

          {/* Right Column Grouped Modules */}
          <div className={styles.rightGroupWrapper}>
            <span className={styles.groupLabel}>Grouped Modules</span>
            <div className={styles.groupInnerCard}>
              <div className={`${styles.modulePill} ${styles.magenta}`}>Module</div>
              <div className={`${styles.modulePill} ${styles.cyan}`}>Module</div>
              <div className={`${styles.modulePill} ${styles.purple}`}>Module</div>
            </div>
          </div>
        </div>

        {/* Behavioral Link Row */}
        <div className={styles.behavioralLinkRow}>
          <svg className={styles.behavioralSvg} viewBox="0 0 320 32" fill="none">
            {/* Left black dot */}
            <circle cx="55" cy="4" r="3.5" fill="#0f172a" />
            {/* Right black dot */}
            <circle cx="265" cy="4" r="3.5" fill="#0f172a" />
            {/* Dashed connector path */}
            <path
              d="M55,4 L55,20 C55,20 160,20 265,20 L265,4"
              stroke="#0f172a"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
          <span className={styles.behavioralLabel}>Behavioral Link</span>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
