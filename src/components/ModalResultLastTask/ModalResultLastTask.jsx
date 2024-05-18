import './ModalREsultLastTask.scss'
import {getAuth, signOut} from 'firebase/auth';
import {removeUser} from '../../store/slices/userSlices.js';
import {useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/use-auth.js";
import {useEditData} from "../../Services/Firebade_realTime/services.js";
import {Modal} from 'antd'


export default function ModalResultLastTask({setModalResultTask, modalResultTask}) {
    const {
        email,
        displayName,
        phone,
        password,
        key,
        onboarding,
        note,
        id
    } = useAuth()
    const editData = useEditData();
    const navigate = useNavigate();
    const auth = getAuth();
    const dispatch = useDispatch();

    async function handleCancel() {
        try {
            await signOut(auth).then(() => {
                clearProgress()
                dispatch(removeUser());
                navigate('/');
            });
        } catch (error) {
            console.log(error);
        }
    }

    function clearProgress() {
        editData.mutate({
            id: key, updateData: {
                email,
                displayName,
                phone,
                date: new Date().getTime(),
                statusUser: 'passed',
                password,
                key,
                progress: false,
                onboarding,
                note,
                id
            }
        });
    }


    return (
        <Modal
            onCancel={async () => await handleCancel()}
            open={modalResultTask}
            footer={null}
            width={'614px'}
            className='lastTask__modal'
            closeIcon={null} 
        >
            <div className='lastTask__modal-content'>
                <>
                    <h2 className='lastTask__modal-title'>
                        <span>Ураааааа!</span> У тебя все получилось!
                    </h2>
                    <p className='lastTask__modal-text'>
                        Мы тебя поздравляем, ты попробовала написать свой первый проект, и у тебя все получилось,
                        конечно это только начало твоего пути и впереди еще много всего интересного.
                        Твои результаты отправлены менеджерам, они в скором времени с тобой обязательно свяжутся.
                    </p>
                    <button className='lastTask__modal-button' onClick={handleCancel}>Вернуться на главную</button>
                </>
            </div>
        </Modal>
    )
}
