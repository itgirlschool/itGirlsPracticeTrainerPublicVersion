import renderEvalResult from "../renderEvalResult.js";

export default function  task_24 (value) {
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Да, умница! Это было действительно сложное задание, но ты молодец, справилась! Пойдем дальше решать задачи.'
    const resultTextErrValid = 'Хм, не тот результат, что мы ждем. Все данные, которые даны в задаче, нужно использовать, иначе не получится верного ответаю. И помни, метод bind умеет передавать контекст другого обьекта, но в нашем случае в метод нужно еще передать аргумент, поэтому запись может выглядеть вот так: .....bind(контекст)(аргумент)'
        if ( typeof consoleValue === 'string' && value.indexOf('calculateBonus.bind') !== -1 && consoleValue.indexOf('275000') !== -1 && consoleValue.indexOf('13800') !== -1 ) return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid: false, validText: resultTextErrValid, result: JSON.stringify(consoleValue)}
}
