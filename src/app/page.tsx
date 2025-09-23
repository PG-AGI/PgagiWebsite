'use client'
import Landing from "./components/Landing";
import styles from "./page.module.scss";
import Segment from "./components/base/Segment";
import GlareBackground from "./components/base/GlareBackground";
import { segmentList } from "@/utils/constants";
import { useEffect, useRef, useCallback } from "react";
import dynamic from 'next/dynamic';
//import { motion } from 'framer-motion';

const Partners = dynamic(() => import("./components/Partners"), { loading: () => <div>Loading...</div> });
const StatsSection = dynamic(() => import("./components/NewPage"), { loading: () => <div>Loading...</div> });
const Process = dynamic(() => import("./components/process"), { loading: () => <div>Loading...</div> });
const LandingProjects = dynamic(() => import("./components/LandingProjects"), { loading: () => <div>Loading...</div> });
const ExpertiseSection = dynamic(() => import("./components/ExpertiseSection"), { loading: () => <div>Loading...</div> });
const VideoTestimonial = dynamic(() => import("./components/VideoTestimonial"), { loading: () => <div>Loading...</div> });
const FAQ = dynamic(() => import("./components/FAQ"), { loading: () => <div>Loading...</div> });
const TrendingOld = dynamic(() => import("./components/trending_old"), { loading: () => <div>Loading...</div> });
const Calendly = dynamic(() => import("./components/Calendly"), { loading: () => <div>Loading...</div> });
const ScrollIndicator = dynamic(() => import("./components/ScrollIndicator"), { ssr: false, loading: () => <div>Loading...</div> });

export default function Home() {
	const segmentRef = useRef<HTMLDivElement>(null)
	const lottieWindowRef = useRef<HTMLDivElement>(null)
	const rafRef = useRef<number>()
	const isScrollingRef = useRef(false)

	// Throttled scroll handler using RAF
	const handleScroll = useCallback(() => {
		if (isScrollingRef.current) return;
		
		isScrollingRef.current = true;
		rafRef.current = requestAnimationFrame(() => {
			if (!segmentRef.current || !lottieWindowRef.current) {
				isScrollingRef.current = false;
				return;
			}

			const scroll = window.scrollY;
			const rectSegment = segmentRef.current.getBoundingClientRect();
			
			const offset = Math.round(rectSegment.top + scroll);
			const blob = document.querySelector(`.${styles.blob}`) as HTMLDivElement;

			if (!blob) {
				isScrollingRef.current = false;
				return;
			}
			
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
				blob.style.transform = `translate(${Math.min(pos, 120)}%, -50%)`;
			} else if (scroll > offset + segmentSectionHeight - windowHeight) {
				blob.style.transform = `translate(120%, -50%)`;
			}
			
			isScrollingRef.current = false;
		});
	}, []);

	useEffect(() => {
		// Use passive event listener for better performance
		window.addEventListener("scroll", handleScroll, { passive: true });
		
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
			}
		};
	}, [handleScroll]);

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
			<Process />
			<LandingProjects/>
			
			
			<ExpertiseSection />
			
			<VideoTestimonial />
			<FAQ />
			<TrendingOld/>
			
			
			<Calendly />
		</main>
	);
}