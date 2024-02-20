import renderEvalResult from "../renderEvalResult.js";

function task_4(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Метод push - очень хороший вариант для добавления элементов в конец массива, и ты теперь знаешь, как им можно пользоваться, пойдем тогда дальше.'
    const resultTextErrValid = 'Что-то не так, не проходит твой код. Может быть, ты не все элементы добавила в массив или не использовала указанный  метод? Попробуй еще раз.'
    if (Array.isArray(consoleValue) && consoleValue.includes('Italy') && consoleValue.includes('Spain') && consoleValue.includes('France') && consoleValue.length === 8) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue}

}

export default task_4
