import renderEvalResult from "../renderEvalResult.js";

export default function  task_9 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Класс Student создан, можем двигаться дальше.'
    const resultTextErrValid = 'Это не то, чего мы ожидаем, попробуй еще раз.'
        if (typeof consoleValue === "object" && consoleValue.hasOwnProperty('name') && consoleValue.hasOwnProperty('age') && consoleValue.hasOwnProperty('grade'))  return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
