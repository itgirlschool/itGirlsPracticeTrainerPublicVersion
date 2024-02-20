import renderEvalResult from "../renderEvalResult.js";

export default function  task_22 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Ура! Ты молодец, теперь ты хорошо разбираешься в классах! Поздравляю!'
    const resultTextErrValid = 'Не тот результат, попробуй еще раз, чуть-чуть осталось.'
        if (value.indexOf('triangle.calculatePerimeter') !== -1 && +consoleValue === 12) return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
