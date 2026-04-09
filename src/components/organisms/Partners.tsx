const ais = '/assets/partners/ais3.png';
const hx = '/assets/partners/hx.png';
const social = '/assets/partners/social27.png';
const ciek = '/assets/partners/ciek2.png';
const aixl = '/assets/partners/aixl2.png';
import Marquee from "react-fast-marquee";
const o = '/assets/partners/o.png';
const logok = '/assets/partners/logo1.png';
const wcg = '/assets/partners/wcg-logo.png';
const fomo = '/assets/partners/fomo.png';
const tvc = '/assets/partners/TVClogo (1).png';
const Ms = '/assets/partners/logo_final_transparent.png';
import Image from "next/image";
import styles from "@/styles/components/organisms/partners.module.scss";
import partnersText from "@/constants/uiText/partners.json";

const partners = [
    { src: ais, alt: partnersText.items[0].alt },
    { src: wcg, alt: partnersText.items[1].alt },
    { src: fomo, alt: partnersText.items[2].alt },
    { src: tvc, alt: partnersText.items[3].alt },
    { src: social, alt: partnersText.items[4].alt },
    { src: ciek, alt: partnersText.items[5].alt },
    { src: Ms, alt: partnersText.items[6].alt },
    { src: logok, alt: partnersText.items[7].alt },
    { src: o, alt: partnersText.items[8].alt },
    { src: hx, alt: partnersText.items[9].alt },
    { src: aixl, alt: partnersText.items[10].alt },
];

export default function Partners() {
    return (
        <div className={styles.partnersBar} aria-label={partnersText.sectionAriaLabel}>
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
                            width={120}
                            height={32}
                            className={styles.logoImage}
                            loading="lazy"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
