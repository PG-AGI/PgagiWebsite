"use client";

import Image from "next/image";
import styles from "@/styles/components/organisms/base/navigationPill.module.scss";
import TransitionLink from "@/components/atoms/TransitionLink";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ContactUsForm from "./contactUsForm";
import { ArrowRight } from "lucide-react";
import ROUTES from "@/constants/routes";
import EXTERNAL_LINKS from "@/constants/externalLinks";

export default function NavigationPill() {
  const [navbarVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenuSection, setMobileMenuSection] = useState<null | "main">(null);
  const [showGlassEffect, setShowGlassEffect] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  const CONTACT_URL = EXTERNAL_LINKS.CALENDLY_BOOKING;

  // ─── Glass effect on scroll ─────────────────────────────────────
  useEffect(() => {
    const check = () => {
      setShowGlassEffect(
        (window.pageYOffset || document.documentElement.scrollTop) > 10
      );
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  // ─── Footer overlap — IntersectionObserver replaces rAF loop ────
  // FIXED: Removed requestAnimationFrame loop that called
  // getBoundingClientRect() 60x/second forcing layout recalculation
  // every frame. IntersectionObserver fires only on threshold crossing.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverFooter(entry.intersectionRatio >= 0.6);
      },
      {
        threshold: [0, 0.6, 1.0],
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // ─── Mobile menu body scroll lock ───────────────────────────────
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

  const handleCloseModal = () => setIsModalOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (!prev) setMobileMenuSection("main");
      return !prev;
    });
  };

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
        {/* ── Logo ── */}
        <TransitionLink className={styles.logo} href={ROUTES.HOME}>
          <Image
            src="/landing/PGAGI-logo.png"
            alt="PGAGI Logo"
            width={60}
            height={60}
            sizes="60px"
            quality={80}
            priority
            fetchPriority="high"
          />
          <p>PG-AGI</p>
        </TransitionLink>

        <div className={styles.links}>
          {/* ── Desktop links — hidden on mobile via CSS ── */}
          {/* FIXED: Removed isMobile useState+useEffect+resize listener.
              CSS handles visibility — no hydration mismatch. */}
          <div className={styles.desktopLinks}>
            <TransitionLink href={ROUTES.HOME} className={styles.link}>
              Home
            </TransitionLink>
            <TransitionLink href={ROUTES.ABOUT_US} className={styles.link}>
              About Us
            </TransitionLink>
            <TransitionLink href={ROUTES.PROJECTS} className={styles.link}>
              Case studies
            </TransitionLink>
            <TransitionLink href={ROUTES.EXPERTISE} className={styles.link}>
              Expertise
            </TransitionLink>
            <TransitionLink href={ROUTES.CAREER} className={styles.link}>
              Careers
            </TransitionLink>
          </div>

          {/* ── Mobile menu — rendered only when open ── */}
          {isMenuOpen && (
            <div className={styles.mastermenu}>
              <TransitionLink
                href={ROUTES.HOME}
                className={styles.mobileMenuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </TransitionLink>
              <TransitionLink
                href={ROUTES.ABOUT_US}
                className={styles.mobileMenuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </TransitionLink>
              <TransitionLink
                href={ROUTES.PROJECTS}
                className={styles.mobileMenuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                Case studies
              </TransitionLink>
              <TransitionLink
                href={ROUTES.EXPERTISE}
                className={styles.mobileMenuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                Expertise
              </TransitionLink>
              <TransitionLink
                href={ROUTES.CAREER}
                className={styles.mobileMenuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </TransitionLink>
            </div>
          )}
        </div>

        {/* ── Mobile CTA — hidden on desktop via CSS ── */}
        <button
          className={clsx(styles.mobileHeaderButton, styles.mobileOnly)}
          onClick={() => window.open(CONTACT_URL, "_blank")}
        >
          Get in touch
          <ArrowRight size={14} />
        </button>

        {/* ── Hamburger ── */}
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