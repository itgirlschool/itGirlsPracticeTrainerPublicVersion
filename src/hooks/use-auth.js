import {useSelector} from "react-redux";


export  function  useAuth(){
    const {email,id,displayName,statusUser,phone,date,password,key,token,progress,onboarding} = useSelector(state => state.user)
    return {useAuthBool:!!email, email,id,displayName,phone,date,statusUser,password,key,token,progress,onboarding}
}
