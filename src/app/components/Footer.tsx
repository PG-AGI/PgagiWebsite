"use client"
import Image from "next/image";
import Link from "next/link";
import TransitionLink from "./TransitionLink";
import { links, socialList, services } from "@/utils/constants";
import styles from "./footer.module.scss";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Large background watermark text */}
      <div className={styles.backgroundText}>Playing god{'\n'}with AGI</div>
      
      {/* Main content container */}
      <div className={styles.contentContainer}>
        {/* Top section with navigation */}
        <div className={styles.topSection}>
          <div className={styles.container}>
            {/* Navigation and Contact */}
            <div className={styles.navigationSection}>
              {/* Services Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Services</h6>
                <ul className={styles.linkList}>
                  <li><TransitionLink href="/expertise#section-1" className={styles.link}>AI Research ↗</TransitionLink></li>
                  <li><TransitionLink href="/expertise#section-2" className={styles.link}>AI SAAS Development ↗</TransitionLink></li>
                  <li><TransitionLink href="/expertise#section-3" className={styles.link}>AI Mobile App Development ↗</TransitionLink></li>
                  <li><TransitionLink href="/expertise#section-4" className={styles.link}>Integrating AI in Existing Workflows ↗</TransitionLink></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Resources</h6>
                <ul className={styles.linkList}>
                  <li><TransitionLink href="/whatwethink#blogs" className={styles.link}>Blogs ↗</TransitionLink></li>
                  <li><TransitionLink href="/ainews" className={styles.link}>News ↗</TransitionLink></li>
                  <li><TransitionLink href="/whatwethink#case-studies" className={styles.link}>Case Study ↗</TransitionLink></li>
                </ul>
              </div>

              {/* Company Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Company</h6>
                <ul className={styles.linkList}>
                  <li><TransitionLink href="/aboutUs" className={styles.link}>About Us ↗</TransitionLink></li>
                  <li><a href="https://x.com/PGAGI123?t=hAoqjn4ffAoYXjIp9yt-ug&s=09" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter ↗</a></li>
                  <li><a href="https://www.instagram.com/pgagi_ltd/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram ↗</a></li>
                  <li><a href="https://www.linkedin.com/company/pg-agi/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn ↗</a></li>
                  <li><a href="#" className={styles.link}>Youtube ↗</a></li>
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className={styles.newsletterSection}>
                <h6 className={styles.columnHeader}>Sign up for our newsletter to stay up to date</h6>
                <div className={styles.newsletterForm}>
                  <input 
                    type="email" 
                    placeholder="Your Email ID..." 
                    className={styles.emailInput}
                  />
                  <button className={styles.submitButton}>
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomContainer}>
            <div className={styles.copyright}>
              <p>©2025 All Rights Reserved by PG-AGI</p>
            </div>
            <div className={styles.legalLinks}>
              <TransitionLink href="/terms" className={styles.legalLink}>Terms of Service ↗</TransitionLink>
            
              <TransitionLink href="/privacy" className={styles.legalLink}>Privacy Policy ↗</TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
