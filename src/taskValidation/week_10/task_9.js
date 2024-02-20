import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function  task_9 (value){
    try {
        const result = renderEvalResult(value);
        if (value.indexOf('showWelcome(guestName') !== -1 && value.indexOf('Привет') !== -1 && result.indexOf('Привет') !== -1 ) return {
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
export default task_9;
