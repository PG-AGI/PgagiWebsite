"use client";
import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    // The rest are deeper — preload during browser idle time
    const preloadRest = () => {
      void import("@/components/organisms/SocialOrbitSection");
      void import("@/components/organisms/SolutionFitBreakdownSection");
      void import("@/components/organisms/WhatMakesUsDifferentSection");
      void import("@/components/organisms/MeasurableImpactSection");
      void import("@/components/organisms/EcosystemSection");
      void import("@/components/organisms/ProcessTimelineSection");
      void import("@/components/organisms/RevenueSection");
      void import("@/components/organisms/ConcentricEllipseSection");
      void import("@/components/organisms/CaseStudiesSection");
      void import("@/components/organisms/Customers");
      void import("@/components/organisms/BuildEcosystemSection");
    };

    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(preloadRest, { timeout: 3000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(preloadRest, 500);
      return () => clearTimeout(id);
    }
  }, []);

  return null;
}
