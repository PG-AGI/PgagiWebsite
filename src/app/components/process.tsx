"use client";
import { ArrowUpRight } from "lucide-react";
import styles from "./process.module.scss";
import Divider from "./Divider";
import Image from "next/image";
import { motion } from "framer-motion"; // ✨ import motion

// Images
// import initialConsultation from "../../../public/initialCinsoltation.png";
// import Strategic from "../../../public/Strategic.png";
// import code from "../../../public/code.png";

// Steps Data
const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We kick things off with a quick discovery call to understand your product idea, goals, and user needs.",
    image: null,
    reverse: false,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We map out features, prioritize what to build first, and align the roadmap around fast validation and clear outcomes.",
    image: null,
    reverse: true,
  },
  {
    number: "03",
    title: "Code",
    description:
      "We use industry-standard AI tools like Lovable and Cursor to write clean, scalable code faster.",
    image: null,
    reverse: false,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Once launched, your product is ready to test with users, pitch to investors, or go to market — with support from our team along the way.",
    image: null, // 🚫 No image for Launch
    reverse: true,
  },
];

type StepSectionProps = {
  number: string;
  title: string;
  description: string;
  image: any;
  reverse?: boolean;
};

// Step Component
function StepSection({
  number,
  title,
  description,
  image,
  reverse,
}: StepSectionProps) {
  const isLaunchStep = number === "04";

  return (
    <motion.div
      className={`${styles.step} ${
        reverse && !isLaunchStep ? styles.reverse : ""
      } ${isLaunchStep ? styles.launchStep : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={styles.stepText}
        initial={{ x: reverse ? 50 : -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className={styles.stepNumber}>{number}</h2>
        <p className={styles.stepTitle}>{title}</p>
        <span className={styles.stepDesc}>{description}</span>
      </motion.div>

      {image && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className={styles.stepImage}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

// Main Process Component
const Process = () => {
  return (
    <motion.div
      className={styles.processContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.card}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className={styles.leftHeader}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badge}>Our Process</span>
            <h1 className={styles.title}>Move at Startup Speed</h1>
          </motion.div>

          <motion.div
            className={styles.rightHeader}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.subtitle}>
              Our 4-step process is built for momentum. We keep it lean,
              focused, and validation-ready so you can launch without delays.
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.button}
            >
              Book a Slot
              <span className={styles.iconWrapper}>
                <ArrowUpRight size={16} color="black" />
              </span>
            </motion.button>
          </motion.div>
        </div>

        <Divider />

        {/* Steps Loop */}
        {steps.map((step) => (
          <StepSection key={step.number} {...step} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Process;