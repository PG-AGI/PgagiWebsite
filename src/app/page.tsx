import Landing from "@/components/organisms/Landing";
import styles from "@/styles/app/page.module.scss";
import dynamic from "next/dynamic";
import LazySection from "@/components/atoms/LazySection";

// ScrollIndicator — UI-only, no SSR needed
const ScrollIndicator = dynamic(() => import("@/components/atoms/ScrollIndicator"), {
  ssr: false,
  loading: () => null,
});

// All below-fold sections: ssr:false so their CSS ships in async chunks,
// not in the render-blocking page.css. Reduces blocking CSS from 165KB → ~20KB.
// Wrapped in LazySection so component chunks (incl. GSAP) only download when
// the section is ~500px from the viewport — avoids loading 391 KiB of GSAP upfront.
const StatsSection = dynamic(() => import("@/components/organisms/NewPage"), { ssr: false });
const VisionSystemSection = dynamic(() => import("@/components/organisms/VisionSystemSection"), { ssr: false });
const SocialOrbitSection = dynamic(() => import("@/components/organisms/SocialOrbitSection"), { ssr: false });
const EcosystemSection = dynamic(() => import("@/components/organisms/EcosystemSection"), { ssr: false });
const ProcessTimelineSection = dynamic(() => import("@/components/organisms/ProcessTimelineSection"), { ssr: false });
const RevenueSection = dynamic(() => import("@/components/organisms/RevenueSection"), { ssr: false });
const MeasurableImpactSection = dynamic(() => import("@/components/organisms/MeasurableImpactSection"), { ssr: false });
const BuildEcosystemSection = dynamic(() => import("@/components/organisms/BuildEcosystemSection"), { ssr: false });
const SolutionFitBreakdownSection = dynamic(() => import("@/components/organisms/SolutionFitBreakdownSection"), { ssr: false });
const TrustedPartnersSection = dynamic(() => import("@/components/organisms/TrustedPartnersSection"), { ssr: false });
const RecentLaunchSection = dynamic(() => import("@/components/organisms/RecentLaunchSection"), { ssr: false });
const CaseStudiesSection = dynamic(() => import("@/components/organisms/CaseStudiesSection"), { ssr: false });
const Customers = dynamic(() => import("@/components/organisms/Customers"), { ssr: false });
const WhatMakesUsDifferentSection = dynamic(() => import("@/components/organisms/WhatMakesUsDifferentSection"), { ssr: false });
const ConcentricEllipseSection = dynamic(() => import("@/components/organisms/ConcentricEllipseSection"), { ssr: false });

export default function Home() {
  return (
    <main className={styles.main}>
      <ScrollIndicator />
      <Landing />
      {/* Near-fold sections: lighter preload window to reduce initial JS/network contention. */}
      <LazySection minHeight="600px" rootMargin="100px">
        <StatsSection />
      </LazySection>
      <LazySection minHeight="800px" rootMargin="120px">
        <VisionSystemSection />
      </LazySection>
      <LazySection minHeight="600px">
        <SocialOrbitSection />
      </LazySection>
      <LazySection minHeight="700px">
        <EcosystemSection />
      </LazySection>
      <LazySection minHeight="820px">
        <ProcessTimelineSection />
      </LazySection>
      <LazySection minHeight="600px">
        <RevenueSection />
      </LazySection>
      <LazySection minHeight="700px">
        <BuildEcosystemSection />
      </LazySection>
      <LazySection minHeight="600px">
        <SolutionFitBreakdownSection />
      </LazySection>
      <LazySection minHeight="500px">
        <TrustedPartnersSection />
      </LazySection>
      <LazySection minHeight="1200px">
        <RecentLaunchSection />
      </LazySection>
      {/* <LazySection minHeight="800px">
        <CaseStudiesSection />
      </LazySection> */}
      <LazySection minHeight="400px">
        <Customers />
      </LazySection>
      <LazySection minHeight="900px">
        <WhatMakesUsDifferentSection />
      </LazySection>
       <LazySection minHeight="600px">
        <MeasurableImpactSection />
      </LazySection>
      <LazySection minHeight="600px">
        <ConcentricEllipseSection />
      </LazySection>
    </main>
  );
}
