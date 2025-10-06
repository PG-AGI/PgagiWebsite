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
  { id: 1, name: "VivekJyothi Bhowmik", role: "Founder", image: "/assets/team/member1.png" },
  { id: 2, name: "ShibaJyothi Bhowmik", role: "Managing Director", image: "/assets/team/member2.png" },
  { id: 3, name: "Tanvi Sharma", role: "Pre Sales Executive", image: "/assets/team/member3.png" },
  { id: 4, name: "Praneeth Ram", role: "AI/ML Engineer", image: "/assets/team/member4.png" },
  { id: 4, name: "Javeriya Shaik", role: "Hr Executive", image: "/assets/team/member5.png" },
  { id: 5, name: "Rohan Sonkar", role: "Graphic Designer & Video Editor", image: "/assets/team/member6.png" },
  { id: 6, name: "Nishmitha", role: "QA Engineer", image: "/assets/team/member7.png" },
  { id: 7, name: "Abhinav", role: "Senior AI Engineer", image: "/assets/team/member8.png" },
  { id: 8, name: "Sahil Sinha", role: "SDE-2", image: "/assets/team/member9.png" },
  { id: 9, name: "Himanshu Mishra", role: "SDE-1", image: "/assets/team/member10.png" },
  // { id: 10, name: "Frank Green", role: "Backend Dev", image: "/assets/team/member10.png" },
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
              whileHover={{ opacity: 0.5 }}
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
