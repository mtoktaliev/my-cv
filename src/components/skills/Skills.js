import styles from './Skills.module.css'
import reactIcon from '../../assets/images/react.png'
import js from '../../assets/images/js.png'
import html from '../../assets/images/html.png'
import fga from '../../assets/images/fga.png'
import ps from '../../assets/images/ps.png'
import ai from '../../assets/images/ai.png'
import gwd from '../../assets/images/gwd.png'
import ae from '../../assets/images/ae.png'
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const Skills = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    return (
        <section id='skills' className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
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
                <div ref={ref} className={inView ? classNames(styles.animation, styles.show, styles.cards) : classNames(styles.animation, styles.cards)}>
                    <div className={styles.card}>
                        <img src={reactIcon} alt="reactIcon" />
                        <p className={styles.desc}>React JS</p>
                    </div>
                    <div className={styles.card}>
                        <img src={js} alt="js" />
                        <p className={styles.desc}>JavaScript</p>
                    </div>
                    <div className={styles.card}>
                        <img src={html} alt="html" />
                        <p className={styles.desc}>Html</p>
                    </div>
                    <div className={styles.card}>
                        <img src={fga} alt="fga" />
                        <p className={styles.desc}>Figma</p>
                    </div>
                    <div className={styles.card}>
                        <img src={ps} alt="ps" />
                        <p className={styles.desc}>Adobe Photoshop</p>
                    </div>
                    <div className={styles.card}>
                        <img src={ai} alt="ai" />
                        <p className={styles.desc}>Adobe illustrator</p>
                    </div>
                    <div className={styles.card}>
                        <img src={gwd} alt="gwd" />
                        <p className={styles.desc}>Google Web Designer</p>
                    </div>
                    <div className={styles.card}>
                        <img src={ae} alt="ae" />
                        <p className={styles.desc}>Adobe After Effects</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;