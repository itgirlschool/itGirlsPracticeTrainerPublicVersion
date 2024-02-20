import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalFunctionForLoop from "../renderEvalFunctionForLoop.js";

const task_4 = (value) => {
    const consoleValue = renderEvalFunctionForLoop(value)
        if ((consoleValue.length && consoleValue[0] === `5 * 1` && consoleValue[consoleValue.length - 1] === '5 * 10')
            || (consoleValue.length && consoleValue[0] === `5*1` && consoleValue[consoleValue.length - 1] === '5*10')
        ) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_4;
