import { useState } from "react";
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { RegistrationPage } from '../../pages/RegistrationPage/RegistrationPage';

export default function Tabs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div>
                <button onClick={() => setActiveIndex(0)}>Зарегистрироваться</button>
                <button onClick={() => setActiveIndex(1)}>Войти</button>
            </div>
            <div>
                {activeIndex === 0 && <LoginPage />}
                {activeIndex === 1 && <RegistrationPage />}
            </div>
        </div>
    )
}