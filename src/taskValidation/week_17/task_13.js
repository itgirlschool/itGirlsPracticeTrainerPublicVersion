import renderEvalResult from "../renderEvalResult.js";

export default function task_13(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Всё верно, двигаемся дальше.'
    const resultTextErrValid = 'Ответ не тот, который мы ожидаем, попробуй еще раз.'
    if (typeof consoleValue === "object" && consoleValue.hasOwnProperty('accountNumber') && consoleValue.hasOwnProperty('balance')) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
