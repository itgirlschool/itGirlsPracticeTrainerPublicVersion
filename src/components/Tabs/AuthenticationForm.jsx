import { useState, useEffect } from "react";
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import SideBar from "../Header/SideBar/SideBar";
import Header from "../Header/Header";
import cat from '../../assets/images/cat.png';
import salute from '../../assets/images/salute.png'
import './AuthenticationForm.scss';

export default function AuthenticationForm({ burger, showInfo }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedButton, setSelectedButton] = useState(0);

    useEffect(() => {
        setSelectedButton(activeIndex);
    }, [activeIndex]);

    return (
        <div>
            {showInfo && (burger ? <SideBar pageWrapId={"page-wrap"} outerContainerId={"app"} /> : <Header />)}
            <div className="log-reg-page">
                <div className="image">
                    <img src={cat} alt="cat" />
                </div>
                <div className={`auth ${activeIndex === 0 ? 'auth__log' : 'auth__reg'}`}>
                    <div className="auth__heading">
                        <img src={salute} alt="salute" />
                        {activeIndex === 0 && <h2><span>Войти</span> в учетную запись тренажера</h2>}
                        {activeIndex === 1 && <h2><span>Регистрация</span> учетной записи</h2>}
                    </div>
                    <div className="auth__button">
                        <button className={`btn ${selectedButton === 0 ? 'selected' : ''}`} onClick={() => setActiveIndex(0)}>Войти</button>
                        <button className={`btn ${selectedButton === 1 ? 'selected' : ''}`} onClick={() => setActiveIndex(1)}>Зарегистрироваться</button>
                    </div>
                    <div className="auth__info">
                        {activeIndex === 0 && <LoginPage />}
                        {activeIndex === 1 && <RegistrationPage />}
                    </div>
                </div>
            </div>
        </div>
    )
}