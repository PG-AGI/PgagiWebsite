"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { useSmoothScroll } from "@/contexts/SmoothScrollContext";
import { useEffect, useRef } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { isTransitioning, endTransition } = usePageTransition();
  const { lenis } = useSmoothScroll();
  const hasMountedRef = useRef(false);

  useEffect(() => {
    hasMountedRef.current = true;
  }, []);

  // End transition when pathname changes and refresh Lenis
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        endTransition();
        // Refresh Lenis smooth scroll after transition
        if (lenis) {
          lenis.resize();
          lenis.scrollTo(0, { immediate: true });
        }
      }, 800); // Match the animation duration
      
      return () => clearTimeout(timer);
    }
  }, [pathname, isTransitioning, endTransition, lenis]);

  // Refresh Lenis when pathname changes
  useEffect(() => {
    if (lenis) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(() => {
        lenis.resize();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, lenis]);

  const initialAnim = hasMountedRef.current ? { 
    y: "100vh", 
    opacity: 0,
    scale: 0.95
  } : false;

  return (
    <div className="page-transition-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={initialAnim}
          animate={{ 
            y: 0, 
            opacity: 1,
            scale: 1
          }}
          exit={{ 
            y: "-100vh", 
            opacity: 0,
            scale: 0.95
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
            opacity: { duration: 0.6 },
            scale: { duration: 0.8 }
          }}
          style={{
            width: "100%",
            minHeight: "100vh",
            position: "relative",
            zIndex: 1,
            overflow: "visible"
          }}
          className="motion-div"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
