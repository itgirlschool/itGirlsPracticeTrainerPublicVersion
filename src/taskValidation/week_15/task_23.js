import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

const task_23 = (value) => {
        const consoleValue = renderEvalResult(value)
        console.log(consoleValue)
        if (consoleValue.length === 6) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_23;
