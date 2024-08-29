// 'use client'

// import Image from "next/image";
// import logo from '../../assets/logo.png';
// import styles from "./navigation.module.scss";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import clsx from "clsx";
// import { whatWeDoLinks } from "@/utils/constants";
// import BookCallModal from "./bookCallModela";
// import ContactUsForm from "./contactUsForm";

// export default function Navigation() {
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [navbarVisible, setNavbarVisible] = useState(true);
//   const [whatWeDo, setWhatWeDo] = useState<'solutions' | 'industries' | 'caseStudy'>('solutions');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const [isSolutionOpen, setIsSolutionOpen] = useState(false);
//   const [isIndustriesOpen, setIndustriesOpen] = useState(false);
//   const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); 
//     };

//     handleResize(); // set initial value
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleContactUs = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       let currentScrollPos = window.pageYOffset;
//       if (currentScrollPos > lastScrollTop) {
//         // Scrolling down
//         setNavbarVisible(false);
//       } else {
//         // Scrolling up
//         setNavbarVisible(true);
//       }
//       setLastScrollTop(currentScrollPos); // Update lastScrollTop
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollTop]);

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [isMenuOpen]);

//   return (
//     <nav className={styles.navigation}>
//       <div className={styles.banner}>
//         AI Calling Agent -{" "}
//         <a href="https://www.toingg.com/" target="_blank" rel="noopener noreferrer">
//           Try for Free
//         </a>
//       </div>
//       <Link className={clsx(styles.logo, !navbarVisible && styles.logoHidden)} href='/'>
//         <Image src={logo} alt='Logo' width={60} height={60} />
//         <p>PG-AGI</p>
//       </Link>
//       <div
//         className={clsx(styles.nav, !navbarVisible && styles.navHidden, isMenuOpen && styles.open)}
//       >       
//         <div className={styles.links}>
//           <div className={styles.whatWeDo}>
//             <a>What we do</a>
//             <div className={styles.dropdown}>
//               <div className={styles.content}>
//                 <span className={styles.background} />
//                 <div className={styles.menu}>
//                   <span className={clsx(whatWeDo === 'solutions' && styles.active)} onMouseEnter={() => setWhatWeDo('solutions')}>Solutions</span>
//                   {isMobile && isSolutionOpen && (
//                     <div className={styles.dropdownLinks}>
//                       {whatWeDoLinks.solutions.map((link, index) => <a key={index}>{link}</a>)}
//                     </div>
//                   )}
//                   <span className={clsx(whatWeDo === 'industries' && styles.active)} onMouseEnter={() => setWhatWeDo('industries')}>Industries</span>
//                   {isMobile && isIndustriesOpen && (
//                     <div className={styles.dropdownLinks}>
//                       {whatWeDoLinks.industries.map((link, index) => <a key={index}>{link}</a>)}
//                     </div>
//                   )}
//                   <span className={clsx(whatWeDo === 'caseStudy' && styles.active)} onMouseEnter={() => setWhatWeDo('caseStudy')}>Case Study</span>
//                   {isMobile && isCaseStudyOpen && (
//                     <div className={styles.dropdownLinks}>
//                       {whatWeDoLinks.caseStudy.map((link, index) => <a key={index}>{link}</a>)}
//                     </div>
//                   )}
//                 </div>
//                 {!isMobile && (
//                   <div className={styles.dropdownLinks}>
//                     {whatWeDoLinks[whatWeDo].map((link, index) => <a key={index}>{link}</a>)}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <Link href="/blogs">What we think</Link>
//           <Link href="/aboutUs">Who We Are</Link>
//         </div>
//         <button className={styles.contact} onClick={handleContactUs}>Contact us</button>
//         <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>        
//       </div>
//       {isModalOpen && <ContactUsForm onClose={handleCloseModal}/>}
//     </nav>
//   );
// }

// throtling 
// 'use client'

'use client'

import Image from "next/image";
import logo from '../../assets/logo.png';
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { whatWeDoLinks } from "@/utils/constants";
import ContactUsForm from "./contactUsForm";

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
  if (isMobile) { // Ensure this logic is only for mobile view
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
  }
};


  useEffect(() => {
    if (isMenuOpen || isSolutionOpen || isIndustriesOpen || isCaseStudyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen, isSolutionOpen, isIndustriesOpen, isCaseStudyOpen]);

  return (
    <nav className={styles.navigation}>
      <div className={styles.banner}>
        AI Calling Agent -{" "}
        <a href="https://www.toingg.com/" target="_blank" rel="noopener noreferrer">
          Try for Free
        </a>
      </div>
      <div
        className={clsx(styles.nav, !navbarVisible && styles.navHidden, isMenuOpen && styles.open)}
      >
        <Link
          className={styles.logo}
          href='/'
        >
          <Image src={logo} alt='Logo' width={60} height={60} />
          <p>PG-AGI</p>
        </Link>
        <div className={styles.links}>
          <div className={styles.whatWeDo}>
            <span>What we do</span>
            <div className={styles.dropdown}>
              <div className={styles.content}>
                <span className={styles.background} />
                <div className={styles.menu}>
                  <span
                    className={clsx(whatWeDo === 'solutions' && styles.active, isSolutionOpen && styles.show)}
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
                    className={clsx(whatWeDo === 'industries' && styles.active, isIndustriesOpen && styles.show)}
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
                    className={clsx(whatWeDo === 'caseStudy' && styles.active, isCaseStudyOpen && styles.show)}
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
          <Link href="/blogs">What we think</Link>
          <Link href="/aboutUs">Who We Are</Link>
        </div>
        <button className={styles.contact} onClick={handleContactUs}>Contact us</button>
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
