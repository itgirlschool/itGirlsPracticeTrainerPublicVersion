import {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {frontendTasks} from "../../../dataCourse/frontendData.js";
import icons from "../../../assets/images/icon-js.svg";
import {useNavigate} from 'react-router-dom'
import {getLessonIndexedBd,getRulesStatusIndexedBD} from "../../../common/servicesIndexdBD/lessonsIndexedBD.js";
import "./TaskListPage.scss";
import Spinner from "../../../components/Spinner/Spinner.jsx";
import log from "loglevel";

const TaskListPage = () => {
    const {courseId, id} = useParams();
    const [readTheRules,setReadTheRules] = useState('loading')
    const arrProgress = JSON.parse(localStorage.getItem(id)) || []
    const [activeLesson, setActiveLesson] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        getArrProgress(id)
        getIndexedBDStatusRules()
    }, [])

    async function getIndexedBDStatusRules (){
        const result = await getRulesStatusIndexedBD()
        const status = !result[0] ? 'none' : 'successfully'
        setReadTheRules(status)
    }

    async function getArrProgress(id) {
        const resultArr = await getLessonIndexedBd(id)
        setActiveLesson(resultArr[resultArr.length - 1]?.numberTask || null)
    }

    let currentLesson;
    if (courseId === "frontend") {
        currentLesson = frontendTasks.find((lesson) => lesson.id === id);
    }
    if (!currentLesson.tasks) {
        return (<div className="container_errTest">
            <h1> К сожалению пока таких тестов еще нету</h1>
            <button onClick={() => navigate(-1)}>Вернуться назад</button>
        </div>)
    }
    if(readTheRules === 'loading'){
        return  <Spinner/>
    }

    return (
        <main className="taskList-container">
            <h3 className="taskList-title">{currentLesson.title}</h3>
            <p className="taskList-text">{currentLesson.welcome}</p>
            <div className="taskList-note">
                Примечание: если ты столкнулась с какими-то трудностями, обязательно
                сообщи об этом администраторам школы.
            </div>
            <div className='container__btn-back-theme' >
                <Link to={`/${courseId}`} >
                    <button>Вернуться к списку тем</button>
                </Link>
            </div>

            <div className="taskList-wrapper">
                {readTheRules === 'successfully'
                    ? currentLesson.tasks.map((task) => (

                        <Link
                            to={`/${courseId}/${id}/${task.id}`}
                            className={`taskList-task-card ${+activeLesson === task.id ? 'active-task-card' : ''} `}
                            key={task.id}
                        >
                            {currentLesson.block === "JS" &&
                                <img src={icons} alt='icon-js' className='taskList-task-icon'/>
                            }
                            {task.title}
                        </Link>)
                    )
                    : <div className="taskList-messageOfRules">
                        <p className="taskList-messageOfRules-text">
                            Прежде чем приступить к решению задач, обязательно изучи
                            правила пользования практикумом! Это
                            поможет тебе обратить внимание на важные моменты и избежать ошибок. После того, как
                            ознакомишься с правилами, задачи станут доступны для решения.
                        </p>
                        <button className="taskList-messageOfRules-btn">
                            <Link to="/practicum-rules" className="taskList-messageOfRules-link">
                                Ознакомиться с правилами
                            </Link>
                        </button>
                    </div>
                }
            </div>
        </main>
    );
};
export default TaskListPage;
