import evalFunction from "../evalFunction.js";
import renderEvalResult from "../renderEvalResult.js";

function task_1(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отличный массив! Можешь переходить к следующей задаче'
    const resultTextErrValid = 'Что-то не так с этим массивом, попробуй еще раз'
    if (Array.isArray(consoleValue) && consoleValue.length > 2) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }
    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}

export default task_1
