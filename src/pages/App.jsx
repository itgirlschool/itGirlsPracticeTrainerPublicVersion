import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState,memo } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getAllUsers} from '../Services/Firebade_realTime/services.js';
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
import Admin from "./Admin/Admin.jsx";
import getCurrentUserId from "../common/authLogic/getCurrentUserId.js";



function App() {
    const [burger, setBurger] = useState(false)
    const [showInfo, setShowInfo] = useState(true)
    const [loader, setLoader] = useState('loading')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        if (window.innerWidth < 1110) setBurger(true)
    }, [])
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                setIsAuthenticated(false);
                setLoader('uploaded');
                navigate('/');
                return;
            }
            setIsAuthenticated(true);
            if (currentUser.email === 'admin@gmail.com' ) {
                navigate('/admin')
                setLoader('uploaded')
                return;
            }
            getAllUsers().then((userRealTimeArr) => {
                const userRealtime = getCurrentUserId(userRealTimeArr, currentUser.uid);
                dispatch(setUser({
                     displayName: userRealtime.displayName,
                     password: userRealtime.password,
                     email: userRealtime.email,
                     date: userRealtime.date,
                     id: userRealtime.id,
                     phone: userRealtime.phone,
                     statusUser: userRealtime.statusUser,
                     key:userRealtime.key,
                     progress: userRealtime.progress,
                    onboarding: userRealtime.onboarding,
                    note: userRealtime.note,
                }));
            })
             navigate('/home')
            setLoader('uploaded')
        })
    }, [])

    if (loader === 'loading') {
        return <PreLoaderApp showInfo={showInfo} burger={burger} />
    }

    return (

        <div className="app" id='app'>
            {showInfo && (burger ? <SideBar isAuthenticated={isAuthenticated} pageWrapId={"page-wrap"} outerContainerId={"app"} /> : <Header isAuthenticated={isAuthenticated} />)}
            <div className={`content ${loader ? null : 'content_spinner'}`}>
                {loader === 'uploaded' ? <Routes>
                    <Route path='/login' element={<LoginPage/>} />
                    <Route path='/registration' element={<RegistrationPage />} />
                    <Route path='/' element={<Home setShowInfo={setShowInfo} />} />
                    <Route path='/home' element={<HomePagePublic />} />
                    <Route path='/tabs' element={<AuthenticationForm />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path='/admin' element={<Admin setShowInfo={setShowInfo}  />} />
                </Routes>
                    :
                    <Spinner color={'rgb(234 93 128)'} />}
            </div>
        </div>

    );
}

export default  memo(App);
