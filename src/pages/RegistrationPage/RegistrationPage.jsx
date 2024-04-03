import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import SideBar from "../../components/Header/SideBar/SideBar.jsx";
import Header from "../../components/Header/Header.jsx";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlices.js";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function RegistrationPage({ setShowInfo, burger }) {
    const { register, trigger, watch, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const password = useRef({});
    password.current = watch("password", "");



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
                <h3> Регистрация учетной записи</h3>
                <div className={`form-row ${errors?.email && 'red'}`}>
                    <label htmlFor="firstName">Ваше имя</label>
                    <input type="text" placeholder="First name" {...register("firstName", {
                        required: true,
                        maxLength: 80
                    })} id='firstName' />
                </div>
                <div className={`form-row ${errors?.lastName && 'red'}`}>
                    <label htmlFor="lastName">Ваша Фамилия</label>
                    <input type="text" placeholder="Last name" {...register("lastName", {
                        required: true,
                        maxLength: 100
                    })} id='lastName' />
                </div>
                <div className={`form-row ${errors?.email && 'red'}`}>
                    <label htmlFor="email">Ваша почта</label>
                    <input type="text" placeholder="Email" {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })} id='email' />
                </div>
                <div className={`form-row ${errors?.password && 'red'}`}>
                    <label htmlFor="pass">Ваш пароль</label>
                    <input type="password" placeholder="Password" {...register("password", {
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            message: "Пароль должен содержать больше 8-ми символов."
                        }
                    })} id='pass' />
                    {errors.password && <p className='text_err_message-pass'>{errors.password.message}</p>}
                </div>
                <div className={`form-row ${errors?.passwordReset && 'red'}`}>
                    <label htmlFor="pass-reset">Повторите пароль</label>
                    <input type="password" placeholder="Passwor reset" {...register("passwordReset", {
                        validate: value =>
                            value === password.current || "Пароли не совпадают"
                    })} id='pass-reset' />
                    {errors.passwordReset && <p className='text_err_message-resPass' >{errors.passwordReset.message}</p>}
                </div>
                <div className='form-row submit'>
                    <input type="submit" value="Зарегистрироваться" />
                    <Link className='link_reg' to='/login'>Авторизоваться</Link>
                </div>
            </form>

        </>
    )
}




