import HomePagePublic from "../PublicVersion/HomePagePublic/HomePagePublic.jsx";
import HomePagePrivate from "../PrivateVersion/HomePagePrivate/HomePagePrivate.jsx";
import {useGetUserByGetCourseQuery} from "../../store/Query/usersEmailGetCourse.js";
import getEmailUsersGetCourseValidate from "./getEmailUsersGetCourseValidate.js";
import  './HomePage.scss'
import {useAuth} from "../../hooks/use-auth.js";



export default function HomePageVersion() {
    const {email} = useAuth()
    const {data} = useGetUserByGetCourseQuery()

    return (
        <div className='home_container'>
            {getEmailUsersGetCourseValidate(data,email) ? <HomePagePrivate/> :  <HomePagePublic/>   }
        </div>
    )
}
