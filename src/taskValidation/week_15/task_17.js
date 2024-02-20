import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalFunctionForLoop from "../renderEvalFunctionForLoop.js";

const task_17 = (value) => {
        const consoleValue = renderEvalFunctionForLoop(value)
        if (consoleValue.length === 10 && consoleValue[0] === 1 && consoleValue[9] === 10) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_17;
