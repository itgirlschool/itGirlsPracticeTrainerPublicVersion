import { useForm } from 'react-hook-form';
import './LoginPage.scss';
import { useState } from 'react';
import { useAddData } from '../../Services/Firebade_realTime/services.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { getAllUsers } from '../../Services/Firebade_realTime/services.js';
import { setUser } from '../../store/slices/userSlices.js';
import getCurrentUserId from '../../common/authLogic/getCurrentUserId.js';
import github from '../../assets/images/icons/github-new.png';
import google from '../../assets/images/icons/google-new.png';
import line from '../../assets/images/line.png';
import { sendSocial } from '../../common/authLogic/authProvider.js';

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

  function onSubmit(data) {
    setErrorLogin(false);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        getAllUsers().then((userRealTimeArr) => {
          const userRealtime = getCurrentUserId(userRealTimeArr, user.user.uid);
          dispatch(
            setUser({
              displayName: userRealtime.displayName,
              password: data.password,
              email: data.email,
              token: user.user.accessToken,
              id: user.user.uid,
              date: userRealtime.date,
              phone: userRealtime.phone,
              statusUser: userRealtime.statusUser,
            })
          );
          navigate('/home');
        });
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
            <a onClick={() => setOpenModal(true)}>Я не помню пароль</a>
            <div className='forgetPass__modal-container'>
              <ModalPass
                openModal={openModal}
                setOpenModal={setOpenModal}
                errors={errors}
                register={register}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
