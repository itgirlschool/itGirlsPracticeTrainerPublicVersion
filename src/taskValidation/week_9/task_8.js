import {resultTextErrValid, resultTextValid} from "../valid.js";
import evalFunction from "../evalFunction.js";
import logFunction from "../logFunction.js";

function task_8(value) {
    try {
        const consoleValue = logFunction(value);
        if (consoleValue === 12) return {
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

export default task_8;