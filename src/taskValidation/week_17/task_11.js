import renderEvalResult from "../renderEvalResult.js";

export default function  task_11 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Класс Book создан, можем двигаться дальше.'
    const resultTextErrValid = 'Хм, с ответом что-то не так, попробуй еще раз.'
        if (typeof consoleValue === "object" && consoleValue.hasOwnProperty('title') && consoleValue.hasOwnProperty('author') && consoleValue.hasOwnProperty('year'))  return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
