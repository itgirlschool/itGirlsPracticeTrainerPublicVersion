import { useState } from 'react';
import { Modal } from 'antd';
import { getAllUsers } from '../../Services/Firebade_realTime/services.js';

import './ModalPass.scss';

export default function ModalPass({ openModal, setOpenModal }) {
  const [emailForPass, setEmailForPass] = useState('');
  const [passRemember, setPassRemember] = useState('');

  const handleGetPass = async () => {
    if (emailForPass.trim() === '') return;
    setEmailForPass('');
    const allUsersObj = await getAllUsers();
    const allUsersArr = Object.values(allUsersObj);
    const userEmail = allUsersArr.find((user) => user.email === emailForPass);
    setPassRemember(userEmail ? userEmail.password : false);
  };

  const onCancel = () => {
    setEmailForPass('');
    setPassRemember('');
    setOpenModal(!openModal);
  };

  return (
    <Modal
      open={openModal}
      footer={null}
      onCancel={onCancel}
      width={'614px'}
      className='forgetPass__modal'
    >
      <div className='forgetPass__modal-content'>
        {passRemember ? (
          <>
            <h2 className='forgetPass__modal-title'>
              Мы нашли пользователя с таким email
            </h2>
            <p className='forgetPass__modal-result'>
              <span>Твой пароль: </span> {passRemember}
            </p>
          </>
        ) : (
          <>
            <h2 className='forgetPass__modal-title'>
              Давай поможем восстановить твой пароль
            </h2>
            <div className='form-row'>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Введи свой Email'
                value={emailForPass}
                onChange={(e) => setEmailForPass(e.target.value)}
              ></input>
            </div>
            {passRemember === false && (
              <p className='forgetPass__modal-result'>
                <span>Такой пользователь </span> не найден
              </p>
            )}

            <div className='form-row submit'>
              <input
                type='submit'
                value='Получить пароль'
                onClick={handleGetPass}
                className='getPassBtn'
              />
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
