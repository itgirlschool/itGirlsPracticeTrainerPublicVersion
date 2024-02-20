import renderEvalResult from "../renderEvalResult.js";

export default function  task_5 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Класс создан, можем идти дальше.'
    const resultTextErrValid = 'Хм, не то, что мы ожидаем, попробуй еще раз.'
        if (typeof consoleValue === "object" && consoleValue.hasOwnProperty('width') && consoleValue.hasOwnProperty('height')) return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
