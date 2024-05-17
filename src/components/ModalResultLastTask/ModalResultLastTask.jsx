import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEditData } from '../../Services/Firebade_realTime/services';
import { Modal } from 'antd';

import pen from '/pen.png';
import save from '/save.png';

export default function ModalResultLastTask({ setOpenModalResultLastTask }) {
  const [isClickedChecking, setisClickedChecking] = useState(false); // состояние для кнопки - сверить данные
  const [showFocusedFields, setShowFocusedFields] = useState(null); // состояние для отображения карандаша при наведении
  const [isEditing, setIsEditing] = useState({
    displayName: false,
    phone: false,
    email: false,
  }); // // состояние для включения режима редактирования при нажатии на карандаш
  const { displayName, email, phone } = useSelector((state) => state.user);
  const [changedDisplayName, setChangedDisplayName] = useState(displayName); // состояние для сохранения измененного поля
  const [changedEmail, setChangedEmail] = useState(email); // состояние для сохранения измененного поля
  const [changedPhone, setChangedPhone] = useState(phone); // состояние для сохранения измененного поля

  const handleEdit = (field) => {
    setShowFocusedFields((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  // const handleMouseEnter = () => {
  //   setShowFocusedFields(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowFocusedFields(false);
  // };

  const handleSaveConfirm = () => {
    const editData = useEditData();
    function editUserInfo() {
      const obj = {
        displayName,
        email: changedEmail,
        id,
        key,
        password,
        phone: changedPhone,
        progress,
        date: new Date().getTime(),
        statusUser,
        token,
      };
      editData.mutate({ id: key, updateData: obj });
      dispatch(setUser(obj));
    }
    editUserInfo();
    // setIsEditing({
    //   displayName: false,
    //   email: false,
    //   phone: false,
    // });
  };

  return (
    <Modal
      open={true}
      footer={null}
      width={'614px'}
      className='lastTask__modal'
    >
      <>
        {isClickedChecking ? (
          <>
            <p>
              {isEditing.displayName ? (
                <>
                  <input
                    type='text'
                    value={
                      changedDisplayName ? changedDisplayName : displayName
                    }
                    onChange={(e) => setChangedDisplayName(e.target.value)}
                  />
                  <button onClick={handleSaveConfirm}>
                    <img src={save} alt='Save' className='saveButton' />
                  </button>
                </>
              ) : (
                <>
                  Ваше имя: {displayName}
                  <button onClick={() => handleEdit('displayName')}>
                    <img src={pen} alt='Edit' className='editButton' />
                  </button>
                </>
              )}
            </p>

            <p>
              {isEditing.email ? (
                <>
                  <input
                    type='text'
                    value={changedEmail ? changedEmail : email}
                    onChange={(e) => setChangedEmail(e.target.value)}
                  />
                  <button onClick={handleSaveConfirm}>
                    <img src={save} alt='Save' className='saveButton' />
                  </button>
                </>
              ) : (
                <>
                  Ваш имейл: {email}
                  <button onClick={() => handleEdit('email')}>
                    <img src={pen} alt='Edit' className='editButton' />
                  </button>
                </>
              )}
            </p>

            <p>
              {isEditing.phone ? (
                <>
                  <input
                    type='text'
                    value={changedPhone ? changedPhone : phone}
                    onChange={(e) => setChangedPhone(e.target.value)}
                  />
                  <button onClick={handleSaveConfirm}>
                    <img src={save} alt='Save' className='saveButton' />
                  </button>
                </>
              ) : (
                <>
                  Ваш телефон: {phone}
                  <button onClick={() => handleEdit('phone')}>
                    <img src={pen} alt='Edit' className='editButton' />
                  </button>
                </>
              )}
            </p>
          </>
        ) : (
          <div className='lastTask__modal-content'>
            <>
              <h2 className='lastTask__modal-title'>
                <span>Ураааааа!</span>
              </h2>
              <p className='lastTask__modal-text'>
                Поздравляем, вы успешно прошли регистрацию.
              </p>
            </>

            <div>
              <input
                type='submit'
                value='Сверить данные'
                onClick={() => setisClickedChecking(true)}
                className='checkUserInfo'
              />
            </div>
          </div>
        )}
      </>
    </Modal>
  );
}

// import './ModalREsultLastTask.scss';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Modal } from 'antd';

// import pen from '/pen.png';
// import save from '/save.png';

// export default function ModalResultLastTask({ setOpenModalResultLastTask }) {
//   const [isClickedChecking, setisClickedChecking] = useState(false); // состояние для кнопки - сверить данные
//   const [showFocusedFields, setShowFocusedFields] = useState(null); // состояние для отображения карандаша при наведении

//   const [isEditing, setIsEditing] = useState(false); // состояние для включения режима редактирования при нажатии на карандаш
//   const { email } = useSelector((state) => state.user);

//   const [changedValue, setChangedValue] = useState(email); // состояние для сохранения измененного поля

//   const handleMouseEnter = () => {
//     setShowFocusedFields(true);
//   };

//   const handleMouseLeave = () => {
//     setShowFocusedFields(false);
//   };

//   const handleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   return (
//     <Modal
//       open={true}
//       footer={null}
//       width={'614px'}
//       className='lastTask__modal'
//     >
//       <>
//         {isClickedChecking ? (
//           <>
//             {showFocusedFields ? (
//               <>
//                 <input
//                   type='text'
//                   value={email}
//                   onChange={(e) => setChangedValue(e.target.value)}
//                 />

//                 <button>
//                   <img src={save} alt='Save' className='saveButton' />
//                 </button>
//               </>
//             ) : (
//               <>
//                 <p
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   Ваша почта: {email}
//                   <button onClick={() => setShowFocusedFields(true)}>
//                     <img
//                       src={pen}
//                       alt='Edit'
//                       className='editButton'
//                       // onClick={handleEdit}
//                     />
//                   </button>
//                 </p>
//               </>
//             )}
//           </>
//         ) : (
//           <div className='lastTask__modal-content'>
//             <>
//               <h2 className='lastTask__modal-title'>
//                 <span>Ураааааа!</span>
//               </h2>
//               <p className='lastTask__modal-text'>
//                 поздравляем, ты попробовала написать свой первый проект,
//               </p>
//             </>

//             <div>
//               <input
//                 type='submit'
//                 value='Сверить данные'
//                 onClick={() => setisClickedChecking(true)}
//                 className='checkUserInfo'
//               />
//             </div>
//           </div>
//         )}
//       </>
//     </Modal>
//   );
// }

//  <div>
//  <input type='text' value={email} onChange={handleChange} />
//    <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//      Ваша почта: {email}
//      <img src={pen} alt='Edit email' onClick={() => setIsEdited(true)} />
//    </p>

//  <input
//    type='submit'
//    value='Подтверждаю актуальность введенных данных'
//    className='checkUserInfo'
//  />
//  </div>;

// const handleClick = (field) => {
//   setEditedField(field);
// };

// const handleChange = (e) => {
//   if (editedField === 'name') {
//     // Обновление состояния displayName
//   } else if (editedField === 'email') {
//     // Обновление состояния email
//   } else if (editedField === 'phone') {
//     // Обновление состояния phone
//   }
// };

// function editUserInfo() {
//   const obj = {
//     displayName,
//     email,
//     id,
//     key,
//     password,
//     phone,
//     progress,
//     date: new Date().getTime(),
//     statusUser,
//     token,
//     onboarding: false,
//   };
//   editData.mutate({ id: key, updateData: obj });
//   dispatch(setUser(obj));
// }
