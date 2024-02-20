import {resultTextErrValid, resultTextValid} from "../valid.js";
import evalFunctionForLoop from "../evalFunctionForLoop.js";
import renderEvalFunctionForLoop from "../renderEvalFunctionForLoop.js";

const task_10 = (value) => {
        const consoleValue = renderEvalFunctionForLoop(value)
        if (consoleValue.length === 5 && consoleValue[0] === 1 && consoleValue[4] === 5) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_10;
