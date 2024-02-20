import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalFunctionForLoop from "../renderEvalFunctionForLoop.js";

const task_11 = (value) => {
        const consoleValue = renderEvalFunctionForLoop(value)
        if (consoleValue.length && value.indexOf("split") !== -1 ) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_11;
