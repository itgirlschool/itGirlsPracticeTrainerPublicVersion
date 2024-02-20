import renderEvalResult from "../renderEvalResult.js";

function task_10(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично! Мы почти прошли этот практикум, приступай к следующему заданию.'
    const resultTextErrValid = 'Хм, что-то пошло не так, попробуй еще раз. Возможно, нужно сложить элементы массива, а не числа.'
        if (+consoleValue === 11 && value.indexOf('length') !== -1) return {
            valid: true,
            validText: resultTextValid,
            result: consoleValue
        }
        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}


}

export default task_10
