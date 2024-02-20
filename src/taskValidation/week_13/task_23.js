import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_23(value) {
    const consoleValue = renderEvalResult(value)
        if (consoleValue === 'true') {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}

}

export default task_23;
