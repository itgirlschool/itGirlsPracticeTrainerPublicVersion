import renderEvalResult from "../renderEvalResult.js";

function task_3(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Видимо, ты очень хорошо изучила теорию, молодец! Давай двигаться дальше.'
    const resultTextErrValid = 'Join принимает аргументом то, что будет вставляться между каждым элементом массива и выводить в строку, подумай еще раз.'
    if (typeof consoleValue === 'string' && value.indexOf('join') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: consoleValue
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue}
}

export default task_3

