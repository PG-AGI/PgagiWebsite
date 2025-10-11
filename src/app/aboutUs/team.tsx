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
  // { id: 1, name: "VivekJyothi Bhowmik", role: "Founder", image: "/assets/team/member1.png" },
  // { id: 2, name: "ShibaJyothi Bhowmik", role: "Managing Director", image: "/assets/team/member2.png" },
  // { id: 3, name: "Tanvi Sharma", role: "Pre Sales Executive", image: "/assets/team/member3.png" },
  // { id: 4, name: "Praneeth Ram", role: "AI/ML Engineer", image: "/assets/team/member4.png" },
  // { id: 4, name: "Javeriya Shaik", role: "Hr Executive", image: "/assets/team/member5.png" },
  // { id: 5, name: "Rohan Sonkar", role: "Graphic Designer & Video Editor", image: "/assets/team/member6.png" },
  // { id: 6, name: "Nishmitha", role: "QA Engineer", image: "/assets/team/member7.png" },
  // { id: 7, name: "Abhinav", role: "Senior AI Engineer", image: "/assets/team/member8.png" },
  // { id: 8, name: "Sahil Sinha", role: "SDE-2", image: "/assets/team/member9.png" },
  // { id: 9, name: "Himanshu Mishra", role: "SDE-1", image: "/assets/team/member10.png" },
  // { id: 10, name: "Frank Green", role: "Backend Dev", image: "/assets/team/member10.png" },
  { id: 1, name: "VivekJyothi Bhowmik", role: "Founder", image: "/assets/team/member1.png" },
  { id: 2, name: "ShibaJyothi Bhowmik", role: "Managing Director", image: "/assets/team/member2.png" },
  { id: 3, name: "Pratik Hegde", role: "Founding Engineer", image: "/assets/team/PRATIK.png" },
  { id: 4, name: "Abhinav", role: "Founding Engineer", image: "/assets/team/member8.png" },
  { id: 5, name: "Sahil Sinha", role: "Founding Engineer", image: "/assets/team/member9.png" },
  { id: 6, name: "Pooja Jain", role: "HR Manager", image: "/assets/team/3f1b3d45-eabe-4788-84d9-d6e8ce6eb2c1-modified.jpg" },
  { id: 7, name: "Javeriya Shaik", role: "Hr Executive", image: "/assets/team/member5.png" },
  { id: 8, name: "Nishmitha", role: "QA Engineer", image: "/assets/team/member7.png" },
  { id: 9, name: "Abhishek Khatri", role: "AI/ML Engineer", image: "/assets/team/WhatsApp Image 2025-10-07 at 11.24.18_13618cfe-modified.jpg" },
  { id: 10, name: "Kulwnant Singh", role: "SDE-1", image: "/assets/team/IMG_1890-modified.jpg" },
  { id: 11, name: "Rohan Sonkar", role: "Graphic Designer & Video Editor", image: "/assets/team/member6.png" },
  { id: 12, name: "Himanshu Mishra", role: "SDE-1", image: "/assets/team/member10.png" },
  { id: 13, name: "Praneeth Ram", role: "AI/ML Engineer", image: "/assets/team/member4.png" },
  { id: 14, name: "Tanvi Sharma", role: "Pre Sales Executive", image: "/assets/team/2.png" },
  { id: 15, name: "Deb Dey", role: "Account Manager", image: "/assets/team/deb.png" },

];


const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
        <span className={styles.aboutLabel}>{'// Meet Our Team'}</span>
          <h2 className={styles.description}>
          We&apos;re a dynamic team of <b>45+ innovators</b>, united by a shared passion and diverse perspectives. Together, we create, collaborate, and bring bold ideas to life.
          {/* We&apos;re a dynamic team of <b>35 innovators</b>, united by a shared passion and diverse perspectives. Together, we create, collaborate, and bring bold ideas to life. */}
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
              whileHover={{ scale: 1.03 }} // keep image zoom effect
              transition={{ duration: 0.3 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className={styles.memberImage}
              />
              {/* Overlay is now a plain div */}
              <div className={styles.overlay}>
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            </motion.div>
        ))}

        {/* Testimonial card */}
        {/* <motion.div
        {/* <motion.div
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
        </motion.div> */}
        {/* </motion.div>  */}
      </div>
    </section>
  );
};

export default Team;
