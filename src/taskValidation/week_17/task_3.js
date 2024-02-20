import renderEvalResult from "../renderEvalResult.js";

export default function  task_3 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, можем идти дальше.'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз, возможно ты добавила не все поля.'
        if (typeof consoleValue === "object" && consoleValue.hasOwnProperty('brand') && consoleValue.hasOwnProperty('model') && consoleValue.hasOwnProperty('year') && consoleValue.brand && consoleValue.year && consoleValue.model ) return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
