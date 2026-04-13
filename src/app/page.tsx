import Landing from "@/components/organisms/Landing";
import styles from "@/styles/app/page.module.scss";
import dynamic from "next/dynamic";

// ScrollIndicator — UI-only, no SSR needed
const ScrollIndicator = dynamic(() => import("@/components/atoms/ScrollIndicator"), {
  ssr: false,
  loading: () => null,
});

// All below-fold sections: ssr:false so their CSS ships in async chunks,
// not in the render-blocking page.css. Reduces blocking CSS from 165KB → ~20KB.
const StatsSection = dynamic(() => import("@/components/organisms/NewPage"), { ssr: false });
const VisionSystemSection = dynamic(() => import("@/components/organisms/VisionSystemSection"), { ssr: false });
const SocialOrbitSection = dynamic(() => import("@/components/organisms/SocialOrbitSection"), { ssr: false });
const EcosystemSection = dynamic(() => import("@/components/organisms/EcosystemSection"), { ssr: false });
const ProcessTimelineSection = dynamic(() => import("@/components/organisms/ProcessTimelineSection"), { ssr: false });
const RevenueSection = dynamic(() => import("@/components/organisms/RevenueSection"), { ssr: false });
const MeasurableImpactSection = dynamic(() => import("@/components/organisms/MeasurableImpactSection"), { ssr: false });
const BuildEcosystemSection = dynamic(() => import("@/components/organisms/BuildEcosystemSection"), { ssr: false });
const SolutionFitBreakdownSection = dynamic(() => import("@/components/organisms/SolutionFitBreakdownSection"), { ssr: false });
const CaseStudiesSection = dynamic(() => import("@/components/organisms/CaseStudiesSection"), { ssr: false });
const Customers = dynamic(() => import("@/components/organisms/Customers"), { ssr: false });
const WhatMakesUsDifferentSection = dynamic(() => import("@/components/organisms/WhatMakesUsDifferentSection"), { ssr: false });
const ConcentricEllipseSection = dynamic(() => import("@/components/organisms/ConcentricEllipseSection"), { ssr: false });

export default function Home() {
  return (
    <main className={styles.main}>
      <ScrollIndicator />
      <Landing />
      <StatsSection />
      <VisionSystemSection />
      <SocialOrbitSection />
      <EcosystemSection />
      <ProcessTimelineSection />
      <RevenueSection />
      <MeasurableImpactSection />
      <BuildEcosystemSection />
      <SolutionFitBreakdownSection />
      <CaseStudiesSection />
      <Customers />
      <WhatMakesUsDifferentSection />
      <ConcentricEllipseSection />
    </main>
  );
}
