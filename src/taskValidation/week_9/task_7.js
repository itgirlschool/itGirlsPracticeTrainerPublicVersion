import logFunction from "../logFunction.js";
import {resultTextErrValid, resultTextValid} from "../valid.js";

function task_7(value) {
    try {
        const consoleValue = logFunction(value);
        if (consoleValue === 2024) return {
            valid: true,
            validText: resultTextValid,
            result: consoleValue
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue};
    } catch (e) {
        console.log(e instanceof SyntaxError);
    }
    return ({valid: false, validText: 'ошибка синтаксиса', result: value});
}

export default task_7;