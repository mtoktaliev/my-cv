import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import classNames from 'classnames';
import { AiTwotoneHome } from 'react-icons/ai'

import styles from './Header.module.css'

const Header = () => {

    const [scrollData, setScrollData] = useState({
        y: 0,
        lastY: 0,
    });

    const [showNav, setShowNav] = useState();

    useEffect(() => {
        const handleScroll = () => {
            setScrollData(prevState => {
                return {
                    y: window.scrollY,
                    lastY: prevState.y
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {

        if (scrollData.y > 150 && scrollData.y - scrollData.lastY > 0) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }, [scrollData])

    const [isOpen, setIsOpen] = useState(false);
    const [hideOrSwow, setHideOrShow] = useState({});

    const handleMenu = () => {
        setIsOpen((prev) => !prev)
        if(isOpen) {
            document.body.classList.remove(styles.body_hidden)
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                document.body.classList.add(styles.body_hidden)
                return {transform: 'translateX(0)'}
            })
        }
    }

    return (
        <header className={showNav ? classNames(styles.section, styles.hideSection) : styles.section}>
            {isOpen ? <div className={classNames(styles.burger, styles.open)} onClick={handleMenu}>
                <div className={styles.bar}></div>
            </div> : <div className={styles.burger} onClick={handleMenu}>
                <div className={styles.bar}></div>
            </div>}
            
            <div className={styles.container}>
                <nav className={styles.nav} style={hideOrSwow} onClick={handleMenu}>
                        <Link to='hero' smooth={true}><AiTwotoneHome className={styles.home} onClick={handleMenu} /></Link>
                    <ul className={styles.navlist}>
                        <Link to='skills' smooth={true} className={styles.navlink} onClick={handleMenu}>Навыки</Link>
                        <Link className={styles.navlink} onClick={handleMenu}>О себе</Link>
                        <Link className={styles.navlink} onClick={handleMenu}>Портфолио</Link>
                    </ul>
                        <button className={styles.button}>контакты</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;