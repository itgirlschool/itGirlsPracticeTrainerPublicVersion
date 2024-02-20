import renderEvalResult from "../renderEvalResult.js";

export default function task_4(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const resultStorage = localStorage.getItem('bool')
    if (resultStorage) return {
        valid: true,
        validText: resultTextValid,
        result: 'Логическое значение true было записано в Local Storage.',
        localStorage: true
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue, localStorage: true}
}
