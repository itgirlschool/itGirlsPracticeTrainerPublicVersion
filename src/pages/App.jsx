import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState,memo } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Header from "../components/Header/Header.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import SideBar from "../components/Header/SideBar/SideBar.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import RegistrationPage from "./RegistrationPage/RegistrationPage.jsx";
import Spinner from "../components/Spinner/Spinner.jsx";
import PreLoaderApp from "../components/PreLoaderApp/PreLoaderApp.jsx";
import Home from "./Home/Home.jsx";
import HomePagePublic from "./PublicVersion/HomePagePublic/HomePagePublic.jsx";
import AuthenticationForm from "../components/Tabs/AuthenticationForm.jsx";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlices.js";

import "../styles/App.scss";
import 'normalize.css';
import {useGetData} from "../Services/Firebade_realTime/services.js";



function App() {
    const [burger, setBurger] = useState(false)
    const [showInfo, setShowInfo] = useState(true)
    const [disabledFooter, setDisabledFooter] = useState(true)
    const [loader, setLoader] = useState('loading')
    const {data,isLoading} = useGetData()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth();

    useEffect(() => {
        if (window.innerWidth < 1110) setBurger(true)
    }, [])
    useEffect(() => {

        onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                setLoader('uploaded')
                 navigate('/')
                return
            }
            //dispatch(setUser({
              //  email: currentUser.email,
                //token: currentUser.accessToken,
                //id: currentUser.uid,
                //nameUser: currentUser.displayName
            //}))
             navigate('/home')
            setLoader('uploaded')
        })
    }, [])

    if (loader === 'loading') {
        return <PreLoaderApp showInfo={showInfo} burger={burger} />
    }

    return (

        <div className="app" id='app'>
            {showInfo && (burger ? <SideBar pageWrapId={"page-wrap"} outerContainerId={"app"} /> : <Header />)}
            <div className={`content ${loader ? null : 'content_spinner'}`}>
                {loader === 'uploaded' ? <Routes>
                    <Route path='/login' element={<LoginPage allUsers={data} setShowInfo={setShowInfo} burger={burger} />} />
                    <Route path='/registration' element={<RegistrationPage allUsers={data} setShowInfo={setShowInfo} />} />
                    <Route path='/' element={<Home setShowInfo={setShowInfo} />} />
                    <Route path='/home' element={<HomePagePublic />} />
                    <Route path='/tabs' element={<AuthenticationForm />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                    :
                    <Spinner color={'rgb(234 93 128)'} />}
            </div>
        </div>

    );
}

export default  memo(App);
