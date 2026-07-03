"use client";

import Image from "next/image";
import styles from "@/styles/components/organisms/base/navigation.module.scss";
import TransitionLink from "@/components/atoms/TransitionLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ContactUsForm from "./contactUsForm";
import { ArrowRight } from "lucide-react";
import ROUTES from "@/constants/routes";
import EXTERNAL_LINKS from "@/constants/externalLinks";
import landingText from "@/constants/uiText/landing.json";

const MOBILE_MENU_LINKS = [
  { href: ROUTES.HOME, label: "Home" },
  { href: ROUTES.ABOUT_US, label: "About Us" },
  { href: ROUTES.PROJECTS, label: "Case Studies" },
  { href: ROUTES.EXPERTISE, label: "Expertise" },
  { href: ROUTES.CAREER, label: "Careers" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [navbarVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showGlassEffect, setShowGlassEffect] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  const CONTACT_URL = EXTERNAL_LINKS.CALENDLY_BOOKING;

  const isActive = (href: string) =>
    href === ROUTES.HOME ? pathname === href : pathname.startsWith(href);

  // ─── Announcement bar offset (home page only) ───────────────────
  const isHome = pathname === ROUTES.HOME;
  const [pastAnnouncement, setPastAnnouncement] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setPastAnnouncement(false);
      return;
    }
    const check = () => {
      setPastAnnouncement(
        (window.pageYOffset || document.documentElement.scrollTop) > 48
      );
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [isHome]);

  const offsetForBanner = isHome && !pastAnnouncement;

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
  // FIXED: Previous rAF loop called getBoundingClientRect() 60x/second
  // forcing layout recalculation every frame causing forced reflow.
  // IntersectionObserver fires only when threshold is crossed.
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
  // position:fixed + negative top freezes the page at its current scroll
  // offset (plain overflow:hidden is ignored by iOS Safari); the cleanup
  // restores the exact scroll position when the menu closes.
  useEffect(() => {
    if (!isMenuOpen) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isMenuOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Hide navigation on job detail pages
  if (pathname.startsWith("/jobs/") && pathname !== "/jobs") {
    return null;
  }

  return (
    <nav
      className={clsx(
        styles.navigation,
        isScrolled && styles.scrolled,
        showGlassEffect && styles.glassEffect,
        isOverFooter && styles.overFooter,
        offsetForBanner && styles.withBanner,
        isMenuOpen && styles.menuOpen
      )}
    >
      <div
        className={clsx(
          styles.nav,
          !navbarVisible && styles.navHidden,
          isMenuOpen && styles.open
        )}
      >
        {/* ── Logo — priority loaded for LCP ── */}
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
          <div className={styles.desktopLinks}>
            <TransitionLink href={ROUTES.HOME} className={clsx(styles.link, isActive(ROUTES.HOME) && styles.activeLink)}>
              Home
            </TransitionLink>
            <TransitionLink href={ROUTES.ABOUT_US} className={clsx(styles.link, isActive(ROUTES.ABOUT_US) && styles.activeLink)}>
              About Us
            </TransitionLink>
            <TransitionLink href={ROUTES.PROJECTS} className={clsx(styles.link, isActive(ROUTES.PROJECTS) && styles.activeLink)}>
              Case studies
            </TransitionLink>
            <TransitionLink href={ROUTES.EXPERTISE} className={clsx(styles.link, isActive(ROUTES.EXPERTISE) && styles.activeLink)}>
              Expertise
            </TransitionLink>
            <TransitionLink href={ROUTES.CAREER} className={clsx(styles.link, isActive(ROUTES.CAREER) && styles.activeLink)}>
              Careers
            </TransitionLink>
          </div>

          {isMenuOpen && (
            <div className={styles.mastermenu}>
              <div className={styles.mobileMenuLinks}>
                {MOBILE_MENU_LINKS.map(({ href, label }) => (
                  <TransitionLink
                    key={href}
                    href={href}
                    className={clsx(
                      styles.mobileMenuItem,
                      isActive(href) && styles.mobileMenuItemActive
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </TransitionLink>
                ))}
              </div>

              <button
                className={styles.mobileContact}
                onClick={() => { setIsMenuOpen(false); window.open(CONTACT_URL, "_blank"); }}
              >
                Get in touch
                <ArrowRight size={15} />
              </button>

              {/* AI×IoT vertical card — moved out of the mobile hero (it was
                  crowding the background photo) and pinned to the bottom of
                  the full-screen menu. Compact, fixed rem sizing. */}
              <article
                className={styles.menuVerticalCard}
                aria-label={landingText.verticalCard.ctaAriaLabel}
              >
                <h2 className={styles.menuCardTitle}>
                  {landingText.verticalCard.titlePrefix}{" "}
                  <span className={styles.menuCardTitleAccent}>
                    {landingText.verticalCard.titleSuffix}
                  </span>
                </h2>
                <p className={styles.menuCardDescription}>
                  {landingText.verticalCard.description}
                </p>
                <ul className={styles.menuCardCapabilities} aria-label="Capabilities">
                  {landingText.capabilities.map((label) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={styles.menuCardCta}
                  aria-label={landingText.verticalCard.ctaAriaLabel}
                >
                  <span>{landingText.verticalCard.ctaLabel}</span>
                  <ArrowRight size={14} />
                </button>
              </article>
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