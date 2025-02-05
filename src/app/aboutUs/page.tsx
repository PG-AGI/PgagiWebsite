'use client';

import Link from "next/link";
import { motion } from 'framer-motion'; // Import Framer Motion
import Navigation from "../components/base/Navigation";
import GlareBackground from "../components/base/GlareBackground";
import styles from './aboutus.module.scss'
import Footer from "../components/Footer";
import Image from "next/image";
import bg from '../assets/topFrame.png';
import bg2 from '../assets/background.png';
import box1 from '../assets/box1.png';
import box2 from '../assets/box2.png';
import { useEffect, useRef, useState } from 'react';
import { whyChoose } from "@/utils/constants";
import up from '../assets/up.png';
import down from '../assets/down.png';
import BookCallModal from "../components/base/bookCallModela";

export default function AboutUs() {

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookCall = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Framer Motion variants for animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sectionReverseVariants = {
    hidden: { opacity: 0, x: 100 }, // Start state: off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // End state: visible and centered
  };

  return (
    <div className={styles.main}>
      <Link href="/" />
      <GlareBackground />
      <Navigation />

      <motion.section
        className={styles.pageHead}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <h2>PG-AGI</h2>
          <p>Playing God With Artificial General Intelligence</p>
        </div>
        <Image src={bg} alt="" layout="fill" objectFit='cover' />
      </motion.section>

      <motion.section
        className={styles.ourVision}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.container}>
          <div className={styles.Text_container}>
            <h2>Our Vision</h2>
            <p>At PGAGI, we believe in a future where AI and human intelligence coexist in harmony, creating a smarter, faster, and better world.</p>
          </div>
          <Image className={styles.img} src={box2} alt="" layout="fill" objectFit='cover' />
        </div>
      </motion.section>

      {/* Our Mission section */}
      <motion.section
        className={styles.ourMission}
        initial="hidden"
        whileInView="visible"
        variants={sectionReverseVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.container}>
          <div className={styles.Text_container}>
            <h2>Our Mission</h2>
            <p>Empowering Innovation, Shaping Tomorrow - Transforming Businesses through Advanced near AGI Solutions.</p>
          </div>
          <Image className={styles.img} src={box1} alt="" layout="fill" objectFit='cover' />
        </div>
      </motion.section>

      <motion.section
        className={styles.ourValues}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Our Values</h2>
        <div className={styles.innovation}>
          <h3>Innovation</h3>
          <p>Constantly pushing the boundaries of what&apos;s possible with AI.</p>
          <Image className={styles.img} src={up} alt="" layout="fill" />
        </div>
        <div className={styles.collab}>
          <h3>Collaboration</h3>
          <p>Working closely with clients to achieve their goals.</p>
          <Image className={styles.img} src={down} alt="" layout="fill" />
        </div>
        <div className={styles.integrity}>
          <h3>Integrity</h3>
          <p>Upholding the highest standards of honesty and transparency.</p>
          <Image className={styles.img} src={up} alt="" layout="fill" />
        </div>
        <div className={styles.excellence}>
          <h3>Excellence</h3>
          <p>Committed to delivering the best quality in all our projects.</p>
          <Image className={styles.img} src={down} alt="" layout="fill" />
        </div>
        <div className={styles.customer}>
          <h3>Customer Focus</h3>
          <p>Ensuring client satisfaction through dedicated service and support.</p>
        </div>
      </motion.section>

      <motion.section
        className={styles.whyChooseUs}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Why Choose Us?</h2>
        <div className={styles.container}>
          {whyChoose.map((item, i) => (
            <motion.div key={i} className={styles.listItem} variants={sectionVariants}>
              <div className={styles.content}>
                <p><b>{item.title}</b>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.featured}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          <p>Harness the Power of AI</p>
          <p>for Unmatched Business Performance</p>
          <button className={styles.call} onClick={handleBookCall}>Let&apos;s Connect</button>
        </div>
        <Image className={styles.imgTag} src={bg2} alt="" layout="fill" objectFit='cover' />
        <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </motion.section>

      <Footer />
    </div>
  );
}
