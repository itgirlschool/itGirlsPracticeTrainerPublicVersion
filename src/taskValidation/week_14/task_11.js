import renderEvalResult from "../renderEvalResult.js";

function task_11(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Вау, видимо ты очень хорошо разобралась с темой массивов, приступай скорее к следующему заданию.'
    const resultTextErrValid = 'Задача не из легких, посмотри еще раз внимательно на код, метод filter возвращает новый массив, который записывается в переменную, помни об этом, а остаток от деления на 2 всегда ноль, попробуй еще раз'
    if (consoleValue.toString() === [2, 4, 6, 8, 10].toString() && value.indexOf('arr.filter') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue}

}

export default task_11
