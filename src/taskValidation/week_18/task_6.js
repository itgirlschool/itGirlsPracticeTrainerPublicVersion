import evalFunction from "../evalFunction.js";
import renderEvalResult from "../renderEvalResult.js";

export default function task_6(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'

    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('objectSix'))
        } catch (e) {
            console.error(e)
            return {}
        }
    }

    if (resultStorageValid()?.hasOwnProperty('age') && resultStorageValid().hasOwnProperty('name')) return {
        valid: true,
        validText: resultTextValid,
        result: 'Объект obj был записан в Local Storage.',
        localStorage: true
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue, localStorage: true}
}
