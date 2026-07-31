"use client";

import React from "react";
import Image from "next/image";
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
          "/assets/office/IMG_8883.jpg",
          "/assets/office/IMG_8884.jpg",
          "/assets/office/IMG_8889.jpg",
          "/assets/office/IMG_8891.jpg",
          "/assets/office/IMG_8901.jpg",
          "/assets/office/IMG_8906.jpg",
        ].map((src, i) => (
          <div
            key={src}
            className={`${styles.item} ${i === 5 ? styles.large : ""}`}
          >
            <Image
              src={src}
              alt={`Office ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.image}
              priority={i === 5}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeSection;