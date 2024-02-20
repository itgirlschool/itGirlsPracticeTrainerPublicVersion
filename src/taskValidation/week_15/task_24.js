import {resultTextErrValid, resultTextValid} from "../valid.js";
import evalFunction from "../evalFunction.js";

const task_24 = (value) => {
    try {
        const consoleValue = evalFunction(value)
        console.log(consoleValue)
        if (consoleValue.length === 6) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
    } catch (e) {
        console.log(e instanceof SyntaxError);
    }
    return ({valid: false, validText: 'ошибка синтаксиса', result: value});
}
export default task_24;