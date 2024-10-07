import Link from 'next/link';
import { webinarList } from "@/utils/events";
import styles from './webinar.module.scss';

export default function Webinars() {
  return (
    <section className={styles.webinar}>
      <div className={styles.webinarHead}>
        <h3>{"Webinars and Events"}</h3>
        <a href={'/events'}><button>View More</button></a>
      </div>
      
      <div className={styles.webinarList}>
        {webinarList.map((item) => (
          <div
            key={item.id}
            className={styles.webinarItem}
          >
            <div className={styles.content}>
              <h4>{item.type}</h4>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link href={item.link}>
                <button>{item.status ? 'Enroll Now' : 'Coming Soon'}</button>
              </Link>
            </div>
            <div className={styles.circle}></div>
          </div>
        ))}
      </div>
    </section>
  );
}