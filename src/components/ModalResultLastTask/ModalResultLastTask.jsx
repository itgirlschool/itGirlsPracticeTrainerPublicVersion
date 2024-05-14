import './ModalREsultLastTask.scss'
import {Modal} from 'antd'
export default function ModalResultLastTask({setOpenModalResultLastTask}) {

    return (
        <Modal
            open={false}
            footer={null}
            onCancel={() => setOpenModalResultLastTask(false)}
            width={'614px'}
            className='lastTask__modal'
        >
            <div className='lastTask__modal-content'>
                <>
                    <h2 className='lastTask__modal-title'>
                        <span>Ураааааа!</span> У тебя все получилось!
                    </h2>
                    <p className='lastTask__modal-text'>
                        Мы тебя поздравляем, ты попробовала написать свой первый проект, и у тебя все получилось, конечно это только нало твоего пути и впереди еще много всего интересного.
                        Твои результаты отпралены менеджерам они в скором времени с тообой обязательно свяжутся.
                    </p>
                </>
            </div>
        </Modal>
    )
}
