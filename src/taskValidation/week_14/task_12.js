import renderEvalResult from "../renderEvalResult.js";

function task_11(value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Ты большая молодец! Справилась со всеми задачами массива, поздравляю!'
    const resultTextErrValid = 'Так, этот результат массива немного не такой, как мы ожидаем, подумай еще. Возможно, мы получили оригинал, а не копию, и помни - метод sort сам по себе сортирует по возрастанию неправильно, но если в него передать функцию....'
    if (consoleValue.toString() === [10, 19, 23, 32, 37, 45, 56, 68, 72, 84, 91, 98].toString() && value.indexOf('sort') !== 1 && value.indexOf('[...') !== -1) return {
        valid: true,
        validText: resultTextValid,
        result: JSON.stringify(consoleValue)
    }
    return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}

}

export default task_11
