"use client";
import React from "react";
import styles from "./process.module.scss";
import { ArrowUpRight } from "lucide-react";
import Divider from "./Divider";

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Top Header */}
        <div className={styles.header}>
          <div className={styles.left}>
            <span className={styles.tag}>Our Process</span>
            <h2 className={styles.title}>Move at Startup Speed</h2>
          </div>
          <div className={styles.right}>
            <p className={styles.desc}>
              Our 4-step process is built for momentum. We keep it lean,
              focused, and validation-ready so you can launch without delays.
            </p>
            <button className={styles.cta}>
              Book a slot
              <span className={styles.iconWrapper}>
                <ArrowUpRight size={16} color="black" strokeWidth={3} />
              </span>
            </button>
          </div>
        </div>

        <Divider />

        {/* Steps */}
        <div className={styles.step}>
          <h1 className={styles.stepNumber}>01</h1>
          <h2 className={styles.stepTitle}>Initial Consultation</h2>
          <p className={styles.stepDesc}>
            We kick things off with a quick discovery call to understand your
            product idea, goals, and user needs.
          </p>
          {/* image paste here */}
        </div>

        <div className={styles.step}>
          <h1 className={styles.stepNumber}>02</h1>
          <h2 className={styles.stepTitle}>Strategy</h2>
          <p className={styles.stepDesc}>
            We map out features, prioritize what to build first, and align the
            roadmap around fast validation and clear outcomes.
          </p>
          {/* image paste here */}
        </div>

        <div className={styles.step}>
          <h1 className={styles.stepNumber}>03</h1>
          <h2 className={styles.stepTitle}>Code</h2>
          <p className={styles.stepDesc}>
            We use industry-standard AI tools like Lovable and Cursor to write
            clean, scalable code faster.
          </p>
          {/* image paste here */}
        </div>

        <div className={styles.step}>
          <h1 className={styles.stepNumber}>04</h1>
          <h2 className={styles.stepTitle}>Launch</h2>
          <p className={styles.stepDesc}>
            Once launched, your product is ready to test with users and scale.
            We support you through feedback and iteration.
          </p>
          {/* image paste here */}
        </div>
      </div>
    </section>
  );
}
