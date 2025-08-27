"use client";

import Image from "next/image";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ContactUsForm from "./contactUsForm";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Home,
  Info,
  Layers,
  Users,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const BLOGS = "/whatwethink";
  const ABOUT = "/aboutUs";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <motion.nav
      className={clsx(styles.navigation, isScrolled && styles.scrolled)}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={clsx(styles.nav, isMenuOpen && styles.open)}>
        {/* Logo */}
        <Link className={styles.logo} href="/">
          <Image
            src="/landing/PGAGI-logo.png"
            alt="PGAGI Logo"
            width={35}
            height={35}
          />
          <p style={{ margin: "0px" }}>PG-AGI</p>
        </Link>

        {/* Centered Desktop Links */}
        {!isMobile && (
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href={ABOUT}>About Us</Link>
            <Link href="/expertise">Expertise</Link>
            <Link href="/projects">Projects</Link>
            <Link href={BLOGS}>Blogs</Link>
            <Link href="/Career">Careers</Link>
          </div>
        )}

        {/* Contact Btn Desktop */}
        {!isMobile && (
          <motion.button
            className={styles.contact}
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get in touch</span>
            <ArrowRight size={16} />
          </motion.button>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <motion.div
            className={clsx(styles.hamburger, isMenuOpen && styles.open)}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <span
              className={styles.closeButton}
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={28} />
            </span>

            <div className={styles.mobileLinks}>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Home size={18} /> Home
              </Link>
              <Link href={ABOUT} onClick={() => setIsMenuOpen(false)}>
                <Info size={18} /> About Us
              </Link>
              <Link href="/expertise" onClick={() => setIsMenuOpen(false)}>
                <Layers size={18} /> Expertise
              </Link>
              <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
                <Briefcase size={18} /> Projects
              </Link>
              <Link href={BLOGS} onClick={() => setIsMenuOpen(false)}>
                <FileText size={18} /> Blogs
              </Link>
              <Link href="/Career" onClick={() => setIsMenuOpen(false)}>
                <Users size={18} /> Careers
              </Link>
            </div>

            <motion.button
              className={styles.mobileContact}
              whileHover={{ x: 5 }}
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
            >
              Get in touch <ArrowRight size={16} strokeWidth={2} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ContactUsForm onClose={() => setIsModalOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
