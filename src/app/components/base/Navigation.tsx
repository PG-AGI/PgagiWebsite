// "use client";

// import Image from "next/image";
// import styles from "./navigation.module.scss";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import clsx from "clsx";
// import ContactUsForm from "./contactUsForm";
// import { ArrowRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navigation() {
//   const [navbarVisible] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [mobileMenuSection, setMobileMenuSection] = useState<null | "main">(
//     null
//   );
//   const BLOGS = "/whatwethink";
//   const ABOUT = "/aboutUs";

//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       setIsScrolled(scrollTop > 50);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleContactUs = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (!isMenuOpen) setMobileMenuSection("main");
//   };

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//       document.body.style.position = "fixed";
//       document.body.style.width = "100%";
//     } else {
//       document.body.style.overflow = "auto";
//       document.body.style.position = "static";
//       document.body.style.width = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       document.body.style.position = "static";
//       document.body.style.width = "auto";
//     };
//   }, [isMenuOpen]);

//   return (
//     <motion.nav
//       className={clsx(styles.navigation, isScrolled && styles.scrolled)}
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       <div
//         className={clsx(
//           styles.nav,
//           !navbarVisible && styles.navHidden,
//           isMenuOpen && styles.open
//         )}
//         style={
//           {
//             "--text-color": "#666666",
//             "--text-color-inverse": "#ffffff",
//           } as React.CSSProperties
//         }
//       >
//         {/* Logo */}
//         <Link className={styles.logo} href="/">
//           <Image
//             src="/landing/PGAGI-logo.png"
//             alt="PGAGI Logo"
//             width={60}
//             height={60}
//           />
//           <p>PG-AGI</p>
//         </Link>

//         {/* Links */}
//         <div className={styles.links}>
//           {isMobile ? (
//             <AnimatePresence>
//               {isMenuOpen && mobileMenuSection === "main" && (
//                 <motion.div
//                   className={styles.mastermenu}
//                   initial={{ x: "100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "100%" }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                 >
//                   <Link
//                     href="/"
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     href="/expertise"
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Expertise
//                   </Link>
//                   <Link
//                     href="/projects"
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Projects
//                   </Link>
//                   <Link
//                     href={BLOGS}
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     What we think
//                   </Link>
//                   <Link
//                     href={ABOUT}
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Who we are
//                   </Link>
//                   <Link
//                     href="/Career"
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Careers
//                   </Link>
//                   <motion.button
//                     className={styles.mobileContact}
//                     whileHover={{ x: 5 }}
//                     onClick={() => {
//                       setIsMenuOpen(false);
//                       handleContactUs();
//                     }}
//                   >
//                     Get in touch <ArrowRight size={16} />
//                   </motion.button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           ) : (
//             <>
//               <Link href="/" className={styles.link}>
//                 Home
//               </Link>
//               <Link href="/aboutUs" className={styles.link}>
//                 About Us
//               </Link>
//               <Link href="/expertise" className={styles.link}>
//                 Expertise
//               </Link>
//               <Link href="/projects" className={styles.link}>
//                 Projects
//               </Link>
//               <Link href="/whatwethink" className={styles.link}>
//                 Blogs
//               </Link>
//               <Link href="/Career" className={styles.link}>
//                 Careers
//               </Link>

//               <motion.button
//                 className={styles.contact}
//                 onClick={handleContactUs}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Get in touch
//                 <ArrowRight size={16} />
//               </motion.button>
//             </>
//           )}
//         </div>

//         {/* Hamburger */}
//         <motion.div
//           className={clsx(styles.hamburger, isMenuOpen && styles.open)}
//           onClick={toggleMenu}
//           whileTap={{ scale: 0.9 }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </motion.div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ContactUsForm onClose={handleCloseModal} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }

"use client";

import Image from "next/image";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ContactUsForm from "./contactUsForm";
import { ArrowRight } from "lucide-react";
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
            width={50}
            height={50}
          />
          <p>PG-AGI</p>
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
            Get in touch <ArrowRight size={16} />
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
            <button
              className={styles.closeButton}
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>

            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href={ABOUT} onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/expertise" onClick={() => setIsMenuOpen(false)}>
              Expertise
            </Link>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href={BLOGS} onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <Link href="/Career" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>

            <motion.button
              className={styles.mobileContact}
              whileHover={{ x: 5 }}
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
            >
              Get in touch <ArrowRight size={16} />
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
