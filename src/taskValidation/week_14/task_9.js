import renderEvalResult from "../renderEvalResult.js";

function task_8(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Spread оператор очень полезный инструмент, хорошо, что ты в нем разобралась. Можешь переходить к следующему заданию'
    const resultTextErrValid = 'Мы получаем не совсем тот результат, попробуй еще раз и не забывай, что spread оператор может раскрывать объект или массив в другом объекте или массиве.'
    const arr = ['Санкт-Петербург', 'Москва', 'Екатеринбург', 'Казань', 'Нижний Новгород']
    if (arr.toString() === consoleValue.toString()) return {
        valid: true,
        validText: resultTextValid,
        result: `[${consoleValue}]`
    }
    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}

export default task_8
