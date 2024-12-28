"use client";

import { useRef } from "react";
import Navigation from "../components/base/Navigation";
import { Hero } from "./components/Hero";
import { Values } from "./components/Values";
import { Positions } from "./components/Positions";
import { Benefits } from "./components/Benefits";
import Footer from "../components/Footer";

const HomePage = () => {
  const positionsRef = useRef<HTMLDivElement>(null); // Ref for the Positions section
  const benefitsRef = useRef<HTMLDivElement>(null); // Ref for the Benefits section

  const handleScrollToPositions = () => {
    positionsRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the Positions section
  };

  const handleScrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the Benefits section
  };

  return (
    <>
      <Navigation />
      <Hero
        onScrollToPositions={handleScrollToPositions}
        onScrollToBenefits={handleScrollToBenefits}
      />
      <Values />
      <div ref={positionsRef}>
        <Positions />
      </div>
      <div ref={benefitsRef}>
        <Benefits />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
