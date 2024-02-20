import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_23 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const btn = document.forms.formFour.elements.fourthButton;
        const radioBtn = document.forms.formFour.elements.fourthName;

        if (
            (!radioBtn.checked && btn.disabled)
            || (radioBtn.checked && !btn.disabled)
        ) {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: '',
                consoleMessages: consoleMessages,
            }
        }
        return {
            valid: false,
            validText: 'Что-то пошло не так. Попробуй ещё раз.',
            result: value,
            consoleMessages: consoleMessages,
        };
    } catch (e) {
        console.log(e instanceof SyntaxError);
        return ({valid: false, validText: 'ошибка синтаксиса', result: e.toString()});
    }
}
export default task_23;