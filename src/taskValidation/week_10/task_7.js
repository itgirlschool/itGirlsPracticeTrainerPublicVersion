import {resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function  task_7 (value){
    try {
        const result = renderEvalResult(value);
        const resultTextErrValid = 'К сожалению, ответ неверный. Помни, что JavaScript может неявно преобразовывать типы данных, что, в свою очередь, может привести к неожиданному результату.'
        if (typeof result === 'number') return {
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
export default task_7
