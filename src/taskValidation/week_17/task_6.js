import renderEvalResult from "../renderEvalResult.js";

export default function task_6(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, площадь посчитана, можем двигаться дальше'
    const resultTextErrValid = 'Хм, ответ не является числовым значением, попробуй еще раз, возможно ты забыла передать в класс width и height'
    if (typeof consoleValue == "number" && value.indexOf('getArea') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}

}
