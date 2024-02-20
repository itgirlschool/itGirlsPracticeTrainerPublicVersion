import evalFunction from "../evalFunction.js";
import renderEvalResult from "../renderEvalResult.js";

export default function task_1(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, класс готов, идем дальше.'
    const resultTextErrValid = 'Что-то не так с этим обьектом, там точно есть нужные поля?'
    if (consoleValue.hasOwnProperty('name') && consoleValue.hasOwnProperty('surname')) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}





































