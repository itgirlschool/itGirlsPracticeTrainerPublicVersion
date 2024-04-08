import {useForm} from "react-hook-form";
import {useRef, useState} from "react";
import {sendSocial} from "../../common/authLogic/authProvider.js";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/userSlices.js";
import {useAddData,} from "../../Services/Firebade_realTime/services.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
} from "firebase/auth";
import line from '../../assets/images/line.png'
import github from '../../assets/images/icons/github-new.png'
import google from '../../assets/images/icons/google-new.png'
import './RegistrationPage.scss'



export default function RegistrationPage({setShowInfo, burger}) {
    const [existingEmail, setExistingEmail] = useState(false)
    const {register, trigger, watch, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const password = useRef({});
    password.current = watch("password", "");
    const auth = getAuth();

    const mutation = useAddData()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();






    function onSubmit(data) {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                const infoUser = {
                    displayName: data.lastName + '' + data.firstName,
                    password: data.password,
                    email: data.email,
                    token: user.user.accessToken
                }
                mutation.mutate(infoUser)
                return infoUser
            })
            .then((currentUser) => {
                dispatch(setUser(currentUser))
                console.log(displayName,)
            })
            .catch(e => {
                setExistingEmail(true)
            })
    }




    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="postcard">
                {existingEmail && <h2 className='error-email'>Пользователь с такой почтой уже есть в базе данных</h2>}
                <div className={`form-row ${errors?.email && 'red'}`}>
                    <input type="text" placeholder="Ваше имя" {...register("firstName", {
                        required: true,
                        maxLength: 80
                    })} id='firstName'/>
                </div>
                <div className={`form-row ${errors?.lastName && 'red'}`}>
                    <input type="text" placeholder="Ваша фамилия" {...register("lastName", {
                        required: true,
                        maxLength: 100
                    })} id='lastName'/>
                </div>
                <div className={`form-row ${errors?.email && 'red'}`}>
                    <input type="text" placeholder="Ваш Email" {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })} id='email' onChange={() => {
                        if (existingEmail) setExistingEmail(false)
                    }}/>
                </div>
                <div className={`form-row ${errors?.password && 'red'}`}>
                    <input type="password" placeholder="Ваш пароль" {...register("password", {
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            message: "Пароль должен содержать больше 8-ми символов."
                        }
                    })} id='pass'/>
                    {errors.password && <p className='text_err_message-pass'>{errors.password.message}</p>}
                </div>
                <div className={`form-row ${errors?.passwordReset && 'red'}`}>
                    <input type="password" placeholder="Повторите пароль" {...register("passwordReset", {
                        validate: value =>
                            value === password.current || "Пароли не совпадают"
                    })} id='pass-reset'/>
                    {errors.passwordReset && <p className='text_err_message-resPass'>{errors.passwordReset.message}</p>}
                </div>
                <div className='form-row submit'>
                    <input type="submit" value="Зарегистрироваться"/>
                    <div className='line'><img src={line} alt="line"/><Link className='link_reg' to='#'>Войти
                        через</Link><img src={line} alt="line"/></div>
                    <div className='submit__btns'>
                        <button className='google_btn' onClick={()=>sendSocial(dispatch,navigate,auth,googleProvider,mutation)}><img src={google} alt='google'/></button>
                        <button className='github_btn' onClick={()=>sendSocial(dispatch,navigate,auth,githubProvider,mutation)}><img src={github} alt='github'/></button>
                    </div>
                </div>
            </form>

        </>
    )
}




