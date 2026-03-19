"use client";
import TransitionLink from "./TransitionLink";
import { socialList } from "@/utils/constants";
import styles from "./footer.module.scss";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

const getSocialIcon = (url: string, alt: string): IconType => {
  const source = `${url} ${alt}`.toLowerCase();

  if (source.includes("linkedin")) return FaLinkedin;
  if (source.includes("instagram")) return FaInstagram;
  if (source.includes("youtube")) return FaYoutube;
  if (source.includes("x.com") || source.includes("twitter")) return FaXTwitter;

  return FaLinkedin;
};

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
              {/* Company Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Company</h6>
                <ul className={styles.linkList}>
                  <li>
                    <TransitionLink href="/aboutUs" className={styles.link}>
                      About Us 
                    </TransitionLink>
                  </li>
                </ul>
                <div className={styles.socialLinks}>
                  {socialList.map((social) => {
                    const SocialIcon = getSocialIcon(social.url, social.alt);

                    return (
                      <a
                        key={social.alt}
                        href={social.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={social.alt}
                      >
                        <SocialIcon className={styles.socialIcon} aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Services Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>Services</h6>
                <ul className={styles.linkList}>
                  <li>
                    <TransitionLink
                      href="/expertise#section-1"
                      className={styles.link}
                    >
                      AI Research 
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/expertise#section-2"
                      className={styles.link}
                    >
                      AI Architecture 
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/expertise#section-3"
                      className={styles.link}
                    >
                      AI Mobile App Development 
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/expertise#section-4"
                      className={styles.link}
                    >
                      AI SaaS Development 
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
                      Blog
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/whatwethink#ainews"
                      className={styles.link}
                    >
                      News 
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/whatwethink#case-studies"
                      className={styles.link}
                    >
                      Case studies
                    </TransitionLink>
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
          <span className={styles.desktopText}>
            <span className={styles.lightWord}>Playing</span>{" "}
            <span className={styles.accentWord}>God</span>
            <br />
            <span className={styles.lightWord}>with</span>{" "}
            <span className={styles.accentWord}>AGI</span>
          </span>
          <span className={styles.mobileText}>
            <span className={styles.lightWord}>Playing</span>{" "}
            <span className={styles.accentWord}>God</span>
            <br />
            <span className={styles.lightWord}>with</span>{" "}
            <span className={styles.accentWord}>AGI</span>
          </span>
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
                Terms of Service 
              </TransitionLink>
              <TransitionLink href="#privacy" className={styles.legalLink}>
                Privacy Policy 
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
