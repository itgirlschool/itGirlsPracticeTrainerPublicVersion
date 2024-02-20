import {resultTextValid} from "../valid.js";

function task_6(value) {
    try {
        const alertRegex = /alert\(([^)]+)\)/;
        const match = value.match(alertRegex);
        const result = match[0].trim();
        eval(result);
        const resultTextErrValid = 'К сожалению, ответ не верный. Обрати внимание на синтаксис, возможно где-то не закрыта скобка.'
        if (result === 'alert(2023)' || result === 'alert (2023)') return {
            valid: true,
            validText: resultTextValid,
            result: ''
        }
        return {
            valid: false,
            validText: resultTextErrValid,
            result: ''
        }
    } catch (e) {
        console.log(e instanceof SyntaxError);
    }
    return ({
        valid: false,
        validText: 'ошибка синтаксиса',
        result: value
    });
}

export default task_6;