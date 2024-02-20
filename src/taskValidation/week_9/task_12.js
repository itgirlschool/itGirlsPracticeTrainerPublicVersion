import {resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function  task_12 (value){
    try {
        const result = renderEvalResult(value);
        const resultTextErrValid = 'К сожалению, ответ неверный. Проверь: правильно ли ты преобразовала переменную str к числу, правильно ли используешь оператор typeOf.'
        if (result === 'number') return {
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
export default task_12;
