import React from "react";
import styles from "@/styles/components/organisms/RevenueDiagrams.module.scss";

const DeepBusinessImmersionDiagram: React.FC = () => {
  return (
    <div className={styles.diagramContainer}>
      <div className={styles.ringsCanvas}>
        <svg className={styles.ringsSvg} viewBox="0 0 400 360" fill="none">
          <defs>
            {/* 3D Torus Red Gradient */}
            <linearGradient id="redTorus" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>

            {/* 3D Torus Orange Gradient */}
            <linearGradient id="orangeTorus" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffaa40" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>

            {/* 3D Torus Blue Gradient */}
            <linearGradient id="blueTorus" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5b8bf7" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            {/* Drop shadow filter for 3D realism */}
            <filter id="ringShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.22" />
            </filter>

            {/* Disc Shadow */}
            <filter id="discShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.25" />
            </filter>

            {/* Disc Inner Highlight */}
            <radialGradient id="discGrad" cx="45%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="85%" stopColor="#f4f4f5" />
              <stop offset="100%" stopColor="#e4e4e7" />
            </radialGradient>
          </defs>

          {/* Top-Left Red Ring (Return Enhancer) */}
          <circle
            cx="145"
            cy="135"
            r="68"
            stroke="url(#redTorus)"
            strokeWidth="24"
            fill="none"
            filter="url(#ringShadow)"
          />

          {/* Top-Right Orange Ring (Cost Saver) */}
          <circle
            cx="255"
            cy="135"
            r="68"
            stroke="url(#orangeTorus)"
            strokeWidth="24"
            fill="none"
            filter="url(#ringShadow)"
          />

          {/* Bottom Blue Ring (Investment Opportunity Enabler) */}
          <circle
            cx="200"
            cy="215"
            r="68"
            stroke="url(#blueTorus)"
            strokeWidth="24"
            fill="none"
            filter="url(#ringShadow)"
          />

          {/* Labels for each quadrant */}
          {/* Return Enhancer */}
          <text
            x="145"
            y="125"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="12.5"
            fontWeight="700"
            fontFamily="inherit"
          >
            <tspan x="145" dy="0">Return</tspan>
            <tspan x="145" dy="16">Enhancer</tspan>
          </text>

          {/* Cost Saver */}
          <text
            x="255"
            y="125"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="12.5"
            fontWeight="700"
            fontFamily="inherit"
          >
            <tspan x="255" dy="0">Cost</tspan>
            <tspan x="255" dy="16">Saver</tspan>
          </text>

          {/* Investment Opportunity Enabler */}
          <text
            x="200"
            y="225"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="11.5"
            fontWeight="700"
            fontFamily="inherit"
          >
            <tspan x="200" dy="0">Investment</tspan>
            <tspan x="200" dy="15">Opportunity</tspan>
            <tspan x="200" dy="15">Enabler</tspan>
          </text>

          {/* Center Overlap Disc: ROI */}
          <circle
            cx="200"
            cy="158"
            r="38"
            fill="url(#discGrad)"
            filter="url(#discShadow)"
          />
          <text
            x="200"
            y="166"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="19"
            fontWeight="900"
            letterSpacing="2"
            fontFamily="inherit"
          >
            ROI
          </text>
        </svg>
      </div>
    </div>
  );
};

export default DeepBusinessImmersionDiagram;
