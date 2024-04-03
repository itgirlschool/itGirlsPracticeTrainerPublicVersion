import { useState, useEffect } from "react";
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import SideBar from "../Header/SideBar/SideBar";
import Header from "../Header/Header";
import cat from '../../assets/images/cat.png';
import './Tabs.scss';

export default function Tabs({ setShowInfo, burger, showInfo }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            {showInfo && (burger ? <SideBar pageWrapId={"page-wrap"} outerContainerId={"app"} /> : <Header />)}
            <div className="log-reg-page">
                <div className="image">
                    <img src={cat} alt="cat" />
                </div>
                <div className="tabs">
                    <div className="tabs__button">
                        <button onClick={() => setActiveIndex(0)}>Войти</button>
                        <button onClick={() => setActiveIndex(1)}>Зарегистрироваться</button>
                    </div>
                    <div className="tabs__info">
                        {activeIndex === 0 && <LoginPage />}
                        {activeIndex === 1 && <RegistrationPage />}
                    </div>
                </div>
            </div>
        </div>
    )
}