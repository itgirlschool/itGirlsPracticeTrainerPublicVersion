import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalForm = ({ setIsModalOpen, isModalOpen, handleOkModal }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Перейдя к следующему вопросу, ваши данные будут утеряны"
        open={isModalOpen}
        onOk={handleOkModal}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default ModalForm;
