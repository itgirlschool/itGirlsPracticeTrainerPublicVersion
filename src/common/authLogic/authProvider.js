import {signInWithPopup} from "firebase/auth";
import {setUser} from "../../store/slices/userSlices.js";
import {getAllUsers} from "../../Services/Firebade_realTime/services.js";


export function sendSocial(dispatch,navigate,auth,provider,mutation) {
    signInWithPopup(auth, provider)
        .then(async ({user}) => {
            const infUser = {
                displayName: user.displayName,
                email: user.email,
                token: user.accessToken
            }
            const allUsers = await getAllUsers()
            return {infUser,allUsers}
        })
       //.then(({infUser,allUsers})=>{
          // if(!logicCreateUser(infUser.email,allUsers)){
            //   mutation.mutate(infUser)
           //}
          // console.log(infUser)
        /// return {infUser,allUsers}
    //})
        //.then(({userInfo,allUsers})=>{
        //dispatch(setUser(userInfo))
          //  logicDoNotRegistrUser(allUsers,userInfo)
            //navigate('/home');
    //})
        .catch((error) => {
            console.error("Auth Error:", error);
        });
}


function logicCreateUser (currentUserEmail,allUsers){
    const arrAllUsers  = Object.values(allUsers)
    const recurrentUser = arrAllUsers.find(item => item.email === currentUserEmail)
    return !!recurrentUser
}

function logicDoNotRegistrUser(allUsers,currentUsers){
    const arrAllUsers  = Object.values(allUsers)
    const recurrentUser = arrAllUsers.find(item => item.email === currentUsers.email)
    console.log(recurrentUser)
}



