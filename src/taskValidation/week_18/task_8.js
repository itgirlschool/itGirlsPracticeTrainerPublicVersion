import renderEvalResult from "../renderEvalResult.js";

export default function task_8(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'

    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('objectEight'))
        } catch (e) {
            console.error(e)
            return {}
        }
    }

    if (resultStorageValid()?.hasOwnProperty('fruit') && resultStorageValid()?.hasOwnProperty('color') && resultStorageValid()?.hasOwnProperty('quantity') && resultStorageValid()?.hasOwnProperty('price')) return {
        valid: true,
        validText: resultTextValid,
        result: 'Объект obj был записан в Local Storage.',
        localStorage: true
    }

    return {valid: false, validText: resultTextErrValid, result: consoleValue, localStorage: true}
}

