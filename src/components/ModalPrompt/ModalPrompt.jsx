import React from 'react';
import {Modal} from 'antd';
import {FormattedHtml} from "../FormattedString/FormattedString.jsx";

const ModalForm = ({setIsModalPromptOpen, isModalOpenPrompt, handleOkModalPrompt, contentPrompt}) => {
    const handleCancel = () => {
        setIsModalPromptOpen(false);
    };
    return (
        <>
            <Modal
                title='Мы решили тебе немного подсказать, взгляни на правильный ответ и исправь свой.'
                open={isModalOpenPrompt}
                onOk={handleOkModalPrompt}
                onCancel={handleCancel}
            >
                <FormattedHtml jsonString={contentPrompt}/>
            </Modal>
        </>
    );
};

export default ModalForm;