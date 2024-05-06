import { useEffect, useState } from "react";
import MirrorCode from "../../../components/MirrorCode/MirrorCode.jsx";
import ResultCode from "../../../components/ResultCode/ResultCode.jsx";
import validateTask from "../../../validateTask/allTasksValidate.js";
import ProgressBar from "../../../components/ProgressBar/ProgressBar.jsx"
import { useAuth } from "../../../hooks/use-auth.js";
import tasksPublic from "../tasksPublic.json";
import "./HomePagePublic.scss";
import { Modal } from "antd";

import arrowModal from "../../../assets/images/homePage/arrow-modal.png";
import stripesModal from "../../../assets/images/homePage/stripes-modal.png";
import catCalculator from "../../../assets/images/homePage/cat-calculator.png";
import rhombus from "../../../assets/images/homePage/rhombus.png";
import catHomePage from "../../../assets/images/homePage/cat-home-page.png";
import arrowHeart from "../../../assets/images/homePage/arrow-heart.png";
import bulb from "../../../assets/images/homePage/bulb.png";

export default function HomePagePublic({ setDisabledFooter }) {
    const [value, setValue] = useState("");
    const [numberTask, setNumberTask] = useState(0);
    const [openModal, setOpenModal] = useState(true);
    const [falseValidate, setFalseValidate] = useState(false);
    const [trueValidate, setTrueValidate] = useState(false);
    const { id, token } = useAuth();

    useEffect(() => {
        setValue(tasksPublic[numberTask].valueRedactor);
    }, [numberTask]);

    function getTaskUser() {
        setOpenModal(false);
    }

    function sendValidate() {
        const result = validateTask(value, `task${numberTask + 1}`);
        if (!result) setFalseValidate(true);
        if (result) setTrueValidate(true);

        console.log(token);
    }

    function nextTask() {
        setTrueValidate(false);
        setNumberTask((prevState) => prevState + 1);
    }

    return (
        <>
            <div className="homePublicPage">
                <Modal
                    open={openModal}
                    footer={null}
                    closeIcon={null}
                    width={'614px'}
                    className="homePublicPage__modal"
                >

                    <div className="homePublicPage__modal-container">
                        <h2 className="homePublicPage__modal-title">{tasksPublic[numberTask].title} <img
                            src={stripesModal} alt="stripes modal" className="homePublicPage__modal-stripes" /></h2>
                        <p className="homePublicPage__modal-text">{tasksPublic[numberTask].theory}</p>
                        <img src={arrowModal} alt="arrow modal" className="homePublicPage__modal-arrow" />
                        <button onClick={() => getTaskUser()} className="homePublicPage__modal-btn">
                            Мне все понятно! Показать задание
                        </button>
                    </div>
                </Modal>
                <div className='homePublicPage__left'>
                    <div className="homePublicPage__taskPublic">
                        <ProgressBar allTasks={tasksPublic.length} currentTask={numberTask} />
                        <div className="homePublicPage__block">
                            <div className="homePublicPage__exercise">
                                <h2 className="homePublicPage__exercise-title">
                                    Задание {numberTask + 1}{" "}
                                </h2>
                                <p className="homePublicPage__exercise-text">
                                    {tasksPublic[numberTask].task}
                                </p>
                                <a
                                    onClick={() => {
                                        setOpenModal(true);
                                    }}
                                    href="#"
                                    className="homePublicPage__exercise-a"
                                >
                                    Вернуться обратно к теориии{" "}
                                </a>
                            </div>
                            <div className="homePublicPage__img">
                                <img
                                    src={catCalculator}
                                    alt="cat and calculator"
                                    className="homePublicPage__img-calc"
                                />
                                <img
                                    src={rhombus}
                                    alt="rhombus image"
                                    className="homePublicPage__img-rhombus"
                                />
                            </div>
                        </div>
                        <div className="homePublicPage__result">
                            <div className="homePublicPage__result-images">
                                <img src={catHomePage} alt="cat" className="homePublicPage__result-cat" />
                                <img src={arrowHeart} alt="arrow heart" className="homePublicPage__result-arrow" />
                            </div>
                            <div className="homePublicPage__result-block">
                                <div className="homePublicPage__result-text">
                                    <ResultCode value={value} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`homePublicPage__right ${trueValidate ? 'right_true' : null} `}>
                    <div className={!falseValidate ? 'homePublicPage__answer' : 'homePublicPage__answer errorBorder'}>
                        <MirrorCode value={value} setValue={setValue} setFalseValidate={setFalseValidate} />
                        <div className="homePublicPage__hint">
                            <button className="homePublicPage__hint-btn">
                                <img
                                    src={bulb}
                                    alt="bulb"
                                    className="homePublicPage__hint-img"
                                    title="Воспользуйтесь подсказкой"
                                />
                            </button>
                        </div>
                        {trueValidate && <div className='box_sucsessfully'>
                            <div className='img_sucsessfully'>

                            </div>
                            <h3>Ура! У тебя получлилось, мы можем идти дальше</h3>
                        </div>}
                    </div>
                    <div className="homePublicPage__check">
                        {!trueValidate ?
                            <button className="homePublicPage__check-btn" onClick={sendValidate}>Проверить</button> :
                            <button className="homePublicPage__check-btn next_task" onClick={nextTask} >Следующая задача</button>}
                    </div>
                </div>
            </div>
        </>
    );
}
