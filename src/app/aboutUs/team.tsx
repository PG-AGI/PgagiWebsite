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
  { id: 1, name: "Vivekjyoti Bhowmik", role: "Founder", image: "/assets/team/Vivekjyoti Bhowmik.png" },
  { id: 2, name: "Shibajyoti Bhowmik", role: "Managing Director", image: "/assets/team/Shibajyoti Bhowmik.png" },
  { id: 3, name: "Pratik Hegde", role: "Operational Head", image: "/assets/team/PRATIK.png" },
  { id: 4, name: "Pooja Jain", role: "HR Manager", image: "/assets/team/pooja-jain.jpg" },
  { id: 5, name: "Javeriya Shaik", role: "HR Generalist", image: "/assets/team/javeriya-shaik.png" },
  { id: 6, name: "Deb Dey", role: "Accountant", image: "/assets/team/deb-dey.jpg" },
  { id: 7, name: "Abhishek Khatri", role: "AI/ML", image: "/assets/team/abhishek-khatri.png" },
  { id: 8, name: "Bibin Vinod", role: "Golang Developer", image: "/assets/team/bibin-vinod.jpg" },
  { id: 9, name: "Himanshu Mishra", role: "SDE", image: "/assets/team/Himanshu.png" },
  { id: 10, name: "Arav Prajapati", role: "SDE", image: "/assets/team/arav-prajapati.png" },
  { id: 11, name: "Aayush Soni", role: "DevOps Engineer", image: "/assets/team/aayush-soni.png" },
  { id: 12, name: "Prasan Vibhuti", role: "QA Tester", image: "/assets/team/prasan-vibhuti.png" },
  { id: 13, name: "Airaad Sheikh", role: "SDE", image: "/assets/team/airaad-sheikh.jpeg" },

  { id: 14, name: "Hemanth Terli", role: "AI/ML", image: "/assets/team/hemanth-terli.png" },
  { id: 15, name: "Rohan Mahajan", role: "AI/ML", image: "/assets/team/rohan-mahajan.png" },
  { id: 16, name: "Jayesh Pandey", role: "AI/ML", image: "/assets/team/jayesh-pandey.jpg" },
  { id: 17, name: "Mradul Gandhi", role: "SDE", image: "/assets/team/mradul-gandhi.png" },
  { id: 18, name: "Shreya S Acharya", role: "QA", image: "/assets/team/shreya-acharya.jpg" },
  { id: 19, name: "Hemanath Kumar R", role: "AI/ML", image: "/assets/team/hemanath-kumar-r.png" },
  { id: 20, name: "Saksham Verma", role: "AI/ML", image: "/assets/team/Saksham-verma.png" },
  { id: 21, name: "Amit Verma", role: "AI/ML", image: "/assets/team/Amit.jpeg" },
  { id: 22, name: "Ayush Sahu", role: "SDE", image: "/assets/team/ayush-github-photo.jpg" },
  { id: 23, name: "Divyansh Mishra", role: "SDE", image: "/assets/team/Divyansh.png" },
  { id: 24, name: "Sahil Nikalje", role: "SDE", image: "/assets/team/Sahil Nikalje PGAGI.png" },



];


const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {/* <span className={styles.aboutLabel}>{'// Meet Our Team'}</span> */}
          <h2 className={styles.description}>Who We Are?</h2>
          <p className={styles.summary}>
            We&apos;re a dynamic team of <b>40+ innovators</b>, united by a shared passion and diverse perspectives.
            Together, we create, collaborate, and bring bold ideas to life.
          </p>

          <div className={styles.metaRow}>
            <div className={styles.teamMeta}>
              <span className={styles.teamLabel}>The PGAGI Crew</span>
              <span className={styles.teamCount}>
                <svg
                  className={styles.teamIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M16.5 20.25c0-2.485-2.01-4.5-4.5-4.5s-4.5 2.015-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.75 19.5c0-1.933-1.234-3.618-3.02-4.086"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.27 15.414c-1.786.468-3.02 2.153-3.02 4.086"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>40+</span>
              </span>
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
