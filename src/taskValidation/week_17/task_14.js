import renderEvalResult from "../renderEvalResult.js";

export default function task_14(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, баланс увеличился, можешь приступать к следующей задаче.'
    const resultTextErrValid = 'Это не то, что мы ожидали, попробуй еще раз, возможно у тебя получилась строка, а мы ждем число, и помни, чтобы поле изменилось, сначала нужно вызвать метод, который ты создала.'
    if (typeof consoleValue == "number" && value.indexOf('account.deposit') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}

}
