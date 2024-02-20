import renderEvalResult from "../renderEvalResult.js";

function task_8(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Все верно! Мы получили ожидаемую сточку, можем переходить к следующей задаче'
    const resultTextErrValid = 'Хм, не совсем то, что мы ожидаем, давай попробуем еще раз.'
    if (consoleValue === "black red green blue yellow orange" && value.indexOf('forEach') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue}
}

export default task_8
