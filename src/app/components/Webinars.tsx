import { webinarList } from "@/utils/constants";
import styles from './webinar.module.scss';

export default function Webinars() {
  
    return (
      <section className={styles.webinar}>
        <div className={styles.webinarHead}>
        <h3>{"Webinars and Events"}</h3>
        <button>View More</button>
        </div>
        
        <div className={styles.webinarList}>
          {webinarList.map((item, i) => (
            <div
              key={i}
              className={styles.webinarItem}
            >
              <div className={styles.content}>
                <h4>{item.type}</h4>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link}>
                <button>{item.status?'Enroll Now':'Coming Soon'}</button>
                </a>
              </div>
              <div className={styles.circle}></div>
            </div>
          ))}
  
        </div>
      </section>
    );
  }
  