import React from "react";
import styles from "@/styles/components/organisms/RevenueDiagrams.module.scss";

// SVG Icons tailored for the 4 corner green tiles
const AIStackIcon = () => (
  <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
    {/* Bottom layer */}
    <path d="M6 25l12 6 12-6-12-6-12 6z" fill="#0284c7" />
    {/* Middle layer */}
    <path d="M6 18l12 6 12-6-12-6-12 6z" fill="#38bdf8" />
    {/* Top layer */}
    <path d="M6 11l12 6 12-6-12-6-12 6z" fill="#bae6fd" />
  </svg>
);

const PerformanceGaugeIcon = () => (
  <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
    {/* Gauge Arc */}
    <path d="M8 26 A 12 12 0 1 1 28 26" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
    <path d="M8 26 A 12 12 0 0 1 18 14" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />
    <path d="M18 14 A 12 12 0 0 1 28 26" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
    {/* Needle */}
    <circle cx="18" cy="24" r="3" fill="#ffffff" />
    <path d="M18 24 L24 17" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const CloudNativeIcon = () => (
  <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
    {/* Cloud outline */}
    <path
      d="M10 20a5 5 0 0 1 9.5-2.2A4 4 0 0 1 26 21a3.5 3.5 0 0 1-1 6.8H10A5 5 0 0 1 10 20z"
      fill="#bae6fd"
      stroke="#0284c7"
      strokeWidth="1.5"
    />
    {/* Circuit traces */}
    <path d="M14 27v4M18 27v5M22 27v3" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="14" cy="32" r="1.5" fill="#38bdf8" />
    <circle cx="18" cy="33" r="1.5" fill="#38bdf8" />
    <circle cx="22" cy="31" r="1.5" fill="#38bdf8" />
  </svg>
);

const OptimizationIcon = () => (
  <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
    {/* Monitor */}
    <rect x="5" y="7" width="26" height="18" rx="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
    <path d="M14 25v4h8v-4" stroke="#1e293b" strokeWidth="1.5" />
    {/* Gear & Lightning */}
    <circle cx="18" cy="16" r="6" fill="#fef08a" stroke="#eab308" strokeWidth="1.5" />
    <path d="M19 12l-3 4h3l-1 4 4-5h-3z" fill="#ef4444" />
  </svg>
);

const CenterShieldRobotIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    {/* Shield */}
    <path
      d="M24 4L8 10v14c0 10 7 19 16 22 9-3 16-12 16-22V10L24 4z"
      fill="#38bdf8"
      fillOpacity="0.25"
      stroke="#0284c7"
      strokeWidth="2"
    />
    {/* Robot Avatar */}
    <rect x="16" y="16" width="16" height="14" rx="5" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
    {/* Eyes */}
    <circle cx="20" cy="22" r="1.8" fill="#0284c7" />
    <circle cx="28" cy="22" r="1.8" fill="#0284c7" />
    {/* Headset */}
    <path d="M14 22a10 10 0 0 1 20 0" stroke="#0f172a" strokeWidth="1.5" fill="none" />
    <rect x="13" y="20" width="3" height="5" rx="1" fill="#0f172a" />
    <rect x="32" y="20" width="3" height="5" rx="1" fill="#0f172a" />
    {/* Gears */}
    <g transform="translate(28, 28) scale(0.6)">
      <circle cx="10" cy="10" r="8" fill="#64748b" stroke="#334155" strokeWidth="2" />
      <circle cx="10" cy="10" r="3" fill="#ffffff" />
    </g>
  </svg>
);

const EnterpriseImplementationDiagram: React.FC = () => {
  return (
    <div className={styles.diagramContainer}>
      <div className={styles.enterpriseCanvas}>
        {/* Connecting Dashed SVG Lines */}
        <svg className={styles.enterpriseConnectorsSvg} viewBox="0 0 400 320" fill="none">
          {/* Top-Left to Center */}
          <path
            d="M95,75 C95,160 140,160 160,160"
            stroke="#8b8070"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Top-Right to Center */}
          <path
            d="M305,75 C305,160 260,160 240,160"
            stroke="#8b8070"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Bottom-Left to Center */}
          <path
            d="M95,245 C95,160 140,160 160,160"
            stroke="#8b8070"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Bottom-Right to Center */}
          <path
            d="M305,245 C305,160 260,160 240,160"
            stroke="#8b8070"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Top-Left Tile */}
        <div className={`${styles.greenTile} ${styles.topLeft}`}>
          <AIStackIcon />
          <span>AI Stack</span>
        </div>

        {/* Top-Right Tile */}
        <div className={`${styles.greenTile} ${styles.topRight}`}>
          <PerformanceGaugeIcon />
          <span>Performance</span>
        </div>

        {/* Center Node */}
        <div className={styles.enterpriseCenterNode}>
          <CenterShieldRobotIcon />
        </div>

        {/* Bottom-Left Tile */}
        <div className={`${styles.greenTile} ${styles.bottomLeft}`}>
          <CloudNativeIcon />
          <span>Cloud Native</span>
        </div>

        {/* Bottom-Right Tile */}
        <div className={`${styles.greenTile} ${styles.bottomRight}`}>
          <OptimizationIcon />
          <span>Optimization</span>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseImplementationDiagram;
