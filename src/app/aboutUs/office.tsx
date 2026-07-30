"use client";

import React from "react";
import styles from "@/styles/app/aboutUs/office.module.scss";

const OfficeSection: React.FC = () => {
  return (
    <section className={styles.officeSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Step into our vibrant office</h2>
        <p className={styles.description}>
          We&apos;re a dynamic team of 45+ innovators, united by a shared passion and diverse perspectives.
          Together, we create, collaborate, and bring bold ideas to life.
        </p>
      </div>
      <div className={styles.gallery}>
        {[
          "/assets/office/office1.jpg",
          "/assets/office/office2.jpg",
          "/assets/office/office3.jpg",
          "/assets/office/office4.jpg",
          "/assets/office/office5.jpg",
          "/assets/office/office6.jpg",
        ].map((src, i) => (
          <div
            key={src}
            className={`${styles.item} ${i === 5 ? styles.large : ""}`}
          >
            <img src={src} alt={`Office ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeSection;