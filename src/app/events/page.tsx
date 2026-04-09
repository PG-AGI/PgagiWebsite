'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/app/events/events.module.scss';
import { eventsList } from '@/utils/events';
import ROUTES from '@/constants/routes';

export default function Webinars() {
    const [filterType, setFilterType] = useState('upcoming');

    // Function to parse date strings in the format "DD,MONTH,YEAR"
    const parseEventDate = (dateStr:string) => {
        const [day, month, year] = dateStr.split(',');
        return new Date(`${month} ${day}, ${year}`);
    };

    // Filtering upcoming events
    const upcomingEvents = eventsList.filter((event) => {
        const eventDate = parseEventDate(event.date);
        return eventDate >= new Date(); // Date is today or later
    });

    // Filtering recent events
    const recentEvents = eventsList.filter((event) => {
        const eventDate = parseEventDate(event.date);
        return eventDate < new Date(); // Date is in the past
    });

    // Decide which events to show based on the filter type
    const filteredEvents = filterType === 'upcoming' ? upcomingEvents : recentEvents;

    return (
        <div className={styles.eventsMain}>
            <div className={styles.eventPrevBar}>
                <a href={ROUTES.HOME}>{'<'} Go back</a>
            </div>
            <div className={styles.eventsHead}>
                Webinars and Events
            </div>
            <div className={styles.eventsContainer}>
                <div className={styles.eventsListHead}>
                    <button
                        className={filterType === 'upcoming' ? styles.eventBtnActive : styles.eventBtn}
                        onClick={() => setFilterType('upcoming')}
                    >
                        Upcoming Events
                    </button>
                    <button
                        className={filterType === 'recent' ? styles.eventBtnActive : styles.eventBtn}
                        onClick={() => setFilterType('recent')}
                    >
                        Recent Events
                    </button>
                </div>
                <div className={styles.eventsList}>
                    {filteredEvents.map((item, i) => (
                        <div key={i} className={styles.eventItem}>
                            <div className={styles.eventDate}>
                                <span className={styles.month}>
                                    <p>{item.date}</p>
                                    <hr />
                                </span>
                                <span className={styles.day}>{item.day}</span>
                            </div>
                            <div className={styles.eventContent}>
                                <Image src={item.image} width={300} height={300} alt={item.title} className={styles.eventImage} />
                                <div className={styles.eventContentBox}>
                                    <a href={item.link}>
                                        <h3 className={styles.eventTitle}>{item.title}</h3>
                                    </a>
                                    <p className={styles.eventDescription}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
