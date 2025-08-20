'use client'
import Landing from "./components/Landing";
import Partners from "./components/Partners";
import StatsSection from "./components/NewPage";
import styles from "./page.module.scss";
import Segment from "./components/base/Segment";
import GlareBackground from "./components/base/GlareBackground";
import { segmentList } from "@/utils/constants";
import Calendly from "./components/Calendly";
import { Lottie } from "xtreme-ui";
import { useEffect, useRef } from "react";
//import { motion } from 'framer-motion';
import TrendingOld from "./components/trending_old";
import ExpertiseSection from "./components/ExpertiseSection";
import FAQ from "./components/FAQ";
import VideoTestimonial from "./components/VideoTestimonial";
import TestimonialCarousel from "./components/InfiniteTestimonial";
import ScrollIndicator from "./components/ScrollIndicator";
import SmoothScrollNav from "./components/SmoothScrollNav";
import LandingProjects from "./components/LandingProjects";
export default function Home() {
	const segmentRef = useRef<HTMLDivElement>(null)
	const lottieWindowRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!segmentRef.current || !lottieWindowRef.current) return;

			const scroll = window.scrollY;
			const rectSegment = segmentRef.current.getBoundingClientRect();
			const lottieWindow = lottieWindowRef.current;
			
			const offset = Math.round(rectSegment.top + scroll);
			const blob = document.querySelector(`.${styles.blob}`) as HTMLDivElement;

			if (!blob) return;
			const segmentSectionHeight = segmentRef.current.scrollHeight * 2;
			const windowHeight = window.innerHeight;

			const scrollY = (scroll - offset) / windowHeight;
			const percent = (scrollY - Math.floor(scrollY)) * 100;
			let pos;
			if (scroll >= offset && scroll <= offset + segmentSectionHeight - windowHeight) {
				if (scrollY <= 1) {
					pos = 50 - percent / 2;
				} else if (Math.floor(scrollY % 2) === 0) {
					pos = 100 - percent;
				} else {
					pos = percent;
				}
				blob.style.top = '50%';
				blob.style.left = `${Math.min(pos, 120)}%`;
			} 
			else if (scroll > offset + segmentSectionHeight - windowHeight) {
				blob.style.left = '120%';
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main className={styles.main}>
			<ScrollIndicator />
			{/* <SmoothScrollNav 
				sections={[
					{ id: 'landing', label: 'Home', offset: 0 },
					{ id: 'testimonials-section', label: 'Testimonials', offset: 80 },
					{ id: 'partners', label: 'Partners', offset: 80 },
					{ id: 'trending', label: 'Trending', offset: 80 },
					{ id: 'segment', label: 'Services', offset: 80 },
				]}
			/> */}
			<Landing />
			<Partners />
			<StatsSection />
		
			<LandingProjects/>
			
			
			<ExpertiseSection />
			
			<VideoTestimonial />
			<FAQ />
			<TrendingOld/>
			
			
			<Calendly />
		</main>
	);
}