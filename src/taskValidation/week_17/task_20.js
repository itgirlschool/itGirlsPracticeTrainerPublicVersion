import renderEvalResult from "../renderEvalResult.js";

export default function task_20(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё получилось. Выражение посчитано верно, можешь приступать к следующему заданию'
    const resultTextErrValid = 'Это не то, что мы ожидали, попробуй еще раз. Мы ожидаем, что под каждое математическое действие ты будешь использовать метод класс Calculator.'
    if (consoleValue === 6 && value.indexOf('calc.divide') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
