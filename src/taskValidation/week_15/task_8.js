import evalFunction from "../evalFunction.js";
import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

const task_8 = (value) => {
    const consoleValue = renderEvalResult(value)
    if (consoleValue[0] === 'Кот - прекрасное животное'
        && consoleValue[1] === 'Рыба - прекрасное животное'
        && consoleValue[2] === 'Лемур - прекрасное животное'
    ) {
        return {
            valid: true, validText: resultTextValid, result: consoleValue
        }
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue}
}
export default task_8;
