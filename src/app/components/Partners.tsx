// import ais from "../assets/partners/ais3.png";
// import hx from "../assets/partners/hx.png";
// import social from "../assets/partners/social27.png";
// import ciek from "../assets/partners/ciek2.png";
// import aixl from "../assets/partners/aixl2.png";
// import Marquee from "react-fast-marquee";
// import o from "../assets/partners/o.png";
// import logok from "../assets/partners/logok.png";
// import wcg from "../assets/partners/wcg-logo.png";
// import fomo from "../assets/partners/fomo.png";

// import Image from "next/image";

// import styles from "./partners.module.scss";

// const images = [ais, hx, social, ciek, aixl, o, logok, wcg, fomo];

// export default function Partners() {
//   return (
//     <section id="partners" className={styles.partners}>
//       <h3>Partnered with Innovators like</h3>

//       <Marquee className={styles.marquee} speed={55}>
//         <div className={styles.partnerList}>
//           {images.map((image, i) => (
//             <Image key={i} src={image} alt="Sponsored Partner" />
//           ))}
//         </div>
//       </Marquee>
//     </section>
//   );
// }

import ais from "../assets/partners/ais3.png";
import hx from "../assets/partners/hx.png";
import social from "../assets/partners/social27.png";
import ciek from "../assets/partners/ciek2.png";
import aixl from "../assets/partners/aixl2.png";
import o from "../assets/partners/o.png";
import logok from "../assets/partners/logok.png";
import wcg from "../assets/partners/wcg-logo.png";
import fomo from "../assets/partners/fomo.png";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./partners.module.scss";

const images = [ais, hx, social, ciek, aixl, o, logok, wcg, fomo];

export default function Partners() {
  return (
    <section id="partners" className={styles.partners}>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Partnered with Innovators like
      </motion.h3>

      <Marquee className={styles.marquee} speed={55} gradient={false}>
        <div className={styles.partnerList}>
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className={styles.partnerItem}
            >
              <Image src={image} alt="Sponsored Partner" />
            </motion.div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
