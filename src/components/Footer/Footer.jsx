import {Link} from "react-router-dom";
import telegramIcon from '../../assets/images/icon-telegram-app.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import vkIcon from '../../assets/images/icon-vk.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';
import SubscribeForm from "./SubscribeForm/SubscribeForm.jsx";
import "./Footer.scss";

const Footer = () =>{
    return(
        <footer className='footer-container'>
            <div  className='footer-info-container'>
                <p className='footer-info'>© 2023 ITGIRLSCHOOL</p>
                <p className='footer-info'>
                    Школа IT-профессий <br/>
                    для девушек
                </p>
                <Link className='footer-link' to='https://t.me/itgirlschool'>https://t.me/itgirlschool</Link>
                <Link className='footer-link' to='https://itgirlschool.com/'>itgirlschool.com</Link>
            </div>

            <div>
                <SubscribeForm/>
            </div>

            <div className='footer-contacts'>
                <h5 className='footer-title'>Полезное</h5>
                <nav className='footer-nav'>
                    <Link
                        to='https://itgirlschool.com/consultationit'
                        className='footer-link-info'
                    >Карьерная консультация</Link>
                    <Link
                        to='https://itgirlschool.com/map'
                        className='footer-link-info'
                    >Карта курсов</Link>
                    <Link
                        to='https://itgirlschool.com/career-center'
                        className='footer-link-info'
                    >Центр Карьеры</Link>
                    <Link
                        to='https://itgirlschool.com/'
                        className='footer-link-info'
                    >Обучение</Link>
                    <Link
                        to="https://itgirlschool.com/club"
                        className='footer-link-info'
                    >Клуб #ITGIRLS</Link>
                    <Link
                        to='https://itgirlschool.com/paymentampbonuses'
                        className='footer-link-info'
                    >Способы оплаты и бонусы</Link>
                    <Link
                        to='https://itgirlschool.com/blog'
                        className='footer-link-info'
                    >Блог</Link>
                </nav>
                <div className='footer-icons'>
                    <Link to='https://t.me/+rqyYsLbObxoyNzFi'>
                        <img className='footer-icon' src={telegramIcon}/>
                    </Link>
                    <Link to='https://www.facebook.com/itgirlschool'>
                        <img className='footer-icon' src={facebookIcon}/>
                    </Link>
                    <Link to='https://www.instagram.com/itgirlschool'>
                        <img className='footer-icon' src={instagramIcon}/>
                    </Link>
                    <Link to='https://vk.com/itgirlschool'>
                        <img className='footer-icon' src={vkIcon}/>
                    </Link>
                    <Link to='https://www.youtube.com/@itgirlschool'>
                        <img className='footer-icon' src={youtubeIcon}/>
                    </Link>
                </div>
            </div>

            <div className='footer-license'>
                <h5 className='footer-title'>Информация</h5>
                <nav className='footer-nav'>
                    <Link
                        to='https://itgirlschool.com/consultationit'
                        className='footer-link-info'
                    >Карьерная консультация</Link>
                    <Link
                        to='https://itgirlschool.com/map'
                        className='footer-link-info'
                    >Карта курсов</Link>
                    <Link
                        to='https://itgirlschool.com/career-center'
                        className='footer-link-info'
                    >Центр Карьеры</Link>
                    <Link
                        to='https://itgirlschool.com/'
                        className='footer-link-info'
                    >Обучение</Link>
                </nav>
                <p>Образовательная лицензия <br/>
                    №Л035-01224-40/00646358
                </p>
                <p>ОГРНИП 312774604000333  <br/>
                    ИНН 772155768427
                </p>
            </div>
        </footer>
    )
}
export default Footer;