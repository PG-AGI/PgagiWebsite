"use client"
import Image from "next/image";
import Link from "next/link";
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
        {/* Top section with branding and navigation */}
        <div className={styles.topSection}>
          <div className={styles.container}>
            {/* Left side - Branding */}
            <div className={styles.brandingSection}>
              <div className={styles.logoContainer}>
                <Image src={logo} alt="PG-AGI Logo" width={60} height={60} />
                <div className={styles.brandText}>
                  <h2 className={styles.brandName}>PG-AGI</h2>
                  <p className={styles.tagline}>Playing God With AGI</p>
                </div>
              </div>
            </div>

            {/* Right side - Navigation and Contact */}
            <div className={styles.navigationSection}>
              {/* Services Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Services</h6>
                <ul className={styles.linkList}>
                  <li><Link href="/expertise#section-1" className={styles.link}>AI Research ↗</Link></li>
                  <li><Link href="/expertise#section-2" className={styles.link}>AI SAAS Development ↗</Link></li>
                  <li><Link href="/expertise#section-3" className={styles.link}>AI Mobile App Development ↗</Link></li>
                  <li><Link href="/expertise#section-4" className={styles.link}>Integrating AI in Existing Workflows ↗</Link></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Resources</h6>
                <ul className={styles.linkList}>
                  <li><Link href="/whatwethink#blogs" className={styles.link}>Blogs ↗</Link></li>
                  <li><Link href="/ainews" className={styles.link}>News ↗</Link></li>
                  <li><Link href="/whatwethink#case-studies" className={styles.link}>Case Study ↗</Link></li>
                </ul>
              </div>

              {/* Company Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Company</h6>
                <ul className={styles.linkList}>
                  <li><Link href="/aboutUs" className={styles.link}>About Us ↗</Link></li>
                  <li><a href="https://x.com/PGAGI123?t=hAoqjn4ffAoYXjIp9yt-ug&s=09" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter ↗</a></li>
                  <li><a href="https://www.instagram.com/pgagi_ltd/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram ↗</a></li>
                  <li><a href="https://www.linkedin.com/company/pg-agi/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn ↗</a></li>
                  <li><a href="#" className={styles.link}>Youtube ↗</a></li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className={styles.contactSection}>
                <div className={styles.contactInfo}>
                  <p className={styles.contactEmail}>admin@pgagi.in</p>
                  <p className={styles.contactPhone}>+91 80-35736907</p>
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
              <Link href="/terms" className={styles.legalLink}>Terms of Service ↗</Link>
            
              <Link href="/privacy" className={styles.legalLink}>Privacy Policy ↗</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
