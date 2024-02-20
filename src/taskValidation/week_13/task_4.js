import evalFunction from "../evalFunction.js";
import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_4(value) {
        const consoleValue = renderEvalResult(value)
        if (typeof consoleValue === 'number' && value.indexOf('getDate()') !== -1) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}

export default task_4;
