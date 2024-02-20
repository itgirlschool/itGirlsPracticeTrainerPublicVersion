import {useSelector} from "react-redux";


export  function  useAuth(){
    const {email,token,id,nameUser} = useSelector(state => state.user)
    return {useAuthBool:!!email,
    email,id,token,nameUser}
}
