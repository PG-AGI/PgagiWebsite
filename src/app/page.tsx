'use client'

import Landing from "./components/Landing";
import Navigation from "./components/base/Navigation";
import Partners from "./components/Partners";
import Trending from "./components/Trending";
import styles from "./page.module.scss";
import Segment from "./components/base/Segment";
import GlareBackground from "./components/base/GlareBackground";
import { segmentList } from "@/utils/constants";
import Footer from "./components/Footer";
import Calendly from "./components/Calendly";
import { Lottie } from "xtreme-ui";
import { useEffect, useRef } from "react";

export default function Home() {
	const segmentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scroll = window.scrollY;
			if (!segmentRef.current) return;
			const rectSegment = segmentRef.current?.getBoundingClientRect()
			const offset = Math.round(rectSegment.top + scroll)
			const blob = document.querySelector(`.${styles.blob}`) as HTMLDivElement;

			if (!blob) return;
			const scrollY = (scroll - offset) / window.innerHeight;
			const percent = (scrollY - Math.floor(scrollY)) * 100;
			let pos;

			if (scroll >= offset && scroll <= offset + window.innerHeight * 5) {
				if (scrollY <= 1) pos = 50 - percent / 2
				else if (Math.floor(scrollY % 2) === 0) pos = 100 - percent
				else pos =  percent
				blob.style.top = '50%'
				blob.style.left = `${pos}%`;
			}
			if (scroll >= offset + window.innerHeight * 5 && scroll <= offset + window.innerHeight * 6) {
				pos =  percent
				if (percent > 80) blob.style.top = `${50 + (percent - 80)}%`;
				else blob.style.top = '50%'
				blob.style.left = `${pos}%`;
			}
		});
	}, []);

	return (
		<main className={styles.main}>
			<GlareBackground />
			<Navigation />
			<Landing />
			<Partners />
			<Trending />
			<section className={styles.segmentSection}>
				<div className={styles.lottieWindow}>
					<Lottie className={styles.blob} src="/blob.lottie" />
				</div>
				<div ref={segmentRef} className={styles.segmentList}>
					{segmentList.map((data, i) => (
						<Segment
							key={i}
							index={i}
							type={ i === 0 ? "middle" : i % 2 === 0 ? "left" : "right" }
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
