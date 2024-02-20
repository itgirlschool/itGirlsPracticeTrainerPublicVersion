import renderEvalResult from "../renderEvalResult.js";

export default function task_5(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const resultStorage = localStorage.getItem('item')
    if (resultStorage === 'null') return {
        valid: true,
        validText: resultTextValid,
        result: 'Значение null было записано в Local Storage.',
        localStorage: true
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue, localStorage: true}
}

