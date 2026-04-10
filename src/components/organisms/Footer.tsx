"use client";
import TransitionLink from "@/components/atoms/TransitionLink";
import styles from "@/styles/components/organisms/footer.module.scss";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";
import ROUTES from "@/constants/routes";
import footerText from "@/constants/uiText/footer.json";

const footerSocialLinks = [
  { alt: "X", url: "https://x.com/PlayingGodAGI" },
  {
    alt: "LinkedIn",
    url: "https://www.linkedin.com/company/pg-agi/posts/?feedView=all",
  },
  { alt: "Instagram", url: "https://www.instagram.com/pg_agi_/" },
  { alt: "YouTube", url: "https://www.youtube.com/@PG-AGI/videos" },
];

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
                <h6 className={styles.columnHeader}>{footerText.companyHeader}</h6>
                <ul className={styles.linkList}>
                  <li>
                    <TransitionLink href={ROUTES.ABOUT_US} className={styles.link}>
                      {footerText.links.aboutUs}
                    </TransitionLink>
                  </li>
                </ul>
                <div className={styles.socialLinks}>
                  {footerSocialLinks.map((social) => {
                    const SocialIcon = getSocialIcon(social.url, social.alt);

                    return (
                      <a
                        key={social.alt}
                        href={social.url}
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
                <div className={styles.govLogoWrap}>
                  <Image
                    src="/assets/gov-login-img-footer.png"
                    alt="Government registration logo"
                    width={160}
                    height={38}
                    className={styles.govLogo}
                  />
                </div>
              </div>

              {/* Services Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>{footerText.servicesHeader}</h6>
                <ul className={styles.linkList}>
                  <li>
                    <TransitionLink
                      href={ROUTES.EXPERTISE_SECTION(1)}
                      className={styles.link}
                    >
                      {footerText.links.aiResearch}
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href={ROUTES.EXPERTISE_SECTION(2)}
                      className={styles.link}
                    >
                      {footerText.links.aiArchitecture}
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href={ROUTES.EXPERTISE_SECTION(3)}
                      className={styles.link}
                    >
                      {footerText.links.aiMobileDevelopment}
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href={ROUTES.EXPERTISE_SECTION(4)}
                      className={styles.link}
                    >
                      {footerText.links.aiSaasDevelopment}
                    </TransitionLink>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className={styles.navColumn}>
                <h6 className={styles.columnHeader}>{footerText.resourcesHeader}</h6>
                <ul className={styles.linkList}>
                  <li>
                    <TransitionLink
                      href={ROUTES.WHAT_WE_THINK_BLOGS}
                      className={styles.link}
                    >
                      {footerText.links.blog}
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href={ROUTES.WHAT_WE_THINK_AINEWS}
                      className={styles.link}
                    >
                      {footerText.links.news}
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href={ROUTES.WHAT_WE_THINK_CASE_STUDIES}
                      className={styles.link}
                    >
                      {footerText.links.caseStudies}
                    </TransitionLink>
                  </li>
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className={styles.newsletterSection}>
                <h6 className={`${styles.columnHeader} ${styles.addressText}`}>
                  <p className={styles.columnHeader}>{footerText.addressLabel}</p>{footerText.addressText}
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.backgroundText}>
          <span className={styles.desktopText}>
            <span className={styles.lightWord}>{footerText.backgroundLine1Word1}</span>{" "}
            <span className={styles.accentWord}>{footerText.backgroundLine1Word2}</span>
            <br />
            <span className={styles.lightWord}>{footerText.backgroundLine2Word1}</span>{" "}
            <span className={styles.accentWord}>{footerText.backgroundLine2Word2}</span>
          </span>
          <span className={styles.mobileText}>
            <span className={styles.lightWord}>{footerText.backgroundLine1Word1}</span>{" "}
            <span className={styles.accentWord}>{footerText.backgroundLine1Word2}</span>
            <br />
            <span className={styles.lightWord}>{footerText.backgroundLine2Word1}</span>{" "}
            <span className={styles.accentWord}>{footerText.backgroundLine2Word2}</span>
          </span>
        </div>
        {/* Bottom section with copyright, legal links, and background text */}
        <div className={styles.bottomSection}>
          {/*Background watermark text now inside bottomSection */}
          <div className={styles.bottomContainer}>
            <div className={styles.copyright}>
              <p>{footerText.copyright}</p>
            </div>
            <div className={styles.legalLinks}>
              <TransitionLink href="#terms" className={styles.legalLink}>
                {footerText.terms}
              </TransitionLink>
              <TransitionLink href="#privacy" className={styles.legalLink}>
                {footerText.privacy}
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
