import evalFunction from "../evalFunction.js";
import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_13(value) {
    const consoleValue = renderEvalResult(value)
        if (typeof consoleValue === 'object') {
            return {
                valid: true, validText: resultTextValid, result: consoleValue.toString()
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue.toString()}

}

export default task_13;
