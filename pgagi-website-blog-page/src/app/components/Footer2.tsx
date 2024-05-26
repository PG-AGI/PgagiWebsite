import Image from "next/image";
import Link from "next/link";
import { links, resources, services } from "../components/constants";
import styles from "./footer.module.scss";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.services}>
            <h6>Services</h6>
            {services.map((service, i) => (
              <span key={i}>{service}</span>
            ))}
          </div>
          <div className={styles.list}>
            <h6>Resources</h6>
            {links.map((link, i) => (
              <span key={i}>{link}</span>
            ))}
          </div>
          <div className={styles.company}>
            <h6>Company</h6>
            <span>
              <a href="https://pgagi.in/aboutus">About Us</a>
              <a href="https://x.com/PGAGI123?t=hAoqjn4ffAoYXjIp9yt-ug&s=09">Twitter</a>
              <a href="https://www.instagram.com/pgagi_pvt.ltd/">Instagram</a>
              <a href="https://www.linkedin.com/company/pg-agi/">LinkedIn</a>
              <a href="https://youtube.com/@pg-agi?feature=shared">Youtube</a>
            </span>
          </div>
          <div className={styles.signUp}>
    <h6>Sign up for our newsletter to stay up to date</h6>
    <div className={styles.inputWithButton}>
        <input type="text" placeholder="Your Email ID....." />
        <button type="submit">
            <span className={styles.arrowIcon}>→</span> {/* You can replace this with an SVG or icon font if you prefer */}
        </button>
    </div>
</div>
        </div>
      </div>
      <div className={styles.footerText}>
                <p className={styles.pgHidden}>Playing God With</p>
                <p className={styles.agiHidden}>AGI</p>

                <p className={styles.pg}>Playing God</p>
                <p className={styles.agi}>With AGI</p>
            
      </div>
      <div className={styles.copyright}> 
      <div className={styles.flexing}>
        <p>Copyright©2024</p>
        <p className={styles.right}>Privacy Policy</p>
        </div>      
      </div>
    </section>
  );
}