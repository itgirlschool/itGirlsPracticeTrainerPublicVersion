import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {addRulesStatusIndexedBD} from "../../../common/servicesIndexdBD/lessonsIndexedBD.js";
import "./RulesPage.scss";

const RulesPage = () => {
    const navigate = useNavigate();
    const [acceptedRules, setAcceptedRules] = useState(false);

    return (
        <div className='rules-container'>
            <h2 className='rules-title'>Правила пользования практикумом</h2>
            <p className='rules-note'>!!! Прежде чем приступить к выполнению заданий, внимательно ознакомься с правилами
                использования практикума. Это поможет тебе избежать множество ошибок, а проверка твоего кода будет более
                качественная.</p>
            <p className='rules-text'>
                1. Для обозначения строк всегда используй только одинарные кавычки.
            </p>
            <p className='rules-text'>
                2. Избегай лишних пробелов, это может спровоцировать неправильную проверку твоего кода.
            </p>
            <p className='rules-text'>
                2. Не используй точку с запятой в конце строк.
            </p>

            <div className='rules-checkbox-container'>
                <label className='rules-label'>
                    <input
                        className='rules-input'
                        type='checkbox'
                        onChange={()=>setAcceptedRules(!acceptedRules)}
                    />
                    С правилами ознакомилась
                </label>

            </div>
            <div className='rules-btn-container'>
                <button
                    className='rules-btn'
                    onClick={async ()=> {
                         await addRulesStatusIndexedBD(true)
                        navigate(-1);
                    }}
                    disabled={!acceptedRules}
                >
                    Подтвердить
                </button>
            </div>
        </div>
    )
}
export default RulesPage;
