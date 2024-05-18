import {useSelector} from "react-redux";


export  function  useAuth(){
    const {email,displayName,statusUser,phone,date,password,key,progress,onboarding,note,id} = useSelector(state => state.user)
    return {email,displayName,phone,date,statusUser,password,key,progress,onboarding,note,id}
}
