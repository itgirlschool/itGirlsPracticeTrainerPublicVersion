import evalFunctionForLoop from "../evalFunctionForLoop.js";
import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalFunctionForLoop from "../renderEvalFunctionForLoop.js";

const task_3 = (value) => {
        const consoleValue = renderEvalFunctionForLoop(value)
        if (consoleValue.length === 10 && consoleValue[0] === 2 && consoleValue[consoleValue.length - 1] === 20) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_3;
