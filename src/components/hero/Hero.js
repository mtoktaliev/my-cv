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
                    <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer'>
                        <button className='hero_button'><AiOutlineWhatsApp style={{fontSize: '20px'}}/>&nbsp;написать</button>
                        </a>
                </div>
                <div className="hero_img">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;