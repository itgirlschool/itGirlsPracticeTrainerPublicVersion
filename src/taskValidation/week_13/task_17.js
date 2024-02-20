import evalFunction from "../evalFunction.js";
import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_17(value) {
    const consoleValue = renderEvalResult(value)
        if (consoleValue === 'Правильный формат даты' && value.indexOf('isNaN') !== -1) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}

}

export default task_17;
