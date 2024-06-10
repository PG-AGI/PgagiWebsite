// import Image from "next/image";
// import Link from "next/link";
// import { links, resources, socialList, services } from "@/utils/constants";
// import styles from "./footer.module.scss";
// import logo from '../assets/logo.png';

// export default function Footer() {
//     return (
//         <section className={styles.footer}>
//             <div className={styles.wrapper}>
//             <div className={styles.about}>
//                 <div className={styles.services}>
//                     <h6>Services</h6>
//                     {services.map((service, i) => (<span key={i}>{service}</span>))}
//                 </div>
//                     <div className={styles.list}>
//                         <h6>Resources</h6>
//                         {links.map((link, i) => (<span key={i}>{link}</span>))}
//                     </div>
//                     <div className={styles.company}>
//                         <h6>Company</h6>
//                         <span>
//                             <a href="https://pgagi.in/aboutus">About Us</a>
//                             <a href="https://x.com/PGAGI123?t=hAoqjn4ffAoYXjIp9yt-ug&s=09">Twitter</a>
//                             <a href="https://www.instagram.com/pgagi_pvt.ltd/">Instagram</a>
//                             <a href="https://www.linkedin.com/company/pg-agi/">LinkedIn</a>
//                             <a href="https://youtube.com/@pg-agi?feature=shared">Youtube</a>
//                         </span>
//                     </div>
//                     <div className={styles.signUp}>
//                         <h6>Sign up for our newsletter to stay up to date</h6>
//                         <span className={styles.input}>
//                             <input type="text" title="Your Email Id......"></input>
//                         </span>
//                     </div>
//                 </div>
                              
//             </div>
//             {/* <div className={styles.copyright}>
//                 Copyright©2024PG-AGI
//             </div> */}
//         </section>
//     );
// }
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { links, resources, socialList, services } from "@/utils/constants";
import styles from "./footer.module.scss";
import logo from '../assets/logo.png';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage("Successfully signed up for the newsletter!");
        setEmail("");
      } else {
        setMessage("Failed to sign up for the newsletter. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

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
            <form onSubmit={handleSubmit} className={styles.inputWithButton}>
              <input
                type="email"
                placeholder="Your Email ID..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <span className={styles.arrowIcon}>→</span>
              </button>
            </form>
            {message && <p>{message}</p>}
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