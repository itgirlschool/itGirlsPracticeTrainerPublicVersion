import {Link} from "react-router-dom";
import {useAuth} from "../../../hooks/use-auth.js";
import './HomePagePrivate.scss'

export default  function HomePagePrivate (){
    const  {nameUser} = useAuth()
    return (

        <div className='container_private'>
            <h2> Приветствуем тебя <span className='name_user' >{nameUser}</span>  на тренажерах <span className='logo_text' >#ITGIRLS</span>. <br/>Выбери направление которое ты изучаешь:</h2>
            <div className='wrapper_btn_link' >
                <Link to='/'><button>Bak-end</button></Link>
                <Link to='/frontend' className='btn btn-white btn-animate' ><button>Front-end</button></Link>
                <Link to='/'><button className='btn btn-white btn-animate' >Flutter</button></Link>
            </div>

        </div>
    )
}
