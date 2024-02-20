import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_2(value) {
    try {
        const consoleValue = renderEvalResult(value)
        if (typeof consoleValue === 'number') {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
    } catch (e) {
        return ({valid: false, validText: 'ошибка', result: e.toString()});
    }

}

export default task_2;
