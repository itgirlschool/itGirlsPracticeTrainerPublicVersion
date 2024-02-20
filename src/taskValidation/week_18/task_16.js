import evalFunction from "../evalFunction.js";
import renderEvalResult from "../renderEvalResult.js";

export default function  task_16 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const p = document.querySelector('.practicum16').textContent

    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('objLocal'))
        } catch (e) {
            console.error(e)
            return {}
        }
    }
        if (value.indexOf('JSON.parse') !== -1 && p.indexOf('Лондон') !== -1 && value.indexOf('obj.city') !== -1) return {
            valid: true,
            validText: resultTextValid,
            result: 'Обьект был записан в Local Storage и получено правильное значение в Dom-дереве',
            localStorage: true
        }

        return {valid: false, validText: resultTextErrValid, result: consoleValue, localStorage: true}

}
