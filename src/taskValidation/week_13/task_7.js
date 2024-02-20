import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_7(value) {
    const consoleValue = renderEvalResult(value)
        if (typeof consoleValue === 'number') {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}

export default task_7;
