import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import SideBar from "../../components/Header/SideBar/SideBar.jsx";
import Header from "../../components/Header/Header.jsx";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlices.js";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import line from '../../assets/images/line.png'
import github from '../../assets/images/icons/github-new.png'
import google from '../../assets/images/icons/google-new.png'
import './RegistrationPage.scss'

export default function RegistrationPage({ setShowInfo, burger }) {
    const { register, trigger, watch, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const password = useRef({});
    password.current = watch("password", "");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    function sendGoogle() {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // Обработка успешной аутентификации через Google
                const user = result.user;
                console.log("Google User:", user);
                navigate('/home');
            })
            .catch((error) => {
                // Обработка ошибок аутентификации
                console.error("Google Auth Error:", error);
            });
    }

    function sendGithub() {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // Обработка успешной аутентификации через GitHub
                const user = result.user;
                console.log("GitHub User:", user);
                navigate('/home');
            })
            .catch((error) => {
                // Обработка ошибок аутентификации
                console.error("GitHub Auth Error:", error);
            });
    }


    // useEffect(() => {
    //     setShowInfo(false)
    //     return () => setShowInfo(true)
    // }, []);

    function onSubmit(data) {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, data.email, data.password).then(() => {
            updateProfile(auth.currentUser, {
                displayName: data.firstName + ' ' + data.lastName
            }).then(() => {
                navigate('/home')
            })
                .catch((error) => console.error(error))
        }).catch(e => console.log(e))
    }

    return (
        <>{/*{burger ? <SideBar pageWrapId={"page-wrap"} outerContainerId={"app"} /> : <Header />}*/}
            <form onSubmit={handleSubmit(onSubmit)} className="postcard">
                {/*<h3> Регистрация учетной записи</h3>*/}
                <div className={`form-row ${errors?.email && 'red'}`}>
                    <input type="text" placeholder="Ваше имя" {...register("firstName", {
                        required: true,
                        maxLength: 80
                    })} id='firstName' />
                </div>
                <div className={`form-row ${errors?.lastName && 'red'}`}>
                    <input type="text" placeholder="Ваша фамилия" {...register("lastName", {
                        required: true,
                        maxLength: 100
                    })} id='lastName' />
                </div>
                <div className={`form-row ${errors?.email && 'red'}`}>
                    <input type="text" placeholder="Ваш Email" {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })} id='email' />
                </div>
                <div className={`form-row ${errors?.password && 'red'}`}>
                    <input type="password" placeholder="Ваш пароль" {...register("password", {
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            message: "Пароль должен содержать больше 8-ми символов."
                        }
                    })} id='pass' />
                    {errors.password && <p className='text_err_message-pass'>{errors.password.message}</p>}
                </div>
                <div className={`form-row ${errors?.passwordReset && 'red'}`}>
                    <input type="password" placeholder="Повторите пароль" {...register("passwordReset", {
                        validate: value =>
                            value === password.current || "Пароли не совпадают"
                    })} id='pass-reset' />
                    {errors.passwordReset && <p className='text_err_message-resPass' >{errors.passwordReset.message}</p>}
                </div>
                <div className='form-row submit'>
                    <input type="submit" value="Зарегистрироваться" />
                    <div className='line'><img src={line} alt="line" /><Link className='link_reg' to='/login'>Войти через</Link><img src={line} alt="line" /></div>
                    <div className='submit__btns'>
                        <button className='google_btn' onClick={sendGoogle} ><img src={google} alt='google' /></button>
                        <button className='github_btn' onClick={sendGithub} ><img src={github} alt='github' /></button>
                    </div>
                </div>
            </form>

        </>
    )
}




