"use client";

import Image from "next/image";
import styles from "./navigation.module.scss";
import Link from "next/link";
import TransitionLink from "../TransitionLink";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ContactUsForm from "./contactUsForm";
import { ArrowRight, Target } from "lucide-react";

export default function Navigation() {
  const [navbarVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuSection, setMobileMenuSection] = useState<
    null | "main"
  >(null);
  const BLOGS = "/whatwethink";
  const ABOUT = "/aboutUs";
  const INDUSTRIES = "/industries";

  const [isScrolled, setIsScrolled] = useState(false);
  const [showGlassEffect, setShowGlassEffect] = useState(false);

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
        style={{
          '--text-color': '#666666',
          '--text-color-inverse': '#ffffff',
        } as React.CSSProperties}
      >
        <TransitionLink className={styles.logo} href="/">
          <Image
            src="/landing/PGAGI-logo.png"
            alt="PGAGI Logo"
            width={60}
            height={60}
            priority
            sizes="60px"
          />
          <p>PG-AGI</p>
        </TransitionLink>

        <div className={styles.links}>
          {isMobile ? (
            <>
              {/* Mobile Menu Navigation */}
              {mobileMenuSection === "main" && (
                <div className={styles.mastermenu}>
                  <TransitionLink href="/" className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Home
                  </TransitionLink>
                  <TransitionLink href={ABOUT} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </TransitionLink>
                   <TransitionLink href={INDUSTRIES} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Industries
                  </TransitionLink>
                  <TransitionLink href="/expertise" className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Expertise
                  </TransitionLink>
                  <TransitionLink href="/projects" className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Projects
                  </TransitionLink>
                  <TransitionLink href={BLOGS} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Blogs
                  </TransitionLink>
                 
                  <TransitionLink href="/Career" className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                    Careers
                  </TransitionLink>
                  <button className={styles.mobileContact} onClick={() => {
                    // window.open("https://form.pgagi.in/", "_blank");   
                    window.open("https://calendly.com/vivek-_ou/30min", "_blank");                    // setIsMenuOpen(false);
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
              <TransitionLink href="/" className={styles.link}>
                Home
              </TransitionLink>
              <TransitionLink href="/aboutUs" className={styles.link}>
                About Us
              </TransitionLink>
               <TransitionLink href={INDUSTRIES} className={styles.link}>
                Industries
              </TransitionLink>
              <TransitionLink href="/expertise" className={styles.link}>
                Expertise
              </TransitionLink>
              <TransitionLink href="/projects" className={styles.link}>
                Projects
              </TransitionLink>
              <TransitionLink href="/whatwethink" className={styles.link}>
                Blogs
              </TransitionLink>
             
              <TransitionLink href="/Career" className={styles.link}>
                Careers
              </TransitionLink>

              <button className={styles.contact} onClick={() => {
                // window.open("https://form.pgagi.in/", "_blank");
                 window.open("https://calendly.com/vivek-_ou/30min", "_blank");
              }}>
                Get in touch
                <ArrowRight size={16} />
              </button>
            </>
          )}
        </div>

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
