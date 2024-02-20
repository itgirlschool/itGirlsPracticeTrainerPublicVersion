
import  {addDefaultLocalStorageTask} from './funcDefaultaddLocalStorage.js'
import renderEvalResult from "../renderEvalResult.js";

export default function  task_20 (value) {

   let resultTextErr = addDefaultLocalStorageTask("lesson_18",20)
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('task19'))
        } catch (e) {
            resultTextErr = 'Попытка записать невалидные данные в localStorage'
            console.log(resultTextErr)
            console.error(e)
            return {}
        }
    }

        if (value.indexOf('pop()') !== -1 && resultStorageValid().length < 6) return {
            valid: true,
            validText: resultTextValid,
            result: 'Массив  был записан в Local Storage и получено правильное значение в Dom-дереве',
            localStorage: true,
        }

        return {valid: false, validText: resultTextErrValid, result:resultTextErr || consoleValue, localStorage: true}
}
