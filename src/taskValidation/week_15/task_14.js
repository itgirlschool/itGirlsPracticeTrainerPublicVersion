import {resultTextErrValid, resultTextValid} from "../valid.js";

import renderEvalFunctionForLoop from "../renderEvalFunctionForLoop.js";

const task_14 = (value) => {
        const consoleValue = renderEvalFunctionForLoop(value)
        if (consoleValue[0] === 'APPLE' && consoleValue[1] === 'BANANA' && consoleValue[2] === 'CHERRY') {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_14;
