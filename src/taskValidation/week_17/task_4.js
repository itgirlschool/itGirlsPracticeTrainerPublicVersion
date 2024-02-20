import renderEvalResult from "../renderEvalResult.js";

export default function  task_4 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, текущий возраст автомобиля посчитан '
    const resultTextErrValid = 'Хм, ответ не является числовым значением, попробуй еще раз, и помни нужно получить текущий год из класа Date'
        if (typeof consoleValue == "number" && value.indexOf('new Date()') !== -1) return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
