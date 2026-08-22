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
                        className={`${styles.socialLink} df-goal-footer-social-profile`}
                        aria-label={social.alt}
                        data-fast-goal="footer_social_profile"
                        data-df-event="footer_social_profile_click"
                        data-df-goal="footer_social_profile_click"
                      >
                        <SocialIcon className={styles.socialIcon} aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
                <div className={styles.govLogoWrap}>
                  <Image
                    src="/assets/gov-login-img.png"
                    alt="Government registration logo"
                    width={200}
                    height={56}
                    className={styles.govLogo}
                  />
                </div>
              </div>

              {/* Services Column */}
              <div className={styles.navColumn}>
                <p className={styles.columnHeader}>{footerText.servicesHeader}</p>
                <ul className={styles.linkList}>
                  <li>
                    <TransitionLink
                      href={ROUTES.EXPERTISE_VERTICAL("ai-ml")}
                      className={styles.link}
                    >
                      {footerText.links.aiEngineering}
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href={ROUTES.EXPERTISE_VERTICAL("enterprise-ai")}
                      className={styles.link}
                    >
                      {footerText.links.enterpriseAi}
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href={ROUTES.EXPERTISE_VERTICAL("ai-iot")}
                      className={styles.link}
                    >
                      {footerText.links.aiIot}
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href={ROUTES.EXPERTISE_VERTICAL("mobile-ai")}
                      className={styles.link}
                    >
                      {footerText.links.mobileAi}
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href={ROUTES.EXPERTISE_VERTICAL("ai-saas")}
                      className={styles.link}
                    >
                      {footerText.links.aiSaasPlatforms}
                    </TransitionLink>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className={styles.navColumn}>
                <p className={styles.columnHeader}>{footerText.resourcesHeader}</p>
                <ul className={styles.linkList}>
                  {/* <li>
                    <TransitionLink
                      href={ROUTES.WHAT_WE_THINK_BLOGS}
                      className={styles.link}
                    >
                      {footerText.links.blog}
                    </TransitionLink>
                  </li> */}
                  {/* <li>
                    <TransitionLink
                      href={ROUTES.WHAT_WE_THINK_AINEWS}
                      className={styles.link}
                    >
                      {footerText.links.news}
                    </TransitionLink>
                  </li> */}
                  <li>
                    <TransitionLink
                      href={ROUTES.PROJECTS}
                      className={styles.link}
                    >
                      {footerText.links.caseStudies}
                    </TransitionLink>
                  </li>
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className={styles.newsletterSection}>
                <p className={`${styles.columnHeader} ${styles.addressText}`}>
                  <span className={styles.columnHeader}>{footerText.addressLabel}</span>{footerText.addressText}
                </p>
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
