import styles from './Skills.module.css'
import reactIcon from '../../assets/images/react.png'
import js from '../../assets/images/js.png'
import html from '../../assets/images/html.png'
import fga from '../../assets/images/fga.png'
import ps from '../../assets/images/ps.png'
import ai from '../../assets/images/ai.png'
import gwd from '../../assets/images/gwd.png'
import ae from '../../assets/images/ae.png'
import { motion } from "framer-motion";

const Skills = () => {

    const blockAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.1 },
        }),
    }

    return (
        <motion.section 
        id='skills' 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        >
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
                <div className={styles.cards}>
                    <motion.div className={styles.card} custom={1} variants={blockAnimation}>
                        <img src={reactIcon} alt="reactIcon" />
                        <p className={styles.desc}>React JS</p>
                    </motion.div>
                    <motion.div className={styles.card} custom={2} variants={blockAnimation}>
                        <img src={js} alt="js" />
                        <p className={styles.desc}>JavaScript</p>
                    </motion.div>
                    <motion.div className={styles.card} custom={3} variants={blockAnimation}>
                        <img src={html} alt="html" />
                        <p className={styles.desc}>Html</p>
                    </motion.div>
                    <motion.div className={styles.card} custom={4} variants={blockAnimation}>
                        <img src={fga} alt="fga" />
                        <p className={styles.desc}>Figma</p>
                    </motion.div>
                    <motion.div className={styles.card} custom={5} variants={blockAnimation}>
                        <img src={ps} alt="ps" />
                        <p className={styles.desc}>Adobe Photoshop</p>
                    </motion.div>
                    <motion.div className={styles.card} custom={6} variants={blockAnimation}>
                        <img src={ai} alt="ai" />
                        <p className={styles.desc}>Adobe illustrator</p>
                    </motion.div>
                    <motion.div className={styles.card} custom={7} variants={blockAnimation}>
                        <img src={gwd} alt="gwd" />
                        <p className={styles.desc}>Google Web Designer</p>
                    </motion.div>
                    <motion.div className={styles.card} custom={8} variants={blockAnimation}>
                        <img src={ae} alt="ae" />
                        <p className={styles.desc}>Adobe After Effects</p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;