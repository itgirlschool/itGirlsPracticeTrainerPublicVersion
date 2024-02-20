import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalFunctionForLoop from "../renderEvalFunctionForLoop.js";

const task_22 = (value) => {
        const consoleValue = renderEvalFunctionForLoop(value)
        if (consoleValue > 100) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_22;
