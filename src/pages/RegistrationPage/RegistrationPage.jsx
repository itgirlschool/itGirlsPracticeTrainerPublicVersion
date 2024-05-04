import {useForm} from "react-hook-form";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/userSlices.js";
import {useAddData,} from "../../Services/Firebade_realTime/services.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import './RegistrationPage.scss'


export default function RegistrationPage({setShowInfo, burger}) {
    const [existingEmail, setExistingEmail] = useState(false)
    const [existingPhone, setExistingPhone] = useState(false)
    const {register, trigger, watch, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const password = useRef({});
    password.current = watch("password", "");
    const mutation = useAddData()


    function onSubmit(data) {
        //!! Не трогать.
       // const myHeaders = new Headers();
        //myHeaders.append("apikey", "yKYpvFjCMlXTiVrX1Wgk2bGvA7TPCPV5");
        //const requestOptions = {
          //  method: 'GET',
           // redirect: 'follow',
           // headers: myHeaders
        //};
        //fetch(`https://api.apilayer.com/number_verification/validate?number=${data.phone}`, requestOptions)
          //  .then(response => response.text())
            //.then(result => {
               // if (JSON.parse(result).valid) {
               // }
          //  })
        // .catch(error => console.log('error', error));



        const auth = getAuth()
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                const infoUser = {
                    displayName: data.lastName + '' + data.firstName,
                    password: data.password,
                    email: data.email,
                    phone: data.phone,
                    token: user.user.accessToken
                }
                mutation.mutate(infoUser)
            })
            .then((currentUser) => {
                dispatch(setUser(currentUser))
                updateProfile(auth.currentUser, {
                    displayName: data.firstName + ' ' + data.lastName
                }).catch(e => console.error(e))
            })
            .catch(e => {
                console.error(e)
                setExistingEmail(true)
                setExistingPhone(true)
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
                <div className={`form-row ${errors?.email && 'red'}`}>
                    {existingPhone && <h2 className='error-phone red'>Укажите корректный номер телефона с кодом</h2>}
                    <input type="phone" placeholder="Ваш номер телефона" {...register("phone", {
                        required: true,
                    })} id='phone' onChange={() => {
                        if (existingPhone) setExistingPhone(false)
                    }}/>
                </div>

                <div className={`form-row ${errors?.password && 'red'}`}>
                    <input type="password" placeholder="Ваш пароль" {...register("password", {
                        required: "Укажите пожалуйста пароль",
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
                </div>
            </form>

        </>
    )
}




