import { Modal } from 'antd';
import './ModalPass.scss';

export default function ModalPass({
  open,
  footer,
  onCancel,
  emailForPass,
  onChange,
  handleGetPass,
  passRemember,
  errors,
  register,
}) {
  return (
    <Modal
      open={open}
      footer={footer}
      onCancel={onCancel}
      width={'614px'}
      className='forgetPass__modal'
    >
      <div className='forgetPass__modal-content'>
        <h2 className='forgetPass__modal-title'>
          Давай поможем восстановить твой пароль
        </h2>

        {passRemember ? (
          <p className='forgetPass__modal-result'>
            <span>Твой пароль: </span> {passRemember}
          </p>
        ) : passRemember === '' ? (
          <>
            <div
              className={`form-row ${errors?.email && 'red' && 'modal-input'}`}
            >
              <label htmlFor='modal-input'></label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Введи свой Email'
                {...register('email', {
                  pattern: /^\S+@\S+$/i,
                })}
                value={emailForPass}
                onChange={onChange}
              ></input>
            </div>

            <div className='form-row submit'>
              <input
                type='submit'
                value='Получить пароль'
                onClick={(e) => {
                  if (emailForPass.trim() !== '') {
                    handleGetPass(e);
                  }
                }}
                className='getPassBtn'
              />
            </div>
          </>
        ) : (
          <>
            <div
              className={`form-row ${errors?.email && 'red' && 'modal-input'}`}
            >
              <label htmlFor='modal-input'></label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Введи свой Email'
                {...register('email', {
                  pattern: /^\S+@\S+$/i,
                })}
                value={emailForPass}
                onChange={onChange}
              ></input>
            </div>
            <p className='forgetPass__modal-result'>
              <span>Такой пользователь </span> не найден
            </p>

            <div className='form-row submit'>
              <input
                type='submit'
                value='Получить пароль'
                onClick={(e) => {
                  if (emailForPass.trim() !== '') {
                    handleGetPass(e);
                  }
                }}
                className='getPassBtn'
              />
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
