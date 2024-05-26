// import Image from "next/image";
// import logo from '../../assets/logo.png';
// import styles from "./navigation.module.scss";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import clsx from "clsx";
// import { whatWeDoLinks } from "@/utils/constants";
// import BookCallModal from "./bookCallModela";

// export default function Navigation() {
//     const [lastScrollTop, setLastScrollTop] = useState(0);
//     const [navbarVisible, setNavbarVisible] = useState(true);
//     const [whatWeDo, setWhatWeDo] = useState<'solutions' | 'industries' | 'caseStudy'>('solutions');

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleBookCall = () => {
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };


//     useEffect(() => {
//         const handleScroll = () => {
//             let currentScrollPos = window.pageYOffset;
//             if (currentScrollPos > lastScrollTop) {
//                 // Scrolling down
//                 setNavbarVisible(false);
//             } else {
//                 // Scrolling up
//                 setNavbarVisible(true);
//             }
//             setLastScrollTop(currentScrollPos); // Update lastScrollTop
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [lastScrollTop]);
//     return (
//         <nav className={styles.navigation}>
//             <div className={styles.banner}>
//                 AI Calling Agent - <a href="https://call.toingg.com/" target="_blank" rel="noopener noreferrer">Learn more</a>
//             </div>
//             <div className={clsx(styles.nav, !navbarVisible && styles.navHidden)}>
//                 <Link className={styles.logo} href='/'>
//                     <Image src={logo} alt='Logo' width={60} height={60} />
//                     <p>PG-AGI</p>
//                 </Link>
//                 <div className={styles.links}>
//                 <div className={styles.whatWeDo}>
//                         <a>What we do</a>
//                         <div className={styles.dropdown}>
//                             <div className={styles.content}>
//                                 <span className={styles.background} />
//                                 <div className={styles.menu}>
//                                     <span className={whatWeDo === 'solutions' ? styles.active : ''} onClick={() => setWhatWeDo('solutions')}>Solutions</span>
//                                     <span className={whatWeDo === 'industries' ? styles.active : ''} onClick={() => setWhatWeDo('industries')}>Industries</span>
//                                     <span className={whatWeDo === 'caseStudy' ? styles.active : ''} onClick={() => setWhatWeDo('caseStudy')}>Case Study</span>
//                                 </div>
//                                 <div className={styles.dropdownLinks}>
//                                     {
//                                         whatWeDoLinks[whatWeDo].map((link, index) => <a key={index}>{link}</a>)
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <a href="pgagi-website-landing-modifications/pgagi-website/src/app/posts">What we think</a>
//                     <a href="https://pgagi.in/aboutus">Who we are</a>
//                 </div>
//                 <button className={styles.contact} onClick={handleBookCall}>Contact us</button>
//                 <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal}/>
//             </div>
//         </nav>
//     );
// }

// 'use client'

// import Image from "next/image";
// import logo from '../../assets/logo.png';
// import styles from "./navigation.module.scss";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import clsx from "clsx";
// import { whatWeDoLinks } from "@/utils/constants";
// import BookCallModal from "./bookCallModela";

// export default function Navigation() {
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [navbarVisible, setNavbarVisible] = useState(true);
//   const [whatWeDo, setWhatWeDo] = useState<'solutions' | 'industries' | 'caseStudy'>('solutions');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleBookCall = () => {
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

//   return (
//     <nav className={styles.navigation}>
//       <div className={styles.banner}>
//         AI Calling Agent -{" "}
//         <a href="https://call.toingg.com/" target="_blank" rel="noopener noreferrer">
//           Learn more
//         </a>
//       </div>
//       <Link className={styles.logo} href='/'>
//           <Image src={logo} alt='Logo' width={60} height={60} />
//           <p>PG-AGI</p>
//         </Link>
//       <div
//         className={clsx(styles.nav, !navbarVisible && styles.navHidden, isMenuOpen && styles.open)}
//         onClick={toggleMenu}
//       >       
//         <div className={styles.links}>
//           <div className={styles.whatWeDo}>
//             <a>What we do</a>
//             <div className={styles.dropdown}>
//               <div className={styles.content}>
//                 <span className={styles.background} />
//                 <div className={styles.menu}>
//                   <span className={whatWeDo === 'solutions' ? styles.active : ''} onClick={() => setWhatWeDo('solutions')}>Solutions</span>
//                   <span className={whatWeDo === 'industries' ? styles.active : ''} onClick={() => setWhatWeDo('industries')}>Industries</span>
//                   <span className={whatWeDo === 'caseStudy' ? styles.active : ''} onClick={() => setWhatWeDo('caseStudy')}>Case Study</span>
//                 </div>
//                 <div className={styles.dropdownLinks}>
//                   {whatWeDoLinks[whatWeDo].map((link, index) => <a key={index}>{link}</a>)}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <a href="pgagi-website-landing-modifications/pgagi-website/src/app/posts">What we think</a>
//           <a href="https://pgagi.in/aboutus">Who we are</a>
//         </div>
//         <button className={styles.contact} onClick={handleBookCall}>Contact us</button>
//         <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
//       </div>
//       <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// }

'use client'

import Image from "next/image";
import logo from '../../assets/logo.png';
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { whatWeDoLinks } from "@/utils/constants";
import BookCallModal from "./bookCallModela";
import ContactUsForm from "./contactUsForm";

export default function Navigation() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [whatWeDo, setWhatWeDo] = useState<'solutions' | 'industries' | 'caseStudy'>('solutions');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isIndustriesOpen, setIndustriesOpen] = useState(false);
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

  const handleExpandItem = (item: string) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollTop) {
        // Scrolling down
        setNavbarVisible(false);
      } else {
        // Scrolling up
        setNavbarVisible(true);
      }
      setLastScrollTop(currentScrollPos); // Update lastScrollTop
    };

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
      <div className={styles.banner}>
        AI Calling Agent -{" "}
        <a href="https://call.toingg.com/" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>
      <Link className={clsx(styles.logo, !navbarVisible && styles.logoHidden)} href='/'>
        <Image src={logo} alt='Logo' width={60} height={60} />
        <p>PG-AGI</p>
      </Link>
      <div
        className={clsx(styles.nav, !navbarVisible && styles.navHidden, isMenuOpen && styles.open)}
      >       
        <div className={styles.links}>
          <div className={styles.whatWeDo}>
            <a onClick={() => handleExpandItem('whatWeDo')}>What we do</a>
            <div className={styles.dropdown}>
                <div className={styles.content}>
                  <span className={styles.background} />
                  <div className={styles.menu}>
                    <span className={clsx(whatWeDo === 'solutions' && styles.active, isSolutionOpen && styles.show)} onClick={() => {setWhatWeDo('solutions'); setIsSolutionOpen((v) => !v)}}>Solutions</span>
                    {
                      isMobile && isSolutionOpen && <div className={styles.dropdownLinks}>
                        {whatWeDoLinks.solutions.map((link, index) => <a key={index}>{link}</a>)}
                      </div>
                    }
                    <span className={clsx(whatWeDo === 'industries' && styles.active, isIndustriesOpen && styles.show)} onClick={() => {setWhatWeDo('industries'); setIndustriesOpen((v) => !v)}}>Industries</span>
                    {
                      isMobile && isIndustriesOpen && <div className={styles.dropdownLinks}>
                        {whatWeDoLinks.industries.map((link, index) => <a key={index}>{link}</a>)}
                      </div>
                    }
                    <span className={clsx(whatWeDo === 'caseStudy' && styles.active, isCaseStudyOpen && styles.show)} onClick={() => {setWhatWeDo('caseStudy'); setIsCaseStudyOpen((v) => !v)}}>Case Study</span>
                    {
                      isMobile && isCaseStudyOpen && <div className={styles.dropdownLinks}>
                        {whatWeDoLinks.caseStudy.map((link, index) => <a key={index}>{link}</a>)}
                      </div>
                    }
                  </div>
                  {
                    !isMobile && (
                      <div className={styles.dropdownLinks}>
                        {whatWeDoLinks[whatWeDo].map((link, index) => <a key={index}>{link}</a>)}
                      </div>
                    )
                  }
                </div>
              </div>
          </div>
          <a href="https://616b-103-81-36-202.ngrok-free.app/posts">What we think</a>
          {expandedItem === 'whatWeThink' && (
            <div className={styles.dropdown}>
              <div className={styles.content}>
                <span className={styles.background} />
                <div className={styles.menu}>
                  {/* Add your submenu items here for "What we think" */}
                </div>
              </div>
            </div>
          )}
          <a href="https://pgagi.in/aboutus">Who we are</a>
          {expandedItem === 'whoWeAre' && (
            <div className={styles.dropdown}>
              <div className={styles.content}>
                <span className={styles.background} />
                <div className={styles.menu}>
                  {/* Add your submenu items here for "Who we are" */}
                </div>
              </div>
            </div>
          )}
        </div>
        <button className={styles.contact} onClick={handleContactUs}>Contact us</button>
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>        
      </div>
      {isModalOpen && <ContactUsForm onClose={handleCloseModal}/>}
    </nav>
  );
}
