import renderEvalResult from "../renderEvalResult.js";

function task_6(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично! Метод shift изучен, пойдем дальше'
    const resultTextErrValid = 'Что-то не так, убедись в том, что ты выводишь в консоль первый элемент и используешь для этого метод shift'
    if (consoleValue === 'Austria' && value.indexOf('shift') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue}
}

export default task_6
