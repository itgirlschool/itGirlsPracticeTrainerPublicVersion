import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import {getLessonIndexedBd} from "./servicesIndexdBD/lessonsIndexedBD.js";
export default async function  ModalResetResult(id,lengthArrTasks,navigate,courseId,setArrSuccessfully){
    const arrTasks = await getLessonIndexedBd(id)
    if (!arrTasks) return null
    const arrCountSuccessfullyTasks = arrTasks.filter(item => item.valid)
    const { confirm } = Modal;
    const showConfirm = () => {
        confirm({
            title: 'В этом практикуме ты сделала все задания, хочешь скинуть результаты и пройти еще раз?',
            icon: <ExclamationCircleFilled />,
            okText:'Сбросить результаты',
            cancelText: 'Оставить всё как есть',
            onOk() {
                setArrSuccessfully([])
                navigate(`/${courseId}/${id}/1`)
            },
        });
    };

    return  arrCountSuccessfullyTasks.length === lengthArrTasks ? showConfirm() : null
}
