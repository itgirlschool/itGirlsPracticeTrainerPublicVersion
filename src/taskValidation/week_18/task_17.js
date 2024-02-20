import renderEvalResult from "../renderEvalResult.js";

export default function  task_17 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const p = document.querySelector('.practicum17').textContent
    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('objLocal'))
        } catch (e) {
            console.error(e)
            return {}
        }
    }
        if (value.indexOf('JSON.parse') !== -1 && value.indexOf('innerHTML') !== -1 &&  p.indexOf('Место работы:') !== -1 && p.indexOf('Номер телефона:') !== -1) return {
            valid: true,
            validText: resultTextValid,
            result: 'Обьект был записан в Local Storage и получено правильное значение в Dom-дереве',
            localStorage: true
        }

        return {valid: false, validText: resultTextErrValid, result: consoleValue, localStorage: true}

}
