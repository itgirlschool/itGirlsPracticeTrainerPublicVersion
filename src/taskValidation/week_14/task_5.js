import renderEvalResult from "../renderEvalResult.js";

function task_5(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, мы получили нужный нам элемент массива, можем двигаться дальше.'
    const resultTextErrValid = 'Что-то не так, ожидается последний элемент массива'
    if (consoleValue === 'Croatia') return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue}

}

export default task_5
