"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/app/aboutUs/office.module.scss";

const officeImages = [
  "/assets/office/IMG_8883.jpg",
  "/assets/office/IMG_8884.jpg",
  "/assets/office/IMG_8889.jpg",
  "/assets/office/IMG_8891.jpg",
  "/assets/office/IMG_8901.jpg",
  "/assets/office/IMG_8906.jpg",
  "/assets/office/IMG_8907.jpg",
  "/assets/office/IMG_8912.jpg",
  "/assets/office/IMG_8914.jpg",
  "/assets/office/IMG_8916.jpg",
  "/assets/office/IMG_8994.jpg",
  "/assets/office/IMG_9008.jpg",
  "/assets/office/IMG_9015.jpg",
  "/assets/office/IMG_9016.jpg",
  "/assets/office/IMG_9017.jpg",
  "/assets/office/IMG_9018.jpg",
  "/assets/office/IMG_9019.jpg",
  "/assets/office/IMG_9034.jpg",
  "/assets/office/IMG_9035.jpg",
  "/assets/office/IMG_9036.jpg",
];

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
        {officeImages.map((src, i) => {
          const tileClass =
            i % 6 === 0
              ? styles.tallTile
              : i % 6 === 1
                ? styles.wideTile
                : i % 6 === 2
                  ? styles.smallTile
                  : i % 6 === 3
                    ? styles.tallTile
                    : i % 6 === 4
                      ? styles.smallTile
                      : styles.wideTile;

          return (
            <div
              key={src}
              className={`${styles.gridItem} ${tileClass}`}
            >
              <Image
                src={src}
                alt={`Office view ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className={styles.image}
                priority={i < 2}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OfficeSection;