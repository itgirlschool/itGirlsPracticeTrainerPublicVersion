import renderEvalResult from "../renderEvalResult.js";

export default function task_12(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, мы получили название книги и автора.'
    const resultTextErrValid = 'Мы ожидаем строку, может, ты что-то пропустила? Попробуй еще раз.'
    if (typeof consoleValue == "string" && value.indexOf('book.getTitleAndAuthor()') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
