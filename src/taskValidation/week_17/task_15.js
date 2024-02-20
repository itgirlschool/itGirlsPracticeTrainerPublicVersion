import renderEvalResult from "../renderEvalResult.js";

export default function task_15(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, баланс увеличился, можешь приступать к следующей задаче.'
    const resultTextErrValid = 'Это не то, что мы ожидали, консоль должна вызываться в условии, а чтобы получить результат работы консоли, мы должны вызывать метод.'
    if (typeof consoleValue == "string" && value.indexOf('account.withdraw') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}

}
