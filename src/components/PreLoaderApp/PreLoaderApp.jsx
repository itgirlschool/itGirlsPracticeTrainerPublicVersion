import Spinner from "../Spinner/Spinner.jsx";
import Header from "../Header/Header.jsx";
import SideBar from "../Header/SideBar/SideBar.jsx";
import './PreLoaderApp.scss'

export  default  function PreLoaderApp ({showInfo,burger}){
    return <div className='container_global-preload'>
        <div className='container_spinner_preloader'>
            <Spinner color={'rgb(234 93 128)'} />
        </div>

    </div>
}
