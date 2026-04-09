"use client";

import { useRef } from "react";
import { Hero } from "./components/Hero";
import { Values } from "./components/Values";
import { Positions } from "./components/Positions";
import { Benefits } from "./components/Benefits";

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
    </>
  );
};

export default HomePage;
