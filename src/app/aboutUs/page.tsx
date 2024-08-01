'use client';

import Link from "next/link";
import Navigation from "../components/base/Navigation";
import GlareBackground from "../components/base/GlareBackground";
import styles from './aboutus.module.scss'
import Footer from "../components/Footer";
import Image from "next/image";
import bg from '../assets/topFrame.png';
import bg2 from '../assets/background.png';
import box1 from '../assets/box1.png';
import box2 from '../assets/box2.png';
import { useRef, useState } from 'react';
import { aboutUs, topContent } from "@/utils/constants";
import up from '../assets/up.png';
import down from '../assets/down.png';
import { whyChoose } from "@/utils/constants";
import BookCallModal from "../components/base/bookCallModela";

export default function AboutUs() {
    const topRef = useRef<HTMLDivElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookCall = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
  
  return (
        
    <div className={styles.main}>
    <Link href="/"/>
    <GlareBackground/>
    <Navigation/>

    <section className={styles.pageHead}>
        <div className={styles.content}>
        <h2>PG-AGI</h2>
        <p>Playing God With Artifical General Intelligence</p>
        </div>
    <Image src={bg} alt="" layout="fill" objectFit='cover'/>
    </section>


    <section className={styles.ourVision}>
        <div className={styles.container}>
                <div className={styles.Text_container}>
                <h2>Our Vision</h2>
                <p>At PGAGI, we believe in a future
                    where AI and human intelligence 
                    coexist in harmony, creating a 
                    world that is smarter, faster,
                    and better. We are not just
                    building AI, we are shaping a future 
                    where AI is a fundamental and positive 
                            force for businesses, societies, and the planet.</p>
            </div>
            <Image className={styles.img} src={box2} alt="" layout="fill" objectFit='cover'/>
        </div>

    </section>

    <section className={styles.ourMission}>
        <div className={styles.container}>
            <div className={styles.Text_container}>
                <h2>Our Mission</h2>
                <p>Empowering Innovation, Shaping Tomorrow - Transforming
                    Businesses through Advanced near AGI Solutions.
                </p>
            </div>
            <Image className={styles.img} src={box1} alt="" layout="fill" objectFit='cover'/>
        </div>

    </section>

    <section className={styles.ourValues}>
        <h2>Our Values</h2>
        <div className={styles.innovation}>
            <h3>Innovation</h3>
            <p>Constantly pushing the boundaries of what&apos;s possible with AI.</p>
            <Image className={styles.img} src={up} alt="" layout="fill"/>
        </div>   
           <div className={styles.collab}>
            <h3>Collaboration</h3>
            <p>Working closely with clients to achieve their goals.</p>
            <Image className={styles.img} src={down} alt="" layout="fill"/>
        </div> 
      <div className={styles.integrity}>
            <h3>Integrity</h3>
            <p>Upholding the highest standards of honesty and transparency..</p>
            <Image className={styles.img} src={up} alt="" layout="fill"/>
        </div> 
        <div className={styles.excellence}>
            <h3>Excellence</h3>
            <p>Committed to delivering the best quality in all our projects.</p>
            <Image className={styles.img} src={down} alt="" layout="fill"/>
        </div> 
       <div className={styles.customer}>
            <h3>Customer Focus</h3>
            <p>Ensuring client satisfaction through dedicated service and support.</p>            
        </div>      
    </section>

    <section className={styles.whyChooseUs}>
        <h2>Why Choose Us?</h2>
        <div className={styles.container}>
        {whyChoose.map((item, i) => (
          <div key={i} className={styles.listItem}>
            <div className={styles.content}>
              <p><b>{item.title}</b>
              {item.description}</p>              
            </div>            
          </div>
        ))}
        </div>      

    </section>
    <section className={styles.featured}>
          <div className={styles.content}>
          <p>Harness the Power of AI</p>
          <p>for Unmatched Business Performance</p>
          <button className={styles.call} onClick={handleBookCall}>Let&apos;s Connect</button>
          </div>
          <Image  className={styles.imgTag} src={bg2} alt="" layout="fill" objectFit='cover'/>
          <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    <Footer/>
    </div>    
  );
}