import renderEvalResult from "../renderEvalResult.js";

export default function task_19(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё получилось.'
    const resultTextErrValid = 'Это не то, что мы ожидали, попробуй еще раз'
    if (typeof consoleValue == "number" && value.indexOf('point.getDistance()') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
