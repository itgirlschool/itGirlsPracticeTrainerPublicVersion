import { useState, useEffect } from "react";
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';

export default function Tabs({ setShowInfo }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div>
                <button onClick={() => setActiveIndex(0)}>Войти</button>
                <button onClick={() => setActiveIndex(1)}>Зарегистрироваться</button>
            </div>
            <div>
                {activeIndex === 0 && <LoginPage />}
                {activeIndex === 1 && <RegistrationPage />}
            </div>
        </div>
    )
}