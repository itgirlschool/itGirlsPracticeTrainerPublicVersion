import {getAllLessonsIndexedBD, getLessonIndexedBd} from './servicesIndexdBD/lessonsIndexedBD.js'
import {frontendTasks} from "../dataCourse/frontendData.js";


export default function validSuccessfullyCrystal(lesson, task, setIsOpenModalCrystal) {
    if (validLessonTaskCrystal(lesson, task)) {
        getValidatePassedTask(lesson, setIsOpenModalCrystal)
    }
    return true
}

function validLessonTaskCrystal(lesson, task) {
    return (lesson === 'lesson_11' && +task === 5) || (lesson === 'lesson_14' && +task === 3) || (lesson === 'lesson_16' && +task === 22) || (lesson === 'lesson_17' && +task === 23) || (lesson === 'lesson_20' && +task === 7)
}

async function getValidatePassedTask(lesson, setIsOpenModalCrystal) {

    const allResultIndexed = await getAllLessonsIndexedBD()
    const filterLessonLocal = filterArrLogic(frontendTasks, lesson)
    const filterLessonDb = filterArrLogic(allResultIndexed, lesson)
    if (validateArrServerTaskSuccessfully(filterLessonDb, filterLessonLocal).length === 0) {
       if( validateThemeBLocksSuccessfully(allResultIndexed, frontendTasks, lesson))

        setIsOpenModalCrystal(true)
    }
}


function filterArrLogic(arr, lesson) {
    return arr.filter(item => {
        const {idLessonDb, idCurrentLesson} = getIdCurrentLesson(item, lesson)
        return idLessonDb <= idCurrentLesson
    })
}

function getIdCurrentLesson(item, lessonCurrent) {
    const idLessonDb = +item.id.split('').splice(7, 10).join('')
    const idCurrentLesson = +lessonCurrent.split('').splice(7, 10).join('')
    return {idLessonDb, idCurrentLesson}
}


function validateArrServerLessonSuccessfully(arrServer, arrLocal) {
    const result = []
    arrServer.forEach(itemServer => {
        arrLocal.forEach(itemLocal => {
            if (itemServer.id === itemLocal.id) {
                if (itemServer.arrValid.length === itemLocal.tasks.length) {
                    result.push(itemServer)
                }
            }

        })
    })
    return result
}

function validateArrServerTaskSuccessfully(filterLessonServer, filterLessonLocal,) {
    const result = []
    validateArrServerLessonSuccessfully(filterLessonServer, filterLessonLocal).forEach(item => {
        item.arrValid.forEach(tasks => {
            if (!tasks.valid) {
                result.push(false)
            }
        })
    })
    return result
}

function validateThemeBLocksSuccessfully(allLessonServer, arrLessonLocal, lessonCurrentName) {
    let flag = true
    const sliceAllLessonsLocal = arrLessonLocal.filter(item => {
        if (item.id === lessonCurrentName) {
            flag = false
        }
        return flag
    })

    const arrAbsenteesTheme = []
    sliceAllLessonsLocal.forEach(itemLocal =>{
        allLessonServer.forEach(itemServer =>{
                if(itemServer.id === itemLocal.id ){
                    arrAbsenteesTheme.push(itemLocal)
                }
        })
    })
  return arrAbsenteesTheme === sliceAllLessonsLocal
}

function validateServerCurrentLessonTaskSuccessfully(arr) {
    console.log(arr)
    let result = false
    arr.forEach(item => {
        if (!item.valid) {
            result = false
        }
        result = true
    })
    return result
}

