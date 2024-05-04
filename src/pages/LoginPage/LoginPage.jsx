import { useForm } from 'react-hook-form';
import './LoginPage.scss';
import { useState } from 'react';
import {
  useAddData,
  getAllUsers,
} from '../../Services/Firebade_realTime/services.js';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import github from '../../assets/images/icons/github-new.png';
import google from '../../assets/images/icons/google-new.png';
import line from '../../assets/images/line.png';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { sendSocial } from '../../common/authLogic/authProvider.js';
import { setUser } from '../../store/slices/userSlices.js';
import { Modal } from 'antd';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errLogin, setErrorLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();
  const auth = getAuth();
  const mutation = useAddData();
  const providerGoogle = new GoogleAuthProvider();
  const providerGitHub = new GithubAuthProvider();

  const [openModal, setOpenModal] = useState(false);
  const [emailForPass, setEmailForPass] = useState('');
  const [passRemember, setPassRemember] = useState('');

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  const handleGetPass = async () => {
    const allUsersObj = await getAllUsers();
    const allUsersArr = Object.values(allUsersObj);
    const userEmail = allUsersArr.find((user) => user.email === emailForPass);
    setPassRemember(
      userEmail ? userEmail.password : 'Пользователь с таким email не найден'
    );
  };

  function onSubmit(data) {
    setErrorLogin(false);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        dispatch(
          setUser({
            displayName: user.user.displayName,
            password: data.password,
            email: data.email,
            token: user.user.accessToken,
          })
        );
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
        setErrorLogin(true);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='postcard'>
        {errLogin && (
          <h5 className='red erLogin'>Не верный логин или пароль</h5>
        )}
        <div className={`form-row ${errors?.email && 'red'}`}>
          <input
            type='text'
            placeholder='Ваш Email'
            id='email'
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
        </div>
        <div className={`form-row ${errors?.pass && 'red'}`}>
          <input
            type='password'
            placeholder='Ваш пароль'
            {...register('password', {
              required: true,
              pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
            })}
            id='pass'
          />
        </div>

        <div className='form-row submit'>
          <input type='submit' value='Войти' />
          {/*<div className='line'><img src={line} alt="line" /><Link to='#'>Войти через</Link><img src={line} alt="line" /></div>
                    <div className='submit__btns'>
                        <button className='google_btn' type='button' onClick={()=>sendSocial(dispatch,navigate,auth,providerGoogle,mutation)}  ><img src={google} alt='google' /></button>
                        <button className='github_btn' type='button' onClick={()=>sendSocial(dispatch,navigate,auth,providerGitHub,mutation)} ><img src={github} alt='github' /></button>
                    </div>*/}
        </div>

        <div className='form-row forgetPass'>
          <div className='forgetPass__link'>
            <a onClick={handleClick}>Я не помню пароль</a>
            <div className='forgetPass__modal-container'>
              <Modal
                open={openModal}
                footer={null}
                // closeIcon={handleClick}
                onCancel={handleClick}
                width={'614px'}
                className='forgetPass__modal'
              >
                <div className='forgetPass__modal-container'>
                  <h2 className='forgetPass__modal-title'>
                    Давай поможем восстановить твой пароль
                  </h2>
                  <div
                    className={`form-row ${
                      errors?.email && 'red' && 'modal-input'
                    }`}
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
                      onChange={(e) => setEmailForPass(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <p className='forgetPass__modal-result'>{passRemember}</p>
                  </div>
                  <div className='form-row submit'>
                    <input
                      type='submit'
                      value='Получить пароль'
                      onClick={(e) => handleGetPass(e)}
                      className='getPassBtn'
                    />
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
