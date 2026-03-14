import ais from '../assets/partners/ais3.png';
import hx from '../assets/partners/hx.png';
import social from '../assets/partners/social27.png';
import ciek from '../assets/partners/ciek2.png';
import aixl from '../assets/partners/aixl2.png';
import Marquee from "react-fast-marquee";
import o from '../assets/partners/o.png';
import logok from '../assets/partners/logo1.png';
import wcg from '../assets/partners/wcg-logo.png';
import fomo from '../assets/partners/fomo.png';
import tvc from '../assets/partners/TVClogo (1).png';
import Ms from '../assets/partners/logo_final_transparent.png';

import Image from "next/image";
import styles from "./partners.module.scss";

const partners = [
    { src: ais, alt: "AIS" },
    { src: wcg, alt: "WebCodeGenie" },
    { src: fomo, alt: "FOMO" },
    { src: tvc, alt: "The Valet Co." },
    { src: social, alt: "Social27" },
    { src: ciek, alt: "CIEK Solutions" },
    { src: Ms, alt: "MDL Design" },
    { src: logok, alt: "Partner Logo" },
    { src: o, alt: "O" },
    { src: hx, alt: "HX" },
    { src: aixl, alt: "AIXL" },
];

export default function Partners() {
    return (
        <div className={styles.partnersBar} aria-label="Trusted Partners">
            <Marquee
                className={styles.marquee}
                speed={50}
                gradient={false}
                autoFill
            >
                {partners.map((p, i) => (
                    <div key={i} className={styles.logoItem}>
                        <Image
                            src={p.src}
                            alt={p.alt}
                            height={32}
                            style={{ width: "auto", height: "clamp(22px, 3.5vh, 36px)" }}
                            loading="lazy"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
