"use client";
import React from "react";
import { motion } from "@/lib/motion-lite";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import styles from "@/styles/app/aboutUs/team.module.scss";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Vivek Bhowmik", role: "Founder", image: "/assets/team/member1.png" },
  { id: 2, name: "Shibajyoti Bhowmik", role: "Managing Director", image: "/assets/team/member2Shibasir.jpg" },
  { id: 3, name: "Pratik Hegde", role: "Founding Engineer", image: "/assets/team/PRATIK.png" },
  { id: 4, name: "Sahil Sinha", role: "Founding Engineer", image: "/assets/team/member9.png" },
  { id: 5, name: "Pooja Jain", role: "HR Manager", image: "/assets/team/3f1b3d45-eabe-4788-84d9-d6e8ce6eb2c1-modified.jpg" },
  { id: 6, name: "Abhishek Khatri", role: "AI Department", image: "/assets/team/ABHISHEK.jpg" },
  { id: 7, name: "Deb Dey", role: "Accounts Department", image: "/assets/team/deb.png" },
];


const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {/* <span className={styles.aboutLabel}>{'// Meet Our Team'}</span> */}
          <h2 className={styles.description}>Who We Are?</h2>
          <p className={styles.summary}>
            We&apos;re a dynamic team of <b>45+ innovators</b>, united by a shared passion and diverse perspectives.
            Together, we create, collaborate, and bring bold ideas to life.
          </p>

          <div className={styles.metaRow}>
            <div className={styles.teamMeta}>
              <span className={styles.teamLabel}>The PGAGI Crew</span>
              <span className={styles.teamCount}>40+</span>
            </div>

            <Link href={ROUTES.CAREER} className={styles.ctaButton}>
              <span>Join the Team</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {teamMembers.map((member) => (
          <motion.div key={member.id} className={styles.card} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <div className={styles.photoCell}>
              <Image
                src={member.image}
                alt={member.name}
                width={56}
                height={56}
                className={styles.memberImage}
              />
            </div>
            <div className={styles.nameCell}>
              <h4>{member.name}</h4>
            </div>
            <div className={styles.roleCell}>
              <span>{member.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
      </section>
  );
};

export default Team;
