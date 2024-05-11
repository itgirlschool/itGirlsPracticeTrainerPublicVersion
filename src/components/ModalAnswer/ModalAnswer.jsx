import React from 'react';
import { Modal } from "antd";
import './ModalAnswer.scss';

import successAnswerImg from '../../assets/images/correctAnswerCat.png';
import errorAnswerImg from '../../assets/images/incorrectAnswerCat.png';

export default function ModalAnswer({ setOpenAnswerModal, validate, openAnswerModal }) {
    return (
        <>
            <Modal open={openAnswerModal} footer={null} closeIcon={null}>
                <div className='modalAnswer'>
                    {validate === 'success' ? (
                        <>
                            <h2>Ура! У тебя получилось!</h2>
                            <img src={successAnswerImg} alt="correct" />
                            <button onClick={() => { setOpenAnswerModal(false) }}>Отлично!</button>
                        </>
                    ) : (
                        <>
                            <h2>Кажется, это не совсем верно</h2>
                            <img src={errorAnswerImg} alt="incorrect" />
                            <button onClick={() => { setOpenAnswerModal(false) }}>Повторить</button>
                        </>
                    )}
                </div>
            </Modal>
        </>
    )
}
