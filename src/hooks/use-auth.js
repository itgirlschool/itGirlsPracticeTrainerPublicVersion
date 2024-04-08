import {useSelector} from "react-redux";


export  function  useAuth(){
    const {email,token,id,displayName} = useSelector(state => state.user)
    return {useAuthBool:!!email,
    email,id,token,displayName}
}
