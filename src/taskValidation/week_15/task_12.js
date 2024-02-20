import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

const task_12 = (value) => {
        const consoleValue = renderEvalResult(value)
        if (consoleValue === 15) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_12;
