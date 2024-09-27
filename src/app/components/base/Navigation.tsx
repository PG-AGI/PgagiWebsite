/*'use client'

import Image from "next/image";
import logo from '../../assets/logo.png';
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { whatWeDoLinks } from "@/utils/constants";
import ContactUsForm from "./contactUsForm";



export default function Navigation() {
  const [navbarVisible] = useState(true);
  const [whatWeDo, setWhatWeDo] = useState<'solutions' | 'industries' | 'caseStudy'>('solutions');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // State for mobile dropdowns
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [mobileMenuSection, setMobileMenuSection] = useState<null | 'solutions' | 'industries' | 'caseStudy'>(null);

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

  // Mobile dropdown toggle
  const handleMobileDropdown = (section: 'solutions' | 'industries' | 'caseStudy') => {
    setMobileMenuSection(mobileMenuSection === section ? null : section); // Toggle the section
  };

  useEffect(() => {
    if (isMenuOpen || mobileMenuSection) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen, mobileMenuSection]);

  return (
    <nav className={styles.navigation}>
      <div className={styles.banner}>
        AI Calling Agent -{" "}
        <a href="https://www.toingg.com/" target="_blank" rel="noopener noreferrer">
          Try for Free
        </a>
      </div>
      <div className={clsx(styles.nav, !navbarVisible && styles.navHidden, isMenuOpen && styles.open)}>
        <Link className={styles.logo} href='/'>
          <Image src={logo} alt='Logo' width={60} height={60} />
          <p>PG-AGI</p>
        </Link>

        <div className={styles.links}>
          <div className={styles.whatWeDo}>
            <span className={styles.whatwedospan}>What we do</span>
            {!isMobile && (
              <div className={styles.dropdown}>
                <div className={styles.content}>
                  <span className={styles.background} />
                  <div className={styles.menu}>
                    <span
                      className={clsx(whatWeDo === 'solutions' && styles.active)}
                      onMouseEnter={() => setWhatWeDo('solutions')}
                    >
                      Solutions
                    </span>
                    <span
                      className={clsx(whatWeDo === 'industries' && styles.active)}
                      onMouseEnter={() => setWhatWeDo('industries')}
                    >
                      Industries
                    </span>
                    <span
                      className={clsx(whatWeDo === 'caseStudy' && styles.active)}
                      onMouseEnter={() => setWhatWeDo('caseStudy')}
                    >
                      Case Study
                    </span>
                  </div>
                  <div className={styles.dropdownLinks}>
                    {whatWeDoLinks[whatWeDo].map((link, index) => (
                      <a key={index}>{link}</a>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {isMobile && (
              <div>
                <div className={styles.mobileMenuItem} onClick={() => handleMobileDropdown('solutions')}>
                  Solutions {mobileMenuSection === 'solutions' && <span>⮟</span>}
                </div>
                {mobileMenuSection === 'solutions' && (
                  <div className={styles.mobileDropdownLinks}>
                    {whatWeDoLinks.solutions.map((link, index) => (
                      <a key={index}>{link}</a>
                    ))}
                  </div>
                )}

                <div className={styles.mobileMenuItem} onClick={() => handleMobileDropdown('industries')}>
                  Industries {mobileMenuSection === 'industries' && <span>⮟</span>}
                </div>
                {mobileMenuSection === 'industries' && (
                  <div className={styles.mobileDropdownLinks}>
                    {whatWeDoLinks.industries.map((link, index) => (
                      <a key={index}>{link}</a>
                    ))}
                  </div>
                )}

                <div className={styles.mobileMenuItem} onClick={() => handleMobileDropdown('caseStudy')}>
                  Case Study {mobileMenuSection === 'caseStudy' && <span>⮟</span>}
                </div>
                {mobileMenuSection === 'caseStudy' && (
                  <div className={styles.mobileDropdownLinks}>
                    {whatWeDoLinks.caseStudy.map((link, index) => (
                      <a key={index}>{link}</a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <Link href="/blogs" className={styles.link}>
            What we think
          </Link>
          <Link href="/aboutUs" className={styles.link}>
            Who We Are
          </Link>
        </div>

        <button className={styles.contact} onClick={handleContactUs}>
          Contact us
        </button>
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
*/
"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { whatWeDoLinks } from "@/utils/constants";
import ContactUsForm from "./contactUsForm";

export default function Navigation() {
  const [navbarVisible] = useState(true);
  const [whatWeDo, setWhatWeDo] = useState<
    "solutions" | "industries" | "caseStudy" | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuSection, setMobileMenuSection] = useState<
    null | "main" | "whatWeDo" | "solutions" | "industries" | "caseStudy"
  >(null);
  const BLOGS = "/blogs";
  const ABOUT = "/aboutUs";
  const TOKEN_CALCULATOR = "/token-calculator";
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

  const handleContactUs = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setMobileMenuSection("main"); // Start with main menu in mobile view
    }
  };

  const openWhatWeDoMenu = () => {
    setMobileMenuSection("whatWeDo");
  };

  const openSubMenu = (section: "solutions" | "industries" | "caseStudy") => {
    setMobileMenuSection(section);
  };

  const backToMenu = () => {
    setMobileMenuSection("whatWeDo");
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className={styles.navigation}>
      <div className={styles.banner}>
        AI Calling Agent -{" "}
        <a
          href="https://www.toingg.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try for Free
        </a>
      </div>

      <div
        className={clsx(
          styles.nav,
          !navbarVisible && styles.navHidden,
          isMenuOpen && styles.open
        )}
      >
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="Logo" width={60} height={60} />
          <p>PG-AGI</p>
        </Link>

        <div className={styles.links}>
          {isMobile ? (
            <>
              {/* Mobile Menu Navigation */}
              {mobileMenuSection === "main" && (
                <div className={styles.mastermenu}>
                  <div
                    className={styles.mobileMenuItem}
                    onClick={openWhatWeDoMenu}
                  >
                    What we do
                  </div>
                  <Link href={BLOGS} className={styles.mobileMenuItem}>
                    What we think
                  </Link>
                  <Link href={ABOUT} className={styles.mobileMenuItem}>
                    Who We Are
                  </Link>
                  <Link href={TOKEN_CALCULATOR} className={styles.mobileMenuItem}>
                        LLM Token Calculator
                  </Link>
                </div>
              )}

              {mobileMenuSection === "whatWeDo" && (
                <>
                  <div
                    className={styles.mobileBack}
                    onClick={() => setMobileMenuSection("main")}
                  >
                    ←
                  </div>
                  <div
                    className={styles.menuItem}
                    onClick={() => openSubMenu("solutions")}
                  >
                    Solutions
                  </div>
                  <div
                    className={styles.menuItem}
                    onClick={() => openSubMenu("industries")}
                  >
                    Industries
                  </div>
                  <div
                    className={styles.menuItem}
                    onClick={() => openSubMenu("caseStudy")}
                  >
                    Case Study
                  </div>
                </>
              )}

              {mobileMenuSection === "solutions" && (
                <>
                  <div className={styles.mobileBack} onClick={backToMenu}>
                    ←
                  </div>
                  <p className={styles.paragraph}>Solutions</p>
                  <div className={styles.scrollableMenu}>
                    {whatWeDoLinks.solutions.map((link, index) => (
                      <div key={index} className={styles.mobileSubMenuItem}>
                        {link}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {mobileMenuSection === "industries" && (
                <>
                  <div className={styles.mobileBack} onClick={backToMenu}>
                    ←
                  </div>
                  <p className={styles.paragraph}>Solutions</p>
                  <div className={styles.scrollableMenu}>
                    {whatWeDoLinks.industries.map((link, index) => (
                      <div key={index} className={styles.mobileSubMenuItem}>
                        {link}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {mobileMenuSection === "caseStudy" && (
                <>
                  <div className={styles.mobileBack} onClick={backToMenu}>
                    ←
                  </div>
                  <p className={styles.paragraph}>Solutions</p>
                  <div className={styles.scrollableMenu}>
                    {whatWeDoLinks.caseStudy.map((link, index) => (
                      <div key={index} className={styles.mobileSubMenuItem}>
                        {link}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {/* Desktop view */}
              <div className={styles.whatWeDo}>
                <span className={styles.whatwedospan}>What we do</span>
                <div className={styles.dropdown}>
                  <div className={styles.content}>
                    <span className={styles.background} />
                    <div className={styles.menu}>
                      <span
                        className={clsx(
                          whatWeDo === "solutions" && styles.active
                        )}
                        onMouseEnter={() => setWhatWeDo("solutions")}
                      >
                        Solutions
                      </span>
                      <span
                        className={clsx(
                          whatWeDo === "industries" && styles.active
                        )}
                        onMouseEnter={() => setWhatWeDo("industries")}
                      >
                        Industries
                      </span>
                      <span
                        className={clsx(
                          whatWeDo === "caseStudy" && styles.active
                        )}
                        onMouseEnter={() => setWhatWeDo("caseStudy")}
                      >
                        Case Study
                      </span>
                    </div>
                    <div className={styles.dropdownLinks}>
                      {whatWeDo &&
                        whatWeDoLinks[whatWeDo].map((link, index) => (
                          <a key={index}>{link}</a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop links for What We Think and Who We Are */}
              <Link href="/blogs" className={styles.link}>
                What we think
              </Link>
              <Link href="/aboutUs" className={styles.link}>
                Who We Are
              </Link>
              <Link href={TOKEN_CALCULATOR} className={styles.link}>
                LLM Token Calculator
              </Link>
            </>
          )}
        </div>

        <button className={styles.contact} onClick={handleContactUs}>
          Contact us
        </button>
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
