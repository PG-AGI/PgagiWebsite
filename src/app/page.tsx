import Landing from "@/components/organisms/Landing";
import StatsSection from "@/components/organisms/NewPage";
import VisionSystemSection from "@/components/organisms/VisionSystemSection";
import SocialOrbitSection from "@/components/organisms/SocialOrbitSection";
import SolutionFitBreakdownSection from "@/components/organisms/SolutionFitBreakdownSection";
import WhatMakesUsDifferentSection from "@/components/organisms/WhatMakesUsDifferentSection";
import MeasurableImpactSection from "@/components/organisms/MeasurableImpactSection";
import EcosystemSection from "@/components/organisms/EcosystemSection";
import ProcessTimelineSection from "@/components/organisms/ProcessTimelineSection";
import RevenueSection from "@/components/organisms/RevenueSection";
import ConcentricEllipseSection from "@/components/organisms/ConcentricEllipseSection";
import CaseStudiesSection from "@/components/organisms/CaseStudiesSection";
import Customers from "@/components/organisms/Customers";
import BuildEcosystemSection from "@/components/organisms/BuildEcosystemSection";
import styles from "@/styles/app/page.module.scss";
import dynamic from "next/dynamic";

const ScrollIndicator = dynamic(() => import("@/components/atoms/ScrollIndicator"), {
  ssr: false,
  loading: () => null,
});

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
