import cat from  '../../assets/images/cat_home_gl.png'
import  paw from '../../assets/images/paw.png'
import titleIcon from '../../assets/images/icons/title_icon.png'
import arrow from '../../assets/images/arrow_home.png'
import arrowLink from '../../assets/images/arrow_link.png'
import {Link} from "react-router-dom";
import './Home.scss'
import {useEffect} from "react";



export default function Home({setShowInfo}) {

    // useEffect(() => {
    //     if (window.innerWidth < 1110){
    //         setShowInfo(false)
    //     }
    //     return ()=>{
    //         setShowInfo(true)
    //     }
    // }, []);
    return (
        <>
            <div className='wrapper_homeGl'>
                <div className='content_wrapper'>
                    <div className='content_title'>
                        <h3>
                            Добро пожаловать <img src={titleIcon} alt='icon' /> <br/> <span>в наши удивительные <br/> тренажеры</span>  по HTML и CSS!
                        </h3>
                    </div>
                    <div className='content_body'>
                       <div className="wrap_box_first" > <div className='box box_first'>Мы рады приветствовать тебя в нашем виртуальном мире, где ты сможешь познакомиться с HTML и CSS. Это приложение поможет тебе погрузиться в веб-разработку и попробовать себя в качестве разработчика.</div>
                       <img src={arrow} alt='arrow'/>
                       </div>
                        <div className='box box_second'>Не волнуйся, если у тебя нет предварительного опыта в программировании . Наш тренажер #ITGIRLS предназначен начинающих, для тех, кто еще не определилися и хотел бы познакомиться с этим направлением поближе. Мы будем тебя поддерживать на каждом шагу, предоставляя пошаговые инструкции и полезные подсказки.</div>
                    </div>
                    <div className='btn_wrapper'>
                        <Link to='/tabs'>
                            <span>Создать профиль</span>
                            <img src={arrowLink} alt='arrow'/>
                        </Link>
                    </div>
                    <div className='content_image'>

                    </div>
                </div>
                <div className='images_wrapper'>
                    <img src={cat} alt='cat' />
                </div>
            </div>
            <div className='wrapper_paw'>
                <img src={paw} alt='paw' />
            </div>
        </>
    )
}
