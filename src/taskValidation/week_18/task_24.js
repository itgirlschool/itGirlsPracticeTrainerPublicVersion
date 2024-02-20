import  {addDefaultLocalStorageTask} from './funcDefaultaddLocalStorage.js'
import renderEvalResult from "../renderEvalResult.js";
import log from "loglevel";

export default function  task_24 (value) {
    let resultTextErr = addDefaultLocalStorageTask("lesson_18",24)
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('task23'))
        } catch (e) {
            resultTextErr = 'Попытка записать невалидные данные в localStorage, проверьте, правильно ли вы их записываете.'
            console.log(resultTextErr)
            console.error(e)
            return {}
        }
    }
        if (Array.isArray(resultStorageValid()) && resultStorageValid().length === 0) return {
            valid: true,
            validText: resultTextValid,
            result: 'Массив очищен',
            localStorage: true,
        }
        return {valid: false, validText: resultTextErrValid, result:resultTextErr || consoleValue, localStorage: true}

}

