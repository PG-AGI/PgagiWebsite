"use client";

import Image from "next/image";
import styles from "@/styles/components/organisms/base/navigation.module.scss";
import Link from "next/link";
import TransitionLink from "@/components/atoms/TransitionLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ContactUsForm from "./contactUsForm";
import { ArrowRight, Target } from "lucide-react";
import ROUTES from "@/constants/routes";
import EXTERNAL_LINKS from "@/constants/externalLinks";

export default function Navigation() {
  const pathname = usePathname();
  const [navbarVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuSection, setMobileMenuSection] = useState<
    null | "main"
  >(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showGlassEffect, setShowGlassEffect] = useState(false);

  const BLOGS = ROUTES.WHAT_WE_THINK;
  const ABOUT = ROUTES.ABOUT_US;
  const INDUSTRIES = "/industries";
  const CONTACT_URL = EXTERNAL_LINKS.CALENDLY_BOOKING;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle scroll to detect when past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowGlassEffect(scrollTop > 10); // glass effect after 10px scroll
    };

    handleScroll(); // Apply correct state on load
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactUs = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal...");
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setMobileMenuSection("main"); // Start with main menu in mobile view
    }
  };

  const backToMenu = () => {
    setMobileMenuSection("main");
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    };
  }, [isMenuOpen]);

  // Hide navigation on job detail pages
  if (pathname.startsWith("/jobs/") && pathname !== "/jobs") {
    return null;
  }

  return (
    <nav className={clsx(
      styles.navigation,
      isScrolled && styles.scrolled,
      showGlassEffect && styles.glassEffect
    )}>
      <div
        className={clsx(
          styles.nav,
          !navbarVisible && styles.navHidden,
          isMenuOpen && styles.open
        )}
      >
        <TransitionLink className={styles.logo} href={ROUTES.HOME}>
          <Image
            src="/landing/PGAGI-logo.png"
            alt="PGAGI Logo"
            width={60}
            height={60}
            sizes="60px"
            quality={80}
          />
          <p>PG-AGI</p>
        </TransitionLink>

        <div className={styles.links}>
          {isMobile ? (
            <>
              {/* Mobile Menu Navigation */}
              {mobileMenuSection === "main" && (
                <div className={styles.mastermenu}>
                  <TransitionLink href={ROUTES.HOME} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Home
                  </TransitionLink>
                  <TransitionLink href={ABOUT} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </TransitionLink>
                  <span className={`${styles.mobileMenuItem} ${styles.comingSoon}`}>
                    Solutions
                    <div className={styles.tooltip}>Coming Soon</div>
                  </span>
                  <TransitionLink href={ROUTES.EXPERTISE} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Expertise
                  </TransitionLink>
                  <TransitionLink href={ROUTES.PROJECTS} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Case Studies
                  </TransitionLink>
                  <TransitionLink href={BLOGS} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Blogs
                  </TransitionLink>

                  <TransitionLink href={ROUTES.CAREER} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Careers
                  </TransitionLink>
                  <button className={styles.mobileContact} onClick={() => {
                    // window.open("https://form.pgagi.in/", "_blank");   
                    window.open(CONTACT_URL, "_blank");                    // setIsMenuOpen(false);
                    // handleContactUs();
                  }}>
                    Get in touch
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Desktop Navigation */}
              <TransitionLink href={ROUTES.HOME} className={styles.link}>
                Home
              </TransitionLink>
              <TransitionLink href={ROUTES.ABOUT_US} className={styles.link}>
                About Us
              </TransitionLink>
              <span className={`${styles.link} ${styles.comingSoon}`}>
                Solutions
                <div className={styles.tooltip}>Coming Soon</div>
              </span>
              <TransitionLink href={ROUTES.EXPERTISE} className={styles.link}>
                Expertise
              </TransitionLink>
              <TransitionLink href={ROUTES.PROJECTS} className={styles.link}>
                Case Studies
              </TransitionLink>
              <TransitionLink href={ROUTES.WHAT_WE_THINK} className={styles.link}>
                Blogs
              </TransitionLink>

              <TransitionLink href={ROUTES.CAREER} className={styles.link}>
                Careers
              </TransitionLink>

              <button className={styles.contact} onClick={() => {
                // window.open("https://form.pgagi.in/", "_blank");
                window.open(CONTACT_URL, "_blank");
              }}>
                Get in touch
                <ArrowRight size={16} />
              </button>
            </>
          )}
        </div>

        {/* Mobile Header Button - appears next to hamburger */}
        {isMobile && (
          <button className={styles.mobileHeaderButton} onClick={() => {
            window.open(CONTACT_URL, "_blank");
          }}>
            Get in touch
            <ArrowRight size={14} />
          </button>
        )}

        <div
          className={clsx(styles.hamburger, isMenuOpen && styles.open)}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isModalOpen && <ContactUsForm onClose={handleCloseModal} />}
    </nav>
  );
}
