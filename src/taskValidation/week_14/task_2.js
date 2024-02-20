import renderEvalResult from "../renderEvalResult.js";

function task_2(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Хорошо, длина есть, можем двигаться дальше'
    const resultTextErrValid = 'Длина - это свойство length, не забывай про это, попробуй еще раз'
    if (typeof consoleValue === 'number') return {valid: true, validText: resultTextValid, result: consoleValue}
    return {valid: false, validText: resultTextErrValid, result: consoleValue}
}

export default task_2
