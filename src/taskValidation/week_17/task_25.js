import renderEvalResult from "../renderEvalResult.js";

export default function task_25(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, идем дальше, осталось совсем чуть-чуть.'
    const resultTextErrValid = 'Не тот результат, попробуй еще раз'
    if (value.indexOf('product.calculateTotalPrice') !== -1 && +consoleValue === 50) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
