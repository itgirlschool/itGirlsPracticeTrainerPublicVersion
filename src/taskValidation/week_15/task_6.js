import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalFunctionForLoop from "../renderEvalFunctionForLoop.js";

const task_6 = (value) => {
        const consoleValue = renderEvalFunctionForLoop(value)
        if (consoleValue.length === 5) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_6;
