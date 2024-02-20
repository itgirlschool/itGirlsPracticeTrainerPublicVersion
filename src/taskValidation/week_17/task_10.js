import renderEvalResult from "../renderEvalResult.js";

export default function task_10(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё хорошо работает, переходи на следующую задачу.'
    const resultTextErrValid = 'Что-то пошло не так, проверь, возможно ты не вызвала метод по увеличению оценки.'
    if (typeof consoleValue == "number" && value.indexOf('student.increaseGrade()') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }

    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
