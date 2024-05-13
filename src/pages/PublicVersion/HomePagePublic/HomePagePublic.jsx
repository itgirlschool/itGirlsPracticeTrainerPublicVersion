import { useEffect, useState } from 'react';
import MirrorCode from '../../../components/MirrorCode/MirrorCode.jsx';
import ResultCode from '../../../components/ResultCode/ResultCode.jsx';
import validateTask from '../../../validateTask/allTasksValidate.js';
import ProgressBar from '../../../components/ProgressBar/ProgressBar.jsx';
import ModalAnswer from '../../../components/ModalAnswer/ModalAnswer.jsx';
import { useEditData } from '../../../Services/Firebade_realTime/services.js';
import { useAuth } from '../../../hooks/use-auth.js';
import tasksPublic from '../tasksPublic.json';
import './HomePagePublic.scss';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlices.js';
import CustomTour from '../../../components/CustomTour/CustomTour.jsx';
import ModalGreeting from '../../../components/ModalGreeting/ModalGreeting.jsx';
import "../../../validateTask/Task.scss"
import {steps} from './step.js';
import arrowModal from '../../../assets/images/homePage/arrow-modal.png';
import stripesModal from '../../../assets/images/homePage/stripes-modal.png';
import catCalculator from '../../../assets/images/homePage/cat-calculator.png';
import rhombus from '../../../assets/images/homePage/rhombus.png';
import catHomePage from '../../../assets/images/homePage/cat-home-page.png';
import arrowHeart from '../../../assets/images/homePage/arrow-heart.png';
import bulb from '../../../assets/images/homePage/bulb.png';

export default function HomePagePublic({ setDisabledFooter }) {
  const [value, setValue] = useState('');
  const [numberTask, setNumberTask] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [validate, setValidate] = useState('default');
  const { email,date, id, displayName, phone, password, key, progress, token,onboarding,statusUser } =
    useAuth();
  const [showResultImages, setShowResultImages] = useState(true);
  const [openAnswerModal, setOpenAnswerModal] = useState(false);
  const [openModalGreeting, setOpenModalGreeting] = useState(true);
  const [isTourActive, setIsTourActive] = useState(false);


  const dispatch = useDispatch();
  const editData = useEditData();
  useEffect(() => {
    setValue(tasksPublic[numberTask]?.valueRedactor);
  }, [numberTask]);

  useEffect(() => {
    if (!progress) {
      setNumberTask(0);
      return;
    }
    if (progress[progress.length - 1].valid === 'success') {
      console.log(1);
      setNumberTask(progress[progress.length - 1]?.numberTask + 1);
      return;
    }
    setNumberTask(progress[progress.length - 1]?.numberTask);
  }, [key]);

  function getTaskUser() {
    setOpenModal(false);
  }

  function sendValidate() {
    console.log(numberTask);
    const result = validateTask(value, `task${numberTask + 1}`);
    if (result) {
      setValidate('success');
      editUserProgressRealTime('success');
      return;
    }
    setValidate('error');
    editUserProgressRealTime('error');
  }

  function editUserProgressRealTime(valid) {
    const objUser = {
      codeUser: value,
      numberTask: numberTask,
      valid,
    };
    const progressResult = progress
      ? progress[progress.length - 1].numberTask === objUser.numberTask
        ? progress.map((item) => {
            if (item.numberTask === objUser.numberTask) {
              item = objUser;
              return item;
            }
            return item;
          })
        : [...progress, objUser]
      : [objUser];
    const newProgress = {
      displayName,
      email,
      id,
      key,
      password,
      phone,
      progress: progressResult,
      date: new Date().getTime(),
      statusUser: 'active',
      token,
    };
    editData.mutate({ id: key, updateData: newProgress });
    dispatch(setUser(newProgress));
  }

  function editOnboardingStatus(){

    const obj = {displayName, email, id, key, password, phone, progress, date:new Date().getTime(), statusUser, token, onboarding: false}
    editData.mutate({id: key, updateData:obj});
    dispatch(setUser(obj));
  }

  function nextTask() {
    setValidate('default');
    setShowResultImages(true);
    setNumberTask((prevState) => prevState + 1);
  }

  return (
    <>
      <ModalGreeting
          openModalGreeting={openModalGreeting}
          setOpenModalGreeting={setOpenModalGreeting}
          setIsTourActive={setIsTourActive}
          onboarding={onboarding}
      />
      <CustomTour
          editOnboardingStatus={editOnboardingStatus}
        steps={steps}
        isTourActive={isTourActive}
        setIsTourActive={setIsTourActive}
        setOpenModal={setOpenModal}
      />
      <div className='homePublicPage darken-background'>
        <Modal
          open={openModal}
          footer={null}
          closeIcon={null}
          width={'614px'}
          className='homePublicPage__modal'
        >
          <div className='homePublicPage__modal-container'>
            <h2 className='homePublicPage__modal-title'>
              {tasksPublic[numberTask]?.title}{' '}
              <img
                src={stripesModal}
                alt='stripes modal'
                className='homePublicPage__modal-stripes'
              />
            </h2>
            <p className='homePublicPage__modal-text'>
              {tasksPublic[numberTask]?.theory}
            </p>
            <p className="homePublicPage__modal-example"> Пример: <pre>{tasksPublic[numberTask]?.example}</pre></p>
            <img
              src={arrowModal}
              alt='arrow modal'
              className='homePublicPage__modal-arrow'
            />
            <button
              onClick={() => getTaskUser()}
              className='homePublicPage__modal-btn'
            >
              Мне все понятно! Показать задание
            </button>
          </div>
        </Modal>
        <div className='homePublicPage__left'>
          <div className='homePublicPage__taskPublic'>
            <>
              <ProgressBar
                allTasks={tasksPublic.length}
                currentTask={numberTask}
              />
            </>

            <div className='homePublicPage__block'>
              <div className='homePublicPage__exercise'>
                <h2 className='homePublicPage__exercise-title'>
                  Задание {numberTask + 1}{' '}
                </h2>
                <p className='homePublicPage__exercise-text'>
                  {tasksPublic[numberTask]?.task}
                </p>
                <a
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  href='#'
                  className='homePublicPage__exercise-a'
                >
                  Вернуться обратно к теориии{' '}
                </a>
              </div>
              <div className='homePublicPage__img'>
                <img
                  src={catCalculator}
                  alt='cat and calculator'
                  className='homePublicPage__img-calc'
                />
                <img
                  src={rhombus}
                  alt='rhombus image'
                  className='homePublicPage__img-rhombus'
                />
              </div>
            </div>
            <div className='homePublicPage__result'>
              {showResultImages ? (
                <div className='homePublicPage__result-images'>
                  <img
                    src={catHomePage}
                    alt='cat'
                    className='homePublicPage__result-cat'
                  />
                  <img
                    src={arrowHeart}
                    alt='arrow heart'
                    className='homePublicPage__result-arrow'
                  />
                  <h2>
                    Приступай к выполнению задания и ты увидишь тут результат
                  </h2>
                </div>
              ) : (
                <div className='homePublicPage__result-block'>
                  <div className='homePublicPage__result-text'>
                    <ResultCode value={value} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='homePublicPage__right'>
          <div className='homePublicPage__answer'>
            <MirrorCode
              setShowResultImages={setShowResultImages}
              value={value}
              setValue={setValue}
              setValidate={validate}
            />
            <div className='homePublicPage__hint'>
              <button className='homePublicPage__hint-btn'>
                <img
                  src={bulb}
                  alt='bulb'
                  className='homePublicPage__hint-img'
                  title='Воспользуйтесь подсказкой'
                />
              </button>
            </div>
          </div>
          <div className='homePublicPage__check'>
            {validate === 'default' || validate === 'error' ? (
              <button
                className='homePublicPage__check-btn'
                onClick={() => {
                  sendValidate();
                  setOpenAnswerModal(true);
                }}
              >
                Проверить
              </button>
            ) : (
              <button
                className='homePublicPage__check-btn next_task'
                onClick={nextTask}
              >
                Следующая задача
              </button>
            )}
          </div>
        </div>
        {openAnswerModal && (
          <ModalAnswer
            setOpenAnswerModal={setOpenAnswerModal}
            validate={validate}
            openAnswerModal={openAnswerModal}
          />
        )}
      </div>
    </>
  );
}
