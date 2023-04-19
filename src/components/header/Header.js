import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

import './Header.css'

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
        // if (scrollData.y > 500) {
        //     setShowNav(true)
        // } else {
        //     setShowNav(false)
        // }

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
            document.body.classList.remove('body_hidden')
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                document.body.classList.add('body_hidden')
                return {transform: 'translateX(0)'}
            })
        }
    }

    return (
        <header className={showNav ? 'header hideHeader' : 'header'}>
            {isOpen ? <div className='header_burger open' onClick={handleMenu}>
                <div className='header_bar'></div>
            </div> : <div className='header_burger' onClick={handleMenu}>
                <div className='header_bar'></div>
            </div>}
            
            <div className='header_container'>
                <nav className='header_nav' style={hideOrSwow} onClick={handleMenu}>
                    <div>
                        Logo
                    </div>
                    <ul className='header_navlist'>
                        <Link to='skills' smooth={true} className='header_navlink' onClick={handleMenu}>Навыки</Link>
                        <Link className='header_navlink' onClick={handleMenu}>О себе</Link>
                        <Link className='header_navlink' onClick={handleMenu}>Портфолио</Link>
                    </ul>
                        <button className='header_button'>контакты</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;