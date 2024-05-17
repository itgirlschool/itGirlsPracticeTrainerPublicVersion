import { Modal } from 'antd';

import './ModalHint.scss';

export default function ModalHint({
  openModalHint,
  setOpenModalHint,
  setErrorCount,
  tasksPublic,
  numberTask,
}) {
  const onCancel = () => {
    setOpenModalHint(!openModalHint);
  };

  const currentTask = tasksPublic[numberTask];
  const correctAnswer = currentTask
    ? currentTask.correctAnswer
    : 'что-то пошло не так...';

  return (
    <Modal
      open={openModalHint}
      footer={null}
      onCancel={onCancel}
      width={'614px'}
      className='hint__modal'
    >
      <div className='hint__modal-content'>
        <h2 className='hint__modal-title'>Правильный ответ</h2>
        <pre>
          <p className='hint__modal-answer'>{correctAnswer}</p>
        </pre>
      </div>
    </Modal>
  );
}
