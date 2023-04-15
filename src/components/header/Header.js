import { useState } from "react";

import './Header.css'

const Header = () => {

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
        <header className='header'>
            {isOpen ? <div className='header_burger open' onClick={handleMenu}>
                <div className='header_bar'></div>
            </div> : <div className='header_burger' onClick={handleMenu}>
                <div className='header_bar'></div>
            </div>}
            
            <div className='header_container'>
                <nav className='header_nav' style={hideOrSwow}>
                    <div>
                        Logo
                    </div>
                    <ul className='header_navlist'>
                        <li className='header_navlink'>Опыт работы</li>
                        <li className='header_navlink'>О себе</li>
                        <li className='header_navlink'>Портфолио</li>
                    </ul>
                        <button className='header_button'>контакты</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;