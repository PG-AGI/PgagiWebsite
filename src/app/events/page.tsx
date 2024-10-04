import Image from 'next/image';
import styles from './events.module.scss';
import { eventsList } from '@/utils/constants';

export default function Webinars() {

    return (
        <div className={styles.eventsMain}>
            <div className={styles.eventPrevBar}>
                <a>{'<'}     Go back</a>
            </div>
            <div className={styles.eventsHead}>
            Webinars and Events
            </div>
            <div className={styles.eventsContainer}>
                <div className={styles.eventsListHead}>
                    <button className={styles.eventBtn}>Upcoming Events</button>
                    <button className={styles.eventBtnActive}>Recent Events</button>
                </div>
                <div className={styles.eventsList}>
                    {
                        eventsList.map((item,i)=>(
                            <div key={i} className={styles.eventItem}>
                                <div className={styles.eventDate}>
                                <span className={styles.month}><p>{item.date}</p> <hr/></span>
                                <span className={styles.day}>{item.day}</span>
                                
                            </div>
                            <div className={styles.eventContent}>
                                <Image src={item.Image} width={300} height={300} alt={item.title} className={styles.eventImage} />
                                <div className={styles.eventContentBox}>
                                <h3 className={styles.eventTitle}>{item.title}</h3>
                                <p className={styles.eventDescription}>{item.description}</p>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}