import image from '../../assets/images/001.png'
import resume from '../../assets/files/resume.pdf'
import './Hero.css'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { HiOutlineDownload } from 'react-icons/hi'

const Hero = () => {
    return (
        <section className='hero' id='hero'>
            <div className="hero_container">
                <div className="hero_items">
                    <p className="hero_text">Максат Токталиев</p>
                    <h1 className="hero_title">Меня зовут Максат.<br/> Я начинающий<br/> <span>front-end</span> разработчик.</h1>
                    <div className='hero_buttons'>
                    <a href='https://api.whatsapp.com/send?phone=996500273222' target='_blank' rel='noreferrer'>
                        <button className='hero_wabutton'><AiOutlineWhatsApp style={{fontSize: '20px'}}/>&nbsp;написать</button>
                    </a>
                    <a href={resume} download='resume' className='hero_dlbutton'><HiOutlineDownload style={{fontSize: '20px'}} />&nbsp;cкачать резюме</a>
                    </div>
                </div>
                <div className="hero_img">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;