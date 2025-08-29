"use client";
import { Percent, Plus } from "lucide-react";
import styles from "./StatsSection.module.scss";
import person1 from "../../../public/person1.png";
import person2 from "../../../public/person2.png";
import person3 from "../../../public/person3.png";
import person4 from "../../../public/person4.png";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* Stats */}
        <div className={styles.statsContainer}>
          {/* Top Row */}
          <div className={styles.statsRow}>
            {/* Launched Projects */}
            <div className={styles.card}>
              <h3>Launched Projects</h3>
              <div className={styles.divider}></div>
              <div className={styles.stat}>
                <h2 className={styles.relativeNum}>
                  75 <Plus className={styles.plusIcon} strokeWidth={2} />
                </h2>
                <span>Projects were launched successfully since 2008.</span>
              </div>
            </div>

            {/* Client Satisfaction */}
            <div className={styles.card}>
              <h3>Client Satisfaction</h3>
              <div className={styles.divider}></div>
              <div className={styles.stat}>
                <h2 className={styles.percent}>
                  98
                  <span className={styles.icon}>
                    <Percent size={16} strokeWidth={3} color="black" />
                  </span>
                </h2>
                <span>Percentage of our fully satisfied clients.</span>
              </div>
            </div>
          </div>

          {/* Year of Establishment */}
          <div className={styles.yearCard}>
            <h3>Year of Establishment</h3>
            <div className={styles.divider}></div>
            <div className={styles.yearContent}>
              <span>
                The year the two founders launched their first project:{" "}
                <strong>"Sonora"</strong> website for an IT startup.
              </span>
              <h2>2008</h2>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={styles.teamWrapper}>
          <div className={styles.teamIntro}>
            <div className={styles.teamLeft}>
              <h2>Team of Pilots</h2>

              <div className={styles.topRow}>
                <div className={styles.countCircle}>
                  32
                  <Plus size={14} color="black" className={styles.miniPlus} />
                </div>
                <Image src={person1} alt="Person1" width={40} height={40} />
                <Image src={person2} alt="Person2" width={40} height={40} />
              </div>

              <div className={styles.middleRow}>
                <Image src={person3} alt="Person3" width={40} height={40} />
                <Image src={person4} alt="Person4" width={40} height={40} />
                <Image src={person4} alt="Person5" width={40} height={40} />
              </div>
            </div>

            <p className={styles.teamDescription}>
              <span style={{ color: "rgba(104,105,99,1)" }}>
                {" "}
                We’re a full-service agency
              </span>{" "}
              driven by strategy, design, and technology. From brand foundations
              to fully developed digital products, we create work that doesn’t
              just look good:{" "}
              <span style={{ color: "rgba(104, 105, 99, 1)" }}>
                it performs, connects, and endures.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
