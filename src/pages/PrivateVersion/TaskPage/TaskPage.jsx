//хуки
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
//компоненты
import Spinner from "../../../components/Spinner/Spinner.jsx";
import ModalForm from "../../../components/ModalForm/ModalForm.jsx";
import ModalPrompt from "../../../components/ModalPrompt/ModalPrompt.jsx";
import MirrorCode from "../../../components/MirrorCode/MirrorCode.jsx";
import TaskComponent from "../../../components/TaskComponent/TaskComponent.jsx";
import RenderJSon from "../../../components/RenderJson/RenderJSon.jsx";
import ProgressBar from "../../../components/ProgressBar/ProgressBar.jsx";
import {FormattedStringArray} from "../../../components/FormattedString/FormattedString.jsx";
import modalResetResult from "../../../common/modalResetResult.jsx";
import ModalCrystal from "../../../components/ModalCrystal/ModalCrystal.jsx";
import Form from "../../../components/Forms/Forms.jsx";
import ModalRules from "../../../components/ModalRules/ModalRules.jsx";
//функции
import openModalSuccessfullyTasks from '../../../common/modalSuccessfyllyTask.js'
import progressBarValid from "../../../components/ProgressBar/progressBarValid.js";
import valid from "../../../taskValidation/valid.js";
import {addlessonsIndexedBD, getLessonIndexedBd} from "../../../common/servicesIndexdBD/lessonsIndexedBD.js";
import {frontendTasks} from "../../../dataCourse/frontendData.js";
import validSuccessfullyCrystal from "../../../common/validSuccessfullyCrystal.js";
///стили
import './TaskPage.scss'



export default function TaskPage({setShowInfo}) {
    const {courseId, id, taskId} = useParams()
    const [value, setValue] = useState(undefined);
    const [prevValue, setPrevValue] = useState('')
    const [arrSuccessfully, setArrSuccessfully] = useState(false)
    const [validationObject, setValidationObject] = useState(false)
    const [expression, setExpression] = useState(undefined)
    const [numberOfTries, setNumberOfTries] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenPrompt, setIsModalOpenPrompt] = useState(false)
    const [isModalOpenCrystal, setIsOpenModalCrystal] = useState(false)
    const [isModalOpenRules, setIsOpenModalRules] = useState(false)
    const navigate = useNavigate()
    const task = getLessonTasks().find(item => +item.id === +taskId);

     useEffect(()=>{
         setShowInfo(false)
         return ()=>{setShowInfo(true)}
     })

    function getLessonTasks() {
        return frontendTasks.find((lesson) => lesson.id === id).tasks
    }

    function getLesson() {
        return frontendTasks.find((lesson) => lesson.id === id);
    }

    async function entryArrSuccessfully() {
        const result = await getLessonIndexedBd(id)
        setArrSuccessfully(result)
        if(+taskId === 1 && !result.rules){
            setIsOpenModalRules(true)
        }
        return result
    }

    useEffect(() => {
        setValue(task.code);
        setValidationObject(false);
        setNumberOfTries(0)
        entryArrSuccessfully()
    }, [frontendTasks, taskId])

    useEffect(() => {
        modalResetResult(id, getLessonTasks().length, navigate, courseId, setArrSuccessfully)
    }, [])


    function sendTask(numb = expression) {
        if (!numb) {
            return null
        }
        const idTasks = getLessonTasks().find(item => +item.id === +taskId + +numb)?.id
        if (idTasks) navigate(`/${courseId}/${id}/${idTasks}`)
    }

    function handleSlideTask(numb) {
        setExpression(numb)
        if (task.code !== value) {
            setIsModalOpen(true)
            return
        }
        sendTask(numb);
    }

    function handleNextTask() {
        progressBarValid(valid(value, id, taskId, task,), arrSuccessfully, setArrSuccessfully, taskId, id)
        handleSlideTask(+1)
        localStorage.clear()
    }

    function handlePrevTask() {
        const plug = false
        progressBarValid(valid(value, id, taskId, task, plug), arrSuccessfully, setArrSuccessfully, taskId, id)
        handleSlideTask(-1)
        localStorage.clear()
    }

    function handleOkModal() {
        setIsModalOpen(false);
        setValidationObject(false);
        sendTask(expression)
    }

    function handleOkModalPrompt() {
        setIsModalOpenPrompt(false)
    }
    async function makeRulesLesson(){
          await  addlessonsIndexedBD(id,[],true)
        setIsOpenModalRules(false)

    }

    async function handleValid() {
        if (task.code === value) return
        let resultValid = await valid(value, id, taskId, task);
        progressBarValid(resultValid, arrSuccessfully, setArrSuccessfully, taskId, id)
        setValidationObject(resultValid)
        if (!(prevValue === value) && !validationObject.valid) setNumberOfTries(prevState => prevState + 1)
        if (resultValid.valid)await validSuccessfullyCrystal(id, taskId, setIsOpenModalCrystal,getLessonTasks)
        setPrevValue(value)
        await openModalSuccessfullyTasks(arrSuccessfully, getLessonTasks, navigate, courseId, id)
    }

    if (!task || !arrSuccessfully) {
        return <Spinner color={'black'}/>
    }

    return (
        <>
            <div>

                <div className='container'>
                    {isModalOpenRules && <ModalRules
                        setIsOpenModalRules = {setIsOpenModalRules}
                        isModalOpenRules = {isModalOpenRules}
                        makeRulesLesson={makeRulesLesson}
                        id={id}
                    />}
                    <ModalForm
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        handleOkModal={handleOkModal}
                    />
                    <ModalPrompt
                        isModalOpenPrompt={isModalOpenPrompt}
                        setIsModalPromptOpen={setIsModalOpenPrompt}
                        handleOkModalPrompt={handleOkModalPrompt}
                        contentPrompt={task?.correctAnswer}
                    />
                    <ModalCrystal isModalOpenCrystal={isModalOpenCrystal} setIsOpenModalCrystal={setIsOpenModalCrystal} lesson={id} />
                    <div className='wrapper_task' key={taskId}>
                        <div>
                        <ProgressBar totalTasks={getLessonTasks().length} currentTask={+taskId}
                                     completedTasks={arrSuccessfully} lessonNumber={id}/>
                        <TaskComponent task={task}/>
                        </div>

                        <button className='exit' onClick={() => navigate(`/${courseId}/${id}`)}>
                            Вернуться к списку заданий
                        </button>
                    </div>
                    <div className='container_func'>
                        <div className='mirror-container'>
                            <div className='mirror'>
                                <MirrorCode value={value} setValue={setValue}/>
                                {numberOfTries >= 3 &&
                                    <button
                                        className='mirror-tip-btn'
                                        onClick={() => setIsModalOpenPrompt(true)}
                                    >
                                        Посмотреть решение
                                    </button>
                                }

                            </div>
                            <div className='container-btn'>
                                <button
                                    onClick={handleValid}
                                    disabled={task.code === value}
                                >
                                    Проверить
                                </button>
                                <button
                                    onClick={handleNextTask}
                                    disabled={task.id === getLessonTasks().length}
                                >
                                    Следующая задача
                                </button>
                            </div>
                        </div>
                        <div className='result'>
                            <div className='console'>
                                <div className='cons_result'>
                                    Console result:
                                    <span
                                        className={validationObject?.valid ? 'successfully' : 'error'}>
                                        {Array.isArray(validationObject.result)
                                            ? <FormattedStringArray array={validationObject.result}/>
                                            : <>{validationObject.result}</>
                                        }
                                    </span>
                                </div>
                                {(validationObject.consoleMessages && validationObject.consoleMessages.length !== 0) &&
                                    <div className='cons_errors'>
                                        Console api: <br/>
                                        {validationObject.consoleMessages}
                                    </div>
                                }
                                {id === 'lesson_18' && <div className='wrap_storage'>
                                    Console storage:
                                    <RenderJSon key={numberOfTries} validationObject={validationObject} taskId={taskId}
                                                id={id}/>
                                </div>}
                            </div>
                            <div className='request'>
                                {!validationObject && !task.html ?
                                    <h2>Результат проверки твоего кода будет показан здесь, после того как ты нажмешь
                                        кнопку
                                        проверить.</h2>
                                    : <h2>{validationObject.validText}</h2>
                                }
                            </div>
                        </div>
                        <div className='container_button'>
                            <button onClick={() => window.location.reload()}>
                                Сбросить урок
                            </button>
                            <button
                                onClick={handlePrevTask}
                                disabled={+taskId === 1}
                            >
                                Предыдущая задача
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {getLesson().forms &&
                <Form/>
            }
        </>
    );
}
