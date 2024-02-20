import renderEvalResult from "../renderEvalResult.js";

export default function  task_8 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, радиус посчитан, переходи на следующую задачу.'
    const resultTextErrValid = 'Что-то пошло не так с вычислением радиуса, попробуй еще раз.'
        if (typeof consoleValue == "number" && value.indexOf('3.14') !== -1) return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
