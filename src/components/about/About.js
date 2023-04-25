import styles from './About.module.css'

const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>О себе</h2>
                <div className={styles.inner}>
                    <div className={styles.items}>
                        <h3 className={styles.subtitle}>Коротко о себе</h3>
                        <div className={styles.item}>37 лет, г. Бишкек, женат</div>
                        <div className={styles.item}>
                            <h3 className={styles.subtitle}>Образование</h3>
                            <p className={styles.header}>2002-2007, КНУ</p>
                            <p className={styles.desc}>Информационные системы в управлении</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.header}>2022, IT-школа MegaCom</p>
                            <p className={styles.desc}>Frontend разработка</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.header}>2023, MegaLab</p>
                            <p className={styles.desc}>Проект по созданию сайт-приложения</p>
                        </div>
                        <div className={styles.item}>
                            <h3 className={styles.subtitle}>Личные качества</h3>
                            <p className={styles.desc}>Ответсвенный, пунктуальный, целеустремленный</p>
                            <p className={styles.desc}>Легко обучаюсь, желание работать и развиватся</p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <h3 className={styles.subtitle}>Опыт работы</h3>
                            <p className={styles.header}>2005–2007</p>
                            <p className={styles.desc}>ОАО “Учкун”, дизайнер</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.header}>2007–2008</p>
                            <p className={styles.desc}>ЗАО “ПромСтройБанк”, специалист обслуживания юр. лиц</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.header}>2012–2018</p>
                            <p className={styles.desc}>ОсОО “KIRLand”, дизайнер</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.header}>2018–2019</p>
                            <p className={styles.desc}>ЗАО “ЭкоИсламикБанк”, ведущий специалист отдела маркетинга</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.header}>2019–2023</p>
                            <p className={styles.desc}>MegaCom, старщий специалист по визуализации</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.header}>2023–...</p>
                            <p className={styles.desc}>Стажер отдела разработок MegaCom</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;