import renderEvalResult from "../renderEvalResult.js";

export default function  task_21 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, ты хорошо справилась с этой задачей, можешь двигаться дальше.'
    const resultTextErrValid = 'Мы ожидаем в консоли строку c даннымы обьекта product. Попробуй еще раз.'
        if ( typeof consoleValue == 'string' && value.indexOf('product.displayInfo') !== -1 && consoleValue.indexOf('undefined') !== 0) return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
