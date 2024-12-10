'use client'
import Landing from "./components/Landing";
import Navigation from "./components/base/Navigation";
import Partners from "./components/Partners";
import styles from "./page.module.scss";
import Segment from "./components/base/Segment";
import GlareBackground from "./components/base/GlareBackground";
import { segmentList } from "@/utils/constants";
import Footer from "./components/Footer";
import Calendly from "./components/Calendly";
import { Lottie } from "xtreme-ui";
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import TrendingOld from "./components/trending_old";

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

			// Calculate the total height of the segment section, extended to 120%
			const segmentSectionHeight = segmentRef.current.scrollHeight * 2;
			const windowHeight = window.innerHeight;

			const scrollY = (scroll - offset) / windowHeight;
			const percent = (scrollY - Math.floor(scrollY)) * 100;
			let pos;

			// Check if scroll is within the extended segment section
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
			// Stop the blob at 120% when scrolling past the section
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
			<GlareBackground />
			<Navigation />
			<Landing />
			<Partners />
			<TrendingOld/>
			<section className={styles.segmentSection}>
				<div ref={lottieWindowRef} className={styles.lottieWindow}>
					<Lottie className={styles.blob} src="/blob.lottie" />
				</div>
				<div ref={segmentRef} className={styles.segmentList}>
					{segmentList.map((data, i) => (
						<Segment
							key={i}
							index={i}
							type={i === 0 ? "middle" : i % 2 === 0 ? "left" : "right"}
							title={data.title}
							subtitle={data.subtitle}
						/>
					))}
				</div>
			</section>
			<Calendly />
			<Footer />
		</main>
	);
}