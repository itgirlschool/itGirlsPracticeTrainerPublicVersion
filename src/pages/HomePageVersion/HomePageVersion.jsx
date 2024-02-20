import HomePagePublic from "../PublicVersion/HomePagePublic/HomePagePublic.jsx";
import HomePagePrivate from "../PrivateVersion/HomePagePrivate/HomePagePrivate.jsx";
import  './HomePage.scss'


export default function HomePageVersion() {
    const statusUSer = false


    return (
        <div className='home_container'>
            {statusUSer ? <HomePagePublic/> :  <HomePagePrivate/> }
        </div>
    )
}
