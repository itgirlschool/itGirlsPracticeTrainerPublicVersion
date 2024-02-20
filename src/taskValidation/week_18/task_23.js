import  {addDefaultLocalStorageTask} from './funcDefaultaddLocalStorage.js'
import renderEvalResult from "../renderEvalResult.js";
import log from "loglevel";

export default function  task_23 (value) {
    const form = document.querySelector('#task23')
    const formData = new FormData(form)
    const objectUser = {}
    for (let [name,value] of formData){
        objectUser[name] = value
    }

    let resultTextErr = addDefaultLocalStorageTask("lesson_18",23)
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'


    const validObjectResult = JSON.stringify(objectUser) === JSON.stringify(resultStorageValid()[resultStorageValid().length-1])

    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('task23'))
        } catch (e) {
            resultTextErr = 'Попытка записать невалидные данные в localStorage, проверьте правильно ли вы их записываете.'
            console.log(resultTextErr)
            console.error(e)
            return {}
        }
    }
        if (Array.isArray(resultStorageValid()) && resultStorageValid().length > 2 && validObjectResult) return {
            valid: true,
            validText: resultTextValid,
            result: 'Добавлен новый элемент в массив arr.',
            localStorage: true,
        }
        return {valid: false, validText: resultTextErrValid, result:resultTextErr || consoleValue, localStorage: true}
}


