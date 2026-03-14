'use client'

import Image from "next/image";
import logo from '../../assets/logo.png';
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { whatWeDoLinks } from "@/utils/constants";
import ContactUsForm from "@/app/components/base/contactUsForm";

// Throttle function to limit the number of times a function is called
function throttle<T extends (...args: any[]) => void>(fn: T, wait: number) {
  let time = Date.now();
  return function (...args: Parameters<T>) {
    if (time + wait - Date.now() < 0) {
      fn(...args);
      time = Date.now();
    }
  };
}

export default function Navigation() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [whatWeDo, setWhatWeDo] = useState<'solutions' | 'industries' | 'caseStudy'>('solutions');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Define state for dropdown visibility
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleContactUs = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdowns for mobile view
  const toggleDropdown = (section: 'solutions' | 'industries' | 'caseStudy') => {
    if (section === 'solutions') {
      setIsSolutionOpen(!isSolutionOpen);
      setIsIndustriesOpen(false);
      setIsCaseStudyOpen(false);
    } else if (section === 'industries') {
      setIsIndustriesOpen(!isIndustriesOpen);
      setIsSolutionOpen(false);
      setIsCaseStudyOpen(false);
    } else if (section === 'caseStudy') {
      setIsCaseStudyOpen(!isCaseStudyOpen);
      setIsSolutionOpen(false);
      setIsIndustriesOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollTop) {
        // Scrolling down
        setNavbarVisible(false);
      } else {
        // Scrolling up
        setNavbarVisible(true);
      }
      setLastScrollTop(currentScrollPos); // Update lastScrollTop
    }, 100); // Throttle to limit execution frequency

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <nav className={styles.navigation}>
      <Link className={clsx(styles.logo, !navbarVisible && styles.logoHidden)} href='/'>
        <Image src={logo} alt='Logo' width={60} height={60} />
        <p>PG-AGI</p>
      </Link>
      <div
        className={clsx(styles.nav, !navbarVisible && styles.navHidden, isMenuOpen && styles.open)}
      >
        <div className={styles.links} >
          <Link href="/">Home</Link>
          <Link href="/aboutUs">About Us</Link>

          <div className={styles.whatWeDo}>
            <div className={styles.solutionsLink}>
              <a>Solutions</a>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className={styles.dropdown}>
              <div className={styles.content}>
                <span className={styles.background} />
                <div className={styles.menu}>
                  <span
                    className={clsx(whatWeDo === 'solutions' && styles.active)}
                    onMouseEnter={() => setWhatWeDo('solutions')}
                    onClick={() => toggleDropdown('solutions')}
                  >
                    Solutions
                  </span>
                  {isMobile && isSolutionOpen && (
                    <div className={styles.dropdownLinks}>
                      {whatWeDoLinks.solutions.map((link, index) => <a key={index}>{link}</a>)}
                    </div>
                  )}
                  <span
                    className={clsx(whatWeDo === 'industries' && styles.active)}
                    onMouseEnter={() => setWhatWeDo('industries')}
                    onClick={() => toggleDropdown('industries')}
                  >
                    Industries
                  </span>
                  {isMobile && isIndustriesOpen && (
                    <div className={styles.dropdownLinks}>
                      {whatWeDoLinks.industries.map((link, index) => <a key={index}>{link}</a>)}
                    </div>
                  )}
                  <span
                    className={clsx(whatWeDo === 'caseStudy' && styles.active)}
                    onMouseEnter={() => setWhatWeDo('caseStudy')}
                    onClick={() => toggleDropdown('caseStudy')}
                  >
                    Case Study
                  </span>
                  {isMobile && isCaseStudyOpen && (
                    <div className={styles.dropdownLinks}>
                      {whatWeDoLinks.caseStudy.map((link, index) => <a key={index}>{link}</a>)}
                    </div>
                  )}
                </div>
                {!isMobile && (
                  <div className={styles.dropdownLinks}>
                    {whatWeDoLinks[whatWeDo].map((link, index) => <a key={index}>{link}</a>)}
                  </div>
                )}
              </div>
            </div>
          </div>

          <Link href="/case-studies">Case studies</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/careers">Careers</Link>
        </div>

        {/* We keep the button in the code but it might be styled as hidden or transparent if needed */}
        {/* In screenshot 2 it doesn't appear, but screenshot 1 has it. Let's keep it but make it transparent background button */}
        <button className={styles.contact} onClick={handleContactUs}>Get in touch</button>

        <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isModalOpen && <ContactUsForm onClose={handleCloseModal} />}
    </nav>
  );
}
