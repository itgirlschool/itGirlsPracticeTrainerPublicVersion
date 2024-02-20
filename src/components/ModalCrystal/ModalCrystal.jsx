import React from "react";
import { Modal } from "antd";
import "./ModalCrystal.scss";
import crystall from "../../assets/images/ crystall.svg";

const arrUid = [
  { uid: "6fcf7a38", title: "первый" },
  { uid: "c3153724", title: "второй" },
  { uid: "64e6ad46", title: "третий" },
  { uid: "0b9a2916", title: "четвертый" },
];

const ModalCrystal = ({
  counterCr = 1,
  isModalOpenCrystal,
  setIsOpenModalCrystal,
  lesson,
}) => {
  let counterCurrentCrystal = false;
  switch (lesson) {
    case "lesson_11":
      counterCurrentCrystal = 1;
      break;
    case "lesson_14":
      counterCurrentCrystal = 2;
      break;
    case "lesson_16":
      counterCurrentCrystal = 3;
      break;
    case "lesson_17":
      counterCurrentCrystal = 4;
      break;
    case "lesson_20":
      counterCurrentCrystal = 5;
      break;
    default:
      counterCurrentCrystal = false;
  }

  function handleCancel() {
    setIsOpenModalCrystal(false);
  }

  if (!counterCurrentCrystal) return;
  return (
    <>
      <Modal
        open={isModalOpenCrystal}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <h2 className="title">
          Ты большая молодец! <br />
          Ты очень много стараешься и у тебя хорошо получается, поэтому мы
          решили тебе подарить дополнительный кристалл.
        </h2>
        <div className="content_modal">
          <div className="wrap_img">
            <img src={crystall} alt="ctystall" />
          </div>
          <p className="text">
            Этот кристалл{" "}
            <span className="count">
              {arrUid[counterCurrentCrystal - 1]?.title}
            </span>{" "}
            из пяти, его уникальный код{" "}
            <span className="text">
              {arrUid[counterCurrentCrystal - 1]?.uid}
            </span>
            <br />
            Сделай скриншот этого сообщения или скопируй уникальный код, отправь
            Коту и он тебе начислит этот кристалл к оcтальным кристаллам.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ModalCrystal;
