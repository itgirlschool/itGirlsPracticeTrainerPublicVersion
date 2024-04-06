import { useEffect, useState } from "react";
import MirrorCode from "../../../components/MirrorCode/MirrorCode.jsx";
import tasksPublic from "../tasksPublic.json";

import arrowModal from "../../../assets/images/homePage/arrow-modal.png";
import stripesModal from "../../../assets/images/homePage/stripes-modal.png";

import "./HomePagePublic.scss";
import { Modal } from "antd";

export default function HomePagePublic({ setDisabledFooter }) {
  const [value, setValue] = useState("");
  const [numberTask, setNumberTask] = useState(0);
  const [classTheory, setClassTheory] = useState("");//добавить слово active
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setValue(tasksPublic[numberTask].valueRedactor);
  }, [numberTask]);

  function getTaskUser() {
    setClassTheory("");
  }

  const saveData = async () => {};

  return (
    <>
      <div className="homePublicPage">
        {/* <Modal
        open={openModal}
        footer={null}
        closeIcon={null}
        width={'614px'}
        className="homePublicPage__modal"
        >
        <div className="homePublicPage__modal-container">
                <h2 className="homePublicPage__modal-title">{tasksPublic[numberTask].title} <img src={stripesModal} alt="stripes modal" className="homePublicPage__modal-stripes"/></h2>
                <p className="homePublicPage__modal-text">{tasksPublic[numberTask].theory}</p>
                <img src={arrowModal} alt="arrow modal" className="homePublicPage__modal-arrow"/>
                {classTheory === "active" && (
                  <button onClick={()=> setOpenModal(false)} className="homePublicPage__modal-btn">
                    Мне все понятно! Показать задание
                  </button>
                )}
              </div>
        </Modal> */}
          <div className={`homePublicPage__left ${classTheory}`}>
            {classTheory !== "active" && (
              <div className="container_taskPublic">
                <div className="wrapper_task">
                  <div>
                    <h2>Задание {numberTask + 1} </h2>
                    <p>{tasksPublic[numberTask].task}</p>
                    <a
                      onClick={() => {
                        setClassTheory("active");
                      }}
                      href="#"
                    >
                      Вернуться обратно к теориии{" "}
                    </a>
                  </div>
                </div>
                <div className="сontainer_result-task">
                  <div className="resultPublic">
                    Тут будет результат вашего кода
                  </div>
                </div>
                <div>
                    <button> Подсказка</button>
                </div>
              </div>
            )}
          </div>
          <div className="homePublicPage__right">
            <div className="mirror">
              <MirrorCode value={value} setValue={setValue} />
            </div>
            <div className="wrapper_box_public">
              <button>Проверить</button>
            </div>
          </div>
      </div>
    </>
  );
}
