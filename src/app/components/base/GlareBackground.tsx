import styles from "./glareBackground.module.scss";

export default function GlareBackground () {
    return (
        <div className={styles.glareBackground}>
            <div className={styles.header}>
                <span className={styles.primary} />
                <span className={styles.secondary} />
            </div>
            <span className={styles.tertiary}/>
        </div>
    )
}