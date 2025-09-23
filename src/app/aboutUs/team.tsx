/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./team.module.scss";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Alice Johnson", role: "AI Engineer", image: "/assets/team/member1.jpg" },
  { id: 2, name: "Brian Smith", role: "Frontend Dev", image: "/assets/team/member1.jpg" },
  { id: 3, name: "Carla Lopez", role: "Product Designer", image: "/assets/team/member1.jpg" },
  { id: 4, name: "David Kim", role: "ML Researcher", image: "/assets/team/member1.jpg" },
  { id: 5, name: "Ella Brown", role: "Data Scientist", image: "/assets/team/member1.jpg" },
  { id: 6, name: "Frank Green", role: "Backend Dev", image: "/assets/team/member1.jpg" },
];

const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
        <span className={styles.aboutLabel}>{'// Meet Our Team'}</span>
          <h2 className={styles.description}>
            We are a global family of <b>80 thinkers and builders</b>. Spread across{" "}
            <b>10 time zones</b>, speaking <b>11 languages</b> and proudly representing{" "}
            <b>17 nationalities</b>.
          </h2>
        </div>
        <p className={styles.caption}>Our strength lies in our people.</p>
      </div>

      {/* Team Grid */}
      <div className={styles.grid}>
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className={styles.card}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className={styles.memberImage}
            />
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </motion.div>
          </motion.div>
        ))}

        {/* Testimonial card */}
        <motion.div
          className={`${styles.card} ${styles.testimonial}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.stars}>★★★★★</div>
          <p>
            Artboard understands what it means to design for a brand where every detail
            matters. Their delivery perfectly aligned with our luxury positioning.
          </p>
          <h4>Isabella Moreau</h4>
          <span>Chief Brand Officer, Maison Duval</span>
          <a href="#" className={styles.link}>
            See our work →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
