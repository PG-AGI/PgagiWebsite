"use client";
import Image from "next/image";
import Link from "next/link";
import TransitionLink from "./TransitionLink";
import { links, socialList, services } from "@/utils/constants";
import styles from "./footer.module.scss";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
                  <li>
                    <TransitionLink
                      href="/expertise#section-1"
                      className={styles.link}
                    >
                      AI Research ↗
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/expertise#section-2"
                      className={styles.link}
                    >
                      AI Architecture ↗
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/expertise#section-3"
                      className={styles.link}
                    >
                      AI Mobile App Development ↗
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/expertise#section-4"
                      className={styles.link}
                    >
                      AI SaaS Development ↗
                    </TransitionLink>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Resources</h6>
                <ul className={styles.linkList}>
                  <li>
                    <TransitionLink
                      href="/whatwethink#blogs"
                      className={styles.link}
                    >
                      Blogs ↗
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/whatwethink#ainews"
                      className={styles.link}
                    >
                      News ↗
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/whatwethink#case-studies"
                      className={styles.link}
                    >
                      Case Study ↗
                    </TransitionLink>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Company</h6>
                <ul className={styles.linkList}>
                  <li>
                    <TransitionLink href="/aboutUs" className={styles.link}>
                      About Us ↗
                    </TransitionLink>
                  </li>
                  <li>
                    <a
                      href="https://x.com/PGAGI123?t=hAoqjn4ffAoYXjIp9yt-ug&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Twitter ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pgagi_ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Instagram ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/pg-agi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      LinkedIn ↗
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.link}>
                      Youtube ↗
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className={styles.newsletterSection}>
                <h6 className={`${styles.columnHeader} ${styles.addressText}`}>
                  <p className={styles.columnHeader}>Address:</p>Tech37, Plot
                  No.2-A Electronic City 2nd Phase. SY-No. 37 Part Konappana
                  Agrahara Village Begur Hobli, Bengaluru - Chennai Hwy, Taluk,
                  Bengaluru, Karnataka 560100
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.backgroundText}>
          <span className="styles.desktopText">Playing God{"\n"}with AGI</span>
          {/* <span className="styles.mobileText">Playing{'\n'}God{'\n'}with AGI</span> */}
        </div>
        {/* Bottom section with copyright, legal links, and background text */}
        <div className={styles.bottomSection}>
          {/*Background watermark text now inside bottomSection */}
          <div className={styles.bottomContainer}>
            <div className={styles.copyright}>
              <p>©2025 All Rights Reserved by PG-AGI</p>
            </div>
            <div className={styles.legalLinks}>
              <TransitionLink href="#terms" className={styles.legalLink}>
                Terms of Service ↗
              </TransitionLink>
              <TransitionLink href="#privacy" className={styles.legalLink}>
                Privacy Policy ↗
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
