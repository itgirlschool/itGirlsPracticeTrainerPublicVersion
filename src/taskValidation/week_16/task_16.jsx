import {resultTextErrValid, resultTextValid} from "../valid.js";
import evalFunction from "../evalFunction.js";

const task_16 = (value) => {
    try {
        const consoleValue = evalFunction(value)
        const form = document.forms.formTwo
        const checkbox = form.elements.checkboxThree
        if (checkbox.checked) {
            return {
                valid: true,
                validText: resultTextValid,
                result: '',
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue}
    } catch (e) {
        console.log(e instanceof SyntaxError);
        return ({valid: false, validText: 'ошибка синтаксиса', result: e.toString()});
    }
}
export default task_16;