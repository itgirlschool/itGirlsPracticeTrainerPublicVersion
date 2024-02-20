import renderEvalResult from "../renderEvalResult.js";

export default function  task_7 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Класс Circle создан, можем двигаться дальше.'
    const resultTextErrValid = 'Это не совсем то, чего мы ожидаем, попробуй еще раз.'
        if (typeof consoleValue === "object" && consoleValue.hasOwnProperty('radius')) return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
