"use client";
import { ArrowUpRight } from "lucide-react";
import styles from "./process.module.scss";
import Divider from "./Divider";
import Image from "next/image";
import { motion } from "framer-motion"; // ✨ import motion

// Images
import Engineering from "../../../public/Engineering_.jpg";
import Strategy from "../../../public/Strategy.jpg";
import Launch from "../../../public/Launch.jpg";
import initialConsultation from "../../../public/Initial Consultation.jpg";

// Steps Data
const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a focused discovery call to align on your product vision, goals, and user needs, setting the foundation for clear planning and initial architecture design.",
    image: initialConsultation,
    reverse: false,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We craft a comprehensive architecture and detailed proposal, secure approval, and then plan a feature-driven roadmap that prioritizes fast validation and measurable outcomes.",
    image: Strategy,
    reverse: true,
  },
  {
    number: "03",
    title: "Engineering",
    description:
      "We move from proof of concept to backend and frontend development, followed by rigorous testing, to deliver a polished MVP ready for real-world use.",
    image: Engineering,
    reverse: false,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "From deployment and user testing to go-to-market and full-scale launch, we ensure your product is market-ready and backed by our end-to-end support.",
    image: Launch, // 🚫 No image for Launch
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
  return (
    <motion.div
      className={`${styles.step} ${reverse ? styles.reverse : ""}`}
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
            width={700}
            height={300}
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
              onClick={() => {
                window.open("https://form.pgagi.in/", "_blank");
              }}
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