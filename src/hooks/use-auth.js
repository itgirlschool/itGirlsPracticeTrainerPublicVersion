import {useSelector} from "react-redux";


export  function  useAuth(){
    const {email,id,displayName,statusUser,phone,date,password} = useSelector(state => state.user)
    return {useAuthBool:!!email, email,id,displayName,phone,date,statusUser,password}
}
