"use client";

import Image from "next/image";
import styles from "./navigation.module.scss";
import Link from "next/link";
import TransitionLink from "../TransitionLink";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ContactUsForm from "./contactUsForm";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [navbarVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showGlassEffect, setShowGlassEffect] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowGlassEffect(scrollTop > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen, isMobile]);

  return (
    <nav className={clsx(
      styles.navigation,
      showGlassEffect && styles.glassEffect,
      !navbarVisible && styles.navHidden
    )}>
      <div className={clsx(styles.nav, isMenuOpen && styles.open)}>
        <TransitionLink className={styles.logo} href="/" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/landing/PGAGI-logo.png"
            alt="PGAGI Logo"
            width={60}
            height={60}
            priority
          />
          <p>PG-AGI</p>
        </TransitionLink>

        {/* Links Container */}
        <div className={clsx(styles.links, isMenuOpen && styles.open)}>
          <TransitionLink href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </TransitionLink>
          <TransitionLink href="/aboutUs" onClick={() => setIsMenuOpen(false)}>
            About Us
          </TransitionLink>

          <div className={styles.whatWeDo}>
            <div className={styles.solutionsLink}>
              <a>Solutions</a>
              <ChevronDown size={14} />
            </div>
            {/* Dropdown would go here if needed, but and screenshot 2 just shows the arrow */}
          </div>

          <TransitionLink href="/case-studies" onClick={() => setIsMenuOpen(false)}>
            Case studies
          </TransitionLink>
          <TransitionLink href="/whatwethink" onClick={() => setIsMenuOpen(false)}>
            Blogs
          </TransitionLink>
          <TransitionLink href="/Career" onClick={() => setIsMenuOpen(false)}>
            Careers
          </TransitionLink>

          {/* Mobile-only Contact Button inside the menu */}
          {isMobile && (
            <button className={styles.mobileContact} onClick={() => {
              window.open("https://calendly.com/vivek-_ou/30min", "_blank");
              setIsMenuOpen(false);
            }}>
              Get in touch
              <ArrowRight size={16} />
            </button>
          )}
        </div>

        {/* Hamburger */}
        <div
          className={clsx(styles.hamburger, isMenuOpen && styles.open)}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isModalOpen && <ContactUsForm onClose={() => setIsModalOpen(false)} />}
    </nav>
  );
}
