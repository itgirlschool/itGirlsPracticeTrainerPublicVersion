import { Modal } from 'antd';


import './ModalGreeting.scss';

export default function ModalPass({
  openModalGreeting,
  setOpenModalGreeting,
  setIsTourActive,
  onboarding
}) {
  const handleStart = () => {
    setOpenModalGreeting(!openModalGreeting);
    setIsTourActive(true);
  };


  return (
    <Modal
      open={!onboarding ? false: openModalGreeting}
      footer={null}
      onCancel={() => setOpenModalGreeting(false)}
      width={'614px'}
      className='greeting__modal'
    >
      <div className='greeting__modal-content'>
        <>
          <h2 className='greeting__modal-title'>
            <span>Привет!</span> Здесь, маленькими шагами ты начинаешь свой
            <span> большой путь!</span>
          </h2>
          <p className='greeting__modal-text'>
            Мы рады, что ты решилась попробовать себя в таком интересном и
            непростом направлении, как IT! <br /> Специально для тебя мы
            разработали тренажеры по HTML, чтобы ты смогла освоить самые азы
            программирования или, возможно, закрепить, уже изученный ранее
            материал. Твое обучение будет проходить комфортно, ведь все задания
            усложняются постепенно, ты точно справишься! А если у тебя возникнут
            сложности в процессе, что бывает со всеми — не переживай, просто
            ознакомься с небольшим руководством по нашему интерфейсу. В нем мы
            рассказываем, где искать задания, куда писать решение, как узнать
            результат... и даже, где подсмотреть ответ!
          </p>
          <div className='form-row submit'>
            <input
              type='submit'
              value='Ну что, начнем?'
              onClick={handleStart}
              className='startBtn'
            />
          </div>
        </>
      </div>
    </Modal>
  );
}
