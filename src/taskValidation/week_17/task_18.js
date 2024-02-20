import renderEvalResult from "../renderEvalResult.js";

export default function task_18(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Всё верно, двигаемся дальше.'
    const resultTextErrValid = 'Что-то не то получилось, попробуй еще раз.'
    if (typeof consoleValue === "object" && consoleValue.hasOwnProperty('x') && consoleValue.hasOwnProperty('y')) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
