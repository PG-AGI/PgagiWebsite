"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { links, socialList, services } from "@/utils/constants";
import styles from "./footer.module.scss";
import logo from '../assets/logo.png';

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        setEmail('');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Background large text */}
      <div className={styles.backgroundText}>PG-AGI</div>
      
      {/* Upper Section */}
      <div className={styles.upperSection}>
        <div className={styles.container}>
          {/* Column 1 - Branding */}
          <div className={styles.brandingColumn}>
            <div className={styles.logoContainer}>
              <Image src={logo} alt="PG-AGI Logo" width={60} height={60} />
              <span className={styles.brandName}>PG-AGI</span>
            </div>
            <p className={styles.tagline}>Playing God With AGI</p>
          </div>

          {/* Column 2 - Services */}
          <div className={styles.servicesColumn}>
            <h6 className={styles.columnHeader}>Services</h6>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Generative AI Solutions ↗</a></li>
              <li><a href="#" className={styles.link}>AI-Driven Business Automation ↗</a></li>
              <li><a href="#" className={styles.link}>Ethical AI Development ↗</a></li>
              <li><a href="#" className={styles.link}>Prompt Engineering & Tuning ↗</a></li>
              <li><a href="#" className={styles.link}>AI Integration & Deployment ↗</a></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className={styles.resourcesColumn}>
            <h6 className={styles.columnHeader}>Resources</h6>
            <ul className={styles.linkList}>
              <li><Link href="/whatwethink#blogs" className={styles.link}>Blogs ↗</Link></li>
              <li><Link href="/ainews" className={styles.link}>News ↗</Link></li>
              <li><Link href="/whatwethink#case-studies" className={styles.link}>Case Study ↗</Link></li>
            </ul>
          </div>

          {/* Column 4 - Company & Contact */}
          <div className={styles.companyColumn}>
            <h6 className={styles.columnHeader}>Company</h6>
            <ul className={styles.linkList}>
              <li><Link href="/aboutUs" className={styles.link}>About Us ↗</Link></li>
              <li><a href="https://x.com/PGAGI123?t=hAoqjn4ffAoYXjIp9yt-ug&s=09" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter ↗</a></li>
              <li><a href="https://www.instagram.com/pgagi_ltd/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram ↗</a></li>
              <li><a href="https://www.linkedin.com/company/pg-agi/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn ↗</a></li>
              <li><a href="#" className={styles.link}>Youtube ↗</a></li>
            </ul>
            
            <div className={styles.contactInfo}>
              <p className={styles.contactEmail}>support@PG-AGI.com</p>
              <p className={styles.contactPhone}>+99 98234678523</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className={styles.lowerSection}>
        <div className={styles.lowerContainer}>
          <div className={styles.copyright}>
            <p>©2025 All Rights Reserved by PG-AGI</p>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/terms" className={styles.legalLink}>Terms of Service ↗</Link>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy ↗</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
