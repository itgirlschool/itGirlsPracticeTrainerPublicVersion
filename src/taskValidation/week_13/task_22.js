import evalFunction from "../evalFunction.js";
import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_22(value) {
    const consoleValue = renderEvalResult(value)
        if (consoleValue === 'false') {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}

}

export default task_22;
