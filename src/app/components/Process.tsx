"use client";
import React from "react";
import { ArrowUpRight, Sparkles, Target, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Divider from "./Divider";
import styles from "./process.module.scss";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    desc: "We kick things off with a quick discovery call to understand your product idea, goals, and user needs.",
    icon: <Sparkles size={28} />,
  },
  {
    number: "02",
    title: "Strategy",
    desc: "We map out features, prioritize what to build first, and align the roadmap around fast validation and clear outcomes.",
    icon: <Target size={28} />,
  },
  {
    number: "03",
    title: "Code",
    desc: "We use industry-standard AI tools like Lovable and Cursor to write clean, scalable code faster.",
    icon: <Code2 size={28} />,
  },
  {
    number: "04",
    title: "Launch",
    desc: "Once launched, your product is ready to test with users and scale. We support you through feedback and iteration.",
    icon: <Rocket size={28} />,
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.left}>
            <span className={styles.tag}>Our Process</span>
            <h2 className={styles.title}>Move at Startup Speed 🚀</h2>
          </div>
          <div className={styles.right}>
            <p className={styles.desc}>
              Our 4-step process is built for momentum. We keep it lean,
              focused, and validation-ready so you can launch without delays.
            </p>
            <motion.button
              className={styles.cta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a slot
              <span className={styles.iconWrapper}>
                <ArrowUpRight size={16} color="black" strokeWidth={3} />
              </span>
            </motion.button>
          </div>
        </div>

        <Divider />

        {/* Steps */}
        <div className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconCircle}>{step.icon}</div>
              <h1 className={styles.stepNumber}>{step.number}</h1>
              <h2 className={styles.stepTitle}>{step.title}</h2>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
// test-2
