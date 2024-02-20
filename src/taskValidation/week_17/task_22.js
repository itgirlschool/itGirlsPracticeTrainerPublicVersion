import renderEvalResult from "../renderEvalResult.js";

export default function  task_22 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё получилось, ты изменила поле city, можешь приступать к следующему заданию'
    const resultTextErrValid = 'Это не то, что мы ожидали, попробуй еще раз.'

        if (consoleValue === 'New York' && value.indexOf('person.changeCity') !== -1) return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
