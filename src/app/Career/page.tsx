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
  const handleScrollToPositions = () => {
    positionsRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the Positions section
  };

  return (
    <>
      <Navigation />
      <Hero onScrollToPositions={handleScrollToPositions} />
      <Values />
      <div ref={positionsRef}>
        <Positions />
      </div>
      <Benefits />
      <Footer />
    </>
  );
};

export default HomePage;
