import {useGetData} from "../../Services/Firebade_realTime/services.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import {useEffect} from "react";
import './Admin.scss'
import ExitButtonAuth from "../../components/ExitButtonsAuth/ExitButtonAuth.jsx";

export default function Admin({setShowInfo}) {
    const {data, isLoading} = useGetData();

    useEffect(() => {
        setShowInfo(false);
        return () => {
            setShowInfo(true);
        }
    })

    return <>
        <ExitButtonAuth/>
        <h1>Admin</h1>
    </>
}
