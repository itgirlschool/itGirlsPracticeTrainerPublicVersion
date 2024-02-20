import { getAuth, signOut } from 'firebase/auth';
import {removeUser} from "../../store/slices/userSlices.js";
import {useDispatch} from "react-redux";
import React from "react";


const ExitButton = React.memo(() => {
const dispatch = useDispatch()
    const handleSignOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth).then(()=>{
                dispatch(removeUser());
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button className="exitBtnStudy" onClick={handleSignOut}>
            Выйти из личного кабинета
        </button>
    );
});
export  default ExitButton
