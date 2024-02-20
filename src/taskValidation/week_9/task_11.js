import {resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function  task_11 (value){
    try {
        const result = renderEvalResult(value);
        const resultTextErrValid = "К сожалению, ответ неверный. Проверь, правильно ли ты используешь переменные внутри шаблонных строк."
        if (result === '451 градуса по Фаренгейту — это 232.77777777777777 градуса по Цельсию.') return {
            valid: true,
            validText: resultTextValid,
            result: result
        }
        return {valid: false, validText: resultTextErrValid, result: result};
    } catch (e) {
        console.log(e instanceof SyntaxError);
    }
    return ({valid: false, validText: 'ошибка синтаксиса', result: value});
}
export default task_11;
