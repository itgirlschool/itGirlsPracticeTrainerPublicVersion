import evalFunction from "../evalFunction.js";
import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

const task_16 = (value) => {
        const consoleValue = renderEvalResult(value)
        if ((consoleValue === 'Hello world !' || consoleValue === 'Hello world!' || typeof consoleValue === 'string') && value.indexOf('join') !== -1) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_16;
