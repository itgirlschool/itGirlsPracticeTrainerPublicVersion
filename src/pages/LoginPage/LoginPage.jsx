import { useForm } from 'react-hook-form';
import './LoginPage.scss'
import { useEffect, useState } from "react";
import SideBar from "../../components/Header/SideBar/SideBar.jsx";
import Header from "../../components/Header/Header.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import github from '../../assets/images/icons/github.png'
import google from '../../assets/images/icons/google.png'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'


export default function LoginPage({ setShowInfo, burger }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errLogin, setErrorLogin] = useState(false)
    const { register, handleSubmit, formState: { errors }, getValues, watch } = useForm();
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    function onSubmit(data) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                navigate('/home')
            })
            .catch((error) => {

            })
    }
    function sendGoogle() {
        signInWithPopup(auth, provider).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user, token)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(credential)
        })
    }
    function sendGithub() {
        signInWithPopup(auth, provider)
            .then(result => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GithubAuthProvider.credentialFromError(error);
            })
    }




    // useEffect(() => {
    //     setShowInfo(false)
    //     return () => setShowInfo(true)
    // }, []);

    return (
        <>{/*{burger ? <SideBar pageWrapId={"page-wrap"} outerContainerId={"app"} /> : <Header />}*/}
            <form onSubmit={handleSubmit(onSubmit)} className="postcard">
                <h3> Войти в у четную запись тренажера</h3>
                {errLogin && <h5 className='red erLogin'>Не верный логин или пароль</h5>}
                <div className={`form-row ${errors?.email && 'red'}`}>
                    <label htmlFor="email">Ваш Email</label>
                    <input type="text" placeholder="email" id="email" {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })} />
                </div>
                <div className={`form-row ${errors?.pass && 'red'}`}>
                    <label htmlFor="pass">Ваш пароль</label>
                    <input type="password" placeholder="Password" {...register("password", {
                        required: true,
                        pattern: '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    })} id='pass' />
                </div>


                <div className='form-row submit'>
                    <input type="submit" value="Войти" />
                    <Link className='link_reg' to='/registration'>Зарегистрироваться</Link>
                    <button className='google_btn' onClick={sendGoogle} ><img src={google} alt='google' /> <span>Войти через гугл</span></button>
                    <button className='github_btn' onClick={sendGithub} ><img src={github} alt='github' /> <span>Войти через gitHub</span></button>
                </div>
            </form>

        </>
    )
}
