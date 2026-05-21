"use client";

import Image from "next/image";
import styles from "@/styles/components/organisms/base/navigationPill.module.scss";
import Link from "next/link";
import TransitionLink from "@/components/atoms/TransitionLink";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ContactUsForm from "./contactUsForm";
import { ArrowRight, ChevronDown } from "lucide-react";
import ROUTES from "@/constants/routes";
import EXTERNAL_LINKS from "@/constants/externalLinks";

export default function NavigationPill() {
  const [navbarVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuSection, setMobileMenuSection] = useState<null | "main">(null);
  const [showGlassEffect, setShowGlassEffect] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  const CONTACT_URL = EXTERNAL_LINKS.CALENDLY_BOOKING;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const check = () => {
      const scrolled = (window.pageYOffset || document.documentElement.scrollTop) > 10;
      setShowGlassEffect(scrolled);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  useEffect(() => {
    let rafId: number;
    let prev = false;
    const loop = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const vh = window.innerHeight;
        const visiblePx = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
        const next = visiblePx / vh >= 0.6;
        if (next !== prev) { prev = next; setIsOverFooter(next); }
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleCloseModal = () => setIsModalOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setMobileMenuSection("main");
  };

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

  return (
    <nav
      className={clsx(
        styles.navigation,
        showGlassEffect && styles.glassEffect,
        isOverFooter && styles.overFooter
      )}
    >
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
              {mobileMenuSection === "main" && (
                <div className={styles.mastermenu}>
                  <TransitionLink href={ROUTES.HOME} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Home
                  </TransitionLink>
                  <TransitionLink href={ROUTES.ABOUT_US} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </TransitionLink>
                  <span className={`${styles.mobileMenuItem} ${styles.comingSoon}`}>
                    Solutions
                    <div className={styles.tooltip}>Coming Soon</div>
                  </span>
                  <TransitionLink href={ROUTES.PROJECTS} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Case studies
                  </TransitionLink>
                  <TransitionLink href={ROUTES.WHAT_WE_THINK_BLOGS} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Blogs
                  </TransitionLink>
                  <TransitionLink href={ROUTES.CAREER} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Careers
                  </TransitionLink>
                </div>
              )}
            </>
          ) : (
            <>
              <TransitionLink href={ROUTES.HOME} className={styles.link}>
                Home
              </TransitionLink>
              <TransitionLink href={ROUTES.ABOUT_US} className={styles.link}>
                About Us
              </TransitionLink>
              <span className={`${styles.link} ${styles.solutionsLink}`}>
                Solutions
                <ChevronDown size={14} strokeWidth={2.2} className={styles.solutionsCaret} />
              </span>
              <TransitionLink href={ROUTES.PROJECTS} className={styles.link}>
                Case studies
              </TransitionLink>
              <TransitionLink href={ROUTES.WHAT_WE_THINK_BLOGS} className={styles.link}>
                Blogs
              </TransitionLink>
              <TransitionLink href={ROUTES.CAREER} className={styles.link}>
                Careers
              </TransitionLink>
            </>
          )}
        </div>

        {isMobile && (
          <button className={styles.mobileHeaderButton} onClick={() => window.open(CONTACT_URL, "_blank")}>
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
