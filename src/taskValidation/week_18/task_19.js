import renderEvalResult from "../renderEvalResult.js";

export default function task_19(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'

    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('task19'))
        } catch (e) {
            console.error(e)
            return {}
        }
    }

    if (Array.isArray(resultStorageValid()) && resultStorageValid().length > 0) return {
        valid: true,
        validText: resultTextValid,
        result: 'Массив  был записан в Local Storage и получено правильное значение в Dom-дереве',
        localStorage: true,
    }

    return {valid: false, validText: resultTextErrValid, result: consoleValue, localStorage: true}

}

