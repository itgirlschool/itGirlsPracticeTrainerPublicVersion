import {useEffect, useState} from "react";
import MirrorCode from "../../../components/MirrorCode/MirrorCode.jsx";
import tasksPublic from '../tasksPublic.json'

import './HomePagePublic.scss'

export default function HomePagePublic({setDisabledFooter}) {
    const [value, setValue] = useState('')
    const [numberTask, setNumberTask] = useState(0)
    const [classTheory, setClassTheory] = useState('active')



    useEffect(() => {
        setValue(tasksPublic[numberTask].valueRedactor)
    }, [numberTask]);

    function getTaskUser() {
        setClassTheory('')
    }

    const saveData = async ()=>{


    }



    return (<>
        <div className='container_homePublicPage'>
            <div className={`left_box ${classTheory}`}>
                {classTheory === 'active' && <div className='wrapper_theory'>
                    <h2>{tasksPublic[numberTask].title}</h2>
                    <p>
                        {tasksPublic[numberTask].theory}
                    </p>
                    {classTheory === 'active' &&
                        <button onClick={getTaskUser}>Мне все понятно! Показать задание</button>}
                </div>}

                {classTheory !== 'active' && <div className='container_taskPublic'>
                    <div className='wrapper_task'>
                        <div>
                            <h2>Задание {numberTask + 1} </h2>
                            <p>
                                {tasksPublic[numberTask].task}
                            </p>
                            <a onClick={() => {
                                setClassTheory('active')
                            }} href='#'>Вернуться обратно к теориии </a>
                        </div>
                    </div>
                    <div className='сontainer_result-task'>
                        <div className='resultPublic' >
                            Тут будет результат вашего кода
                        </div>
                    </div>
                </div>}

            </div>
            <div className='right_box'>
                <div className='mirror'>
                    <MirrorCode value={value} setValue={setValue}/>
                </div>
            <div className='wrapper_box_public'>
                <button>Проверить</button>
            </div>
            </div>

        </div>
    </>)
}
