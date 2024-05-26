import styles from "./segment.module.scss";
import clsx from "clsx";

export default function Segment (props: TSegmentProps) {
    const {type = 'middle', index, title, subtitle} = props;

    const SegmentClsx = clsx(
        styles.segment,
        type && styles[type],
    )

    return (
        <section className={SegmentClsx}>
            <div className={styles.window}>
                {
                    type === 'middle'
                    ? <h1 className={styles.hero}>{title}</h1>
                    : <>
                        <div className={styles.header}>
                            <p>phase</p>
                            <span>{index}</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.container}>
                                <h1>{title}</h1>
                                <p>{subtitle}</p>
                            </div>
                        </div>
                    </>
                    
                }
            </div>
        </section>
    )
}

type TSegmentProps = {
    type?: 'left' | 'middle' | 'right'
    index: number
    title: string
    subtitle?: string
}