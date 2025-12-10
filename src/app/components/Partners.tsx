import ais from '../assets/partners/ais3.png'
import hx from '../assets/partners/hx.png'
import social from '../assets/partners/social27.png'
import ciek from '../assets/partners/ciek2.png'
import aixl from '../assets/partners/aixl2.png'
import Marquee from "react-fast-marquee";
import o from '../assets/partners/o.png'
import logok from '../assets/partners/logo1.png'
import wcg from '../assets/partners/wcg-logo.png'
import fomo from '../assets/partners/fomo.png'
import tvc from '../assets/partners/TVClogo (1).png'
import Ms from '../assets/partners/logo_final_transparent.png'
// import Ms from '../assets/partners/Untitled-3_0001_logo_final_transparent.png'


import Image from "next/image";

import styles from "./partners.module.scss";

const images = [ais, hx, social, ciek, aixl, o, logok, wcg, fomo, tvc, Ms];

export default function Partners() {
    return (
        <section id="partners" className={styles.partners}>
            <h3>Our Trusted Partners</h3>

            <Marquee className={styles.marquee} speed={55} >
                <div className={styles.partnerList}>
                    {
                        images.map((image, i) => (
                            <div key={i} className={styles.card}>
                                <Image src={image} alt='Sponsored Partner' />
                            </div>
                        ))
                    }
                </div>
            </Marquee>


        </section>
    )
}
