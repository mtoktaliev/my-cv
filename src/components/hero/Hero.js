import image from '../../assets/images/001.png'
import './Hero.css'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero_container">
                <div className="hero_items">
                    <p className="hero_text">Максат Токталиев</p>
                    <h1 className="hero_title">Меня зовут Максат.<br/> Я начинающий<br/> front-end разработчик.</h1>
                    <a href='https://api.whatsapp.com/send?phone=996500273222' target='_blank' rel='noreferrer'>
                        <button className='hero_button'><AiOutlineWhatsApp style={{fontSize: '20px'}}/>&nbsp;написать</button>
                        </a>
                        <a href="tel:+996500273222">0500273222</a>
                </div>
                <div className="hero_img">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;