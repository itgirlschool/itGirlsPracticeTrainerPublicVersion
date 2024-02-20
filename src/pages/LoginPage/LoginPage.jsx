import {useForm} from 'react-hook-form';
import './LoginPage.scss'
import {useEffect} from "react";
import SideBar from "../../components/Header/SideBar/SideBar.jsx";
import Header from "../../components/Header/Header.jsx";
import {Link,useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/userSlices.js";
import {getAuth,signInWithEmailAndPassword,updateProfile} from 'firebase/auth'


export default function LoginPage({setShowInfo, burger}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors},getValues,watch} = useForm();

    function onSubmit (data){
        const  auth = getAuth()
        signInWithEmailAndPassword(auth,data.email,data.password)
            .then((user)=>{
                navigate('/')
            })
            .catch((error)=> console.error(error))
    }






    useEffect(() => {
        setShowInfo(false)
        return () => setShowInfo(true)
    }, []);

    return (
        <>
            {burger ? <SideBar pageWrapId={"page-wrap"} outerContainerId={"app"}/> : <Header/>}
            <form onSubmit={handleSubmit(onSubmit)} className="postcard">
                <h3> Войти в у четную запись тренажера</h3>
                <div className={`form-row ${errors?.email &&  'red'}`}>
                    <label htmlFor="email">Ваш Email</label>
                    <input type="text"  placeholder="email" id="email" {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })} />
                </div>
                <div className={`form-row ${errors?.pass &&  'red'}`}>
                    <label htmlFor="pass">Ваш пароль</label>
                    <input type="password" placeholder="Password" {...register("password", {
                        required: true,
                        pattern: '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    })} id='pass'/>
                </div>


                <div className='form-row submit'>
                    <input type="submit" value="Войти"/>
                    <Link className='link_reg' to='/registration'>Зарегистрироваться</Link>
                </div>
            </form>

        </>
    )
}
