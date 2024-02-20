import {Modal} from "antd";
import {getLessonIndexedBd} from "./servicesIndexdBD/lessonsIndexedBD.js";

export default async function openModalSuccessfullyTasks(arrSuccessfully, getLessonTasks, navigate, courseId, lesson) {

    const currentLesson = await getLessonIndexedBd(lesson)
    if (getLessonTasks().length <= currentLesson.length) {
        const validTasksSuccessfully = currentLesson.filter(item => !item.valid).length
        if (validTasksSuccessfully === 0) {
            Modal.info({
                title: `Ура! Ты молодец! Практикум ${lesson} пройден, ты всегда к нему можешь вернуться и пройти еще раз.`,
                onOk() {
                    navigate(`/${courseId}`)
                },
            });
            return
        }
    }
    return null
}
