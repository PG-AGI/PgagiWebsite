"use client";

import Image from "next/image";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import ContactUsForm from "./contactUsForm";
import { ArrowRight } from "lucide-react";

// Custom hook to detect background color
const useBackgroundColor = () => {
  const [textColor, setTextColor] = useState<'white' | 'black'>('white');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkBackgroundColor = () => {
      if (!navRef.current) return;

      const rect = navRef.current.getBoundingClientRect();

      // Check multiple points to get a better understanding of the background
      const points = [
        { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }, // center
        { x: rect.left + 20, y: rect.top + 20 }, // top-left
        { x: rect.right - 20, y: rect.top + 20 }, // top-right
      ];

      let backgroundColor = 'rgba(0, 0, 0, 0)';

      for (const point of points) {
        const element = document.elementFromPoint(point.x, point.y);

        if (element) {
          // Find the actual background color by traversing up the DOM tree
          let currentElement = element;

          while (currentElement && currentElement !== document.body) {
            const computedStyle = window.getComputedStyle(currentElement);
            const bgColor = computedStyle.backgroundColor;

            // Check if this element has a non-transparent background
            if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
              backgroundColor = bgColor;
              break;
            }

            currentElement = currentElement.parentElement as HTMLElement;
          }

          if (backgroundColor !== 'rgba(0, 0, 0, 0)') {
            break; // Found a background color, stop checking other points
          }
        }
      }

      // Parse RGB values
      const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (rgbMatch) {
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);

        // Calculate luminance using the standard formula
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Set text color based on background luminance
        // Use a threshold of 0.5 - above this is light, below is dark
        const newTextColor = luminance > 0.5 ? 'black' : 'white';
        setTextColor(newTextColor);
        console.log(`Background: ${backgroundColor}, Luminance: ${luminance.toFixed(3)}, Text color: ${newTextColor}`);
      } else {
        // Fallback: if we can't parse the color, default to white text
        // This handles cases like 'transparent', 'inherit', etc.
        setTextColor('white');
        console.log(`Could not parse background color: ${backgroundColor}, defaulting to white text`);
      }
    };

    // Check on scroll and resize
    const handleScroll = () => {
      requestAnimationFrame(checkBackgroundColor);
    };

    const handleResize = () => {
      requestAnimationFrame(checkBackgroundColor);
    };

    // Initial check with a small delay to ensure DOM is ready
    const initialCheck = setTimeout(checkBackgroundColor, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { textColor, navRef };
};

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

  const { textColor, navRef } = useBackgroundColor();
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Handle scroll to add scrolled class
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className={clsx(styles.navigation, isScrolled && styles.scrolled)} ref={navRef}>
      <div
        className={clsx(
          styles.nav,
          !navbarVisible && styles.navHidden,
          isMenuOpen && styles.open
        )}
        style={{
          '--text-color': textColor === 'white' ? '#ffffff' : '#000000',
          '--text-color-inverse': textColor === 'white' ? '#000000' : '#ffffff',
        } as React.CSSProperties}
      >
        <Link className={styles.logo} href="/">
          <Image
            src="/landing/PGAGI-logo.png"
            alt="PGAGI Logo"
            width={60}
            height={60}
          />
          <p>PG-AGI</p>
        </Link>

        <div className={styles.links}>
          {isMobile ? (
            <>
              {/* Mobile Menu Navigation */}
              {mobileMenuSection === "main" && (
                <div className={styles.mastermenu}>
                  <Link href="/" className={styles.mobileMenuItem}>
                    Home
                  </Link>
                  <Link href="/expertise" className={styles.mobileMenuItem}>
                    Expertise
                  </Link>
                  <Link href={BLOGS} className={styles.mobileMenuItem}>
                    What we think
                  </Link>
                  <Link href={ABOUT} className={styles.mobileMenuItem}>
                    Who we are
                  </Link>
                  <Link href="/Career" className={styles.mobileMenuItem}>
                    Careers
                  </Link>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Desktop links for What We Think and Who We Are */}
              <Link href="/" className={styles.link}>
                Home
              </Link>
              <Link href="/expertise" className={styles.link}>
                Expertise
              </Link>
              <Link href="/whatwethink" className={styles.link}>
                What we think
              </Link>
              <Link href="/aboutUs" className={styles.link}>
                Who we are
              </Link>
              <Link href="/Career" className={styles.link}>
                Careers
              </Link>

              <button className={styles.contact} onClick={handleContactUs}>
                Get in touch
                <ArrowRight size={16} />
              </button>
            </>
          )}
        </div>



        {/* Debug indicator - remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <div style={{
            position: 'absolute',
            top: '8px',
            right: '10px',
            padding: '4px 8px',
            fontSize: '12px',
            background: textColor === 'white' ? '#000' : '#fff',
            color: textColor === 'white' ? '#fff' : '#000',
            borderRadius: '4px',
            zIndex: 2000
          }}>
            {textColor} text
          </div>
        )}
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
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
