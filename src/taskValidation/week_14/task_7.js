import renderEvalResult from "../renderEvalResult.js";

function task_7(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, все число возведены в квадрат, следующее задание тебя ждет.'
    const resultTextErrValid = 'Получился не тот массив, который мы ожидаем. Не забывай, чтобы возвести в степень, нам нужен ** этот оператор.'
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => item ** 2)
    if (arr.toString() === consoleValue.toString()) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue}
}

export default task_7
