import "./SubscribeForm.scss";
import {useState} from "react";
import {validateEmail} from "./validateEmail.js";
import {sendEmail} from "./sendEmail.js";

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validateEmail(email);
        setError(error);
        if(!error) {
            sendEmail(email);
        }
        setEmail('');
        console.log(email)
    }

    return (
        <form className='form-container'>
            <h5 className='form-title'>Полезная рассылка</h5>
            <p className='form-text'>Подпишись, чтобы быть в курсе наших новостей, статей, акций и скидок.</p>
            <input
                className='form-input'
                placeholder='Твой e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                onFocus={()=>setError('')}
            />
            {error &&
                <p className='form-error'>{error}</p>
            }
            <button
                className='form-btn'
                type='submit'
                onClick={handleSubmit}
            >
                Подпишись
            </button>
        </form>
    )
}

export default SubscribeForm;
