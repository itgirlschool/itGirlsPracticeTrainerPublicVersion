import {Routes, Route, useNavigate} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../styles/App.scss";
import CoursePage from "./PrivateVersion/CoursePage/CoursePage.jsx";
import TaskListPage from "./PrivateVersion/TaskListPage/TaskListPage.jsx";
import TaskPage from "./PrivateVersion/TaskPage/TaskPage.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import RulesPage from "./PrivateVersion/RulesPage/RulesPage.jsx";
import SideBar from "../components/Header/SideBar/SideBar.jsx";
import {useEffect, useState} from "react";
import LoginPage from "./LoginPage/LoginPage.jsx";
import RegistrationPage from "./RegistrationPage/RegistrationPage.jsx";
import HomePage from "./HomePageVersion/HomePageVersion.jsx";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlices.js";
import Spinner from "../components/Spinner/Spinner.jsx";
import PreLoaderApp from "../components/PreLoaderApp/PreLoaderApp.jsx";




function App() {
    const [burger, setBurger] = useState(false)
    const [showInfo, setShowInfo] = useState(true)
    const [loader,setLoader] = useState('loading')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth();

    useEffect(() => {
        if (window.innerWidth < 990) setBurger(true)

    })
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(!currentUser){
                setLoader('uploaded')
                navigate('/login')
                return
            }
            dispatch(setUser({
                email: currentUser.email,
                token: currentUser.accessToken,
                id: currentUser.uid,
                nameUser:currentUser.displayName
            }))
            setLoader('uploaded')
        })
    },[])

    if(loader === 'loading'){
        return <PreLoaderApp showInfo={showInfo} burger={burger}/>
    }

    return (
        <div className="app" id='app'>
            {showInfo && (burger ? <SideBar pageWrapId={"page-wrap"} outerContainerId={"app"}/> : <Header/>)}
             <div className={`content ${loader ? null : 'content_spinner'}`}>
                 {loader === 'uploaded' ? <Routes>
                    <Route path='/login' element={<LoginPage setShowInfo={setShowInfo} burger={burger}/>}/>
                    <Route path='/registration' element={<RegistrationPage setShowInfo={setShowInfo}/>}/>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path="/:courseId" element={<CoursePage/>}/>
                    <Route path="/:courseId/:id" element={<TaskListPage/>}/>
                    <Route path="/:courseId/:id/:taskId" element={<TaskPage setShowInfo={setShowInfo}/>}/>
                    <Route path="/practicum-rules" element={<RulesPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
                 :
                 <Spinner color={'rgb(234 93 128)'}/>}
            </div>
            {showInfo && <Footer/>}
        </div>
    );
}

export default App;
