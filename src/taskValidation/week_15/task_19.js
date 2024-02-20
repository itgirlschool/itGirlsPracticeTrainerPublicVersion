import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalFunctionForLoop from "../renderEvalFunctionForLoop.js";

const task_19 = (value) => {
        const consoleValue = renderEvalFunctionForLoop(value)
        console.log(typeof consoleValue)
        if (consoleValue[0] === -4) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}

}
export default task_19;
