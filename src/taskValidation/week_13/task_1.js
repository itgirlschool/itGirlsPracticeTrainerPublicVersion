import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_1(value) {
    try {
        const consoleValue = renderEvalResult(value)
        if (typeof consoleValue === 'object') {
            const newValue = consoleValue.toString()
            return {
                valid: true, validText: resultTextValid, result: newValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
    } catch (e) {
        return ({valid: false, validText: 'ошибка', result: e.toString()});
    }

}

export default task_1;
