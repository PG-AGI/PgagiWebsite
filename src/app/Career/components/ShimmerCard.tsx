
"use client";

import React from "react";
import styles from "./ShimmerCard.module.scss";

const ShimmerCard: React.FC = () => {
  return (
    <div className={styles["shimmer-card"]}>
      <div className={styles["shimmer-content"]}>
        <div className={styles["shimmer-title"]}></div>
        <div className={styles["shimmer-description"]}></div>
        <div className={styles["shimmer-tags"]}>
          <div className={styles["shimmer-tag"]}></div>
          <div className={styles["shimmer-tag"]}></div>
          <div className={styles["shimmer-tag"]}></div>
          <div className={styles["shimmer-tag"]}></div>
        </div>
        <div className={styles["shimmer-button"]}></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
