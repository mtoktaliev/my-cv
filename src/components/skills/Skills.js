import styles from './Skills.module.css'

const Skills = () => {
    return (
        <>
        <section id='skills' className={styles.section}>
            <div className={styles.content}>
            <div className={styles.container}>
                <p className={styles.text}>
                Навыки
                </p>
                
                <ul className={styles.list}>
                    <li className={styles.item}>React JS !</li>
                    <li className={styles.item}>HTML !</li>
                    <li className={styles.item}>CSS !</li>
                    <li className={styles.item}>JavaScript !</li>
                </ul>
            </div>
            </div>
        </section>
        </>
    );
};

export default Skills;