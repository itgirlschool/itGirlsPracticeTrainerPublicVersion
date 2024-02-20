import renderEvalResult from "../renderEvalResult.js";

export default function  task_14 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const p = document.querySelector('.practicum15').textContent

    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('objLocal'))
        } catch (e) {
            console.error(e)
            return {}
        }
    }

        if (value.indexOf('JSON.parse') !== -1 && p.indexOf('name') !== -1 && p.indexOf('age') !== -1 ) return {
            valid: true,
            validText: resultTextValid,
            result: 'Обьект был записан в Local Storage и получено правильное значение в Dom-дереве',
            localStorage: true
        }

        return {valid: false, validText: resultTextErrValid, result: consoleValue, localStorage: true}
}
