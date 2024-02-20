import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_18 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const form = document.forms.formOne;
        const name = form.elements.firstName;
        const email = form.elements.firstEmail;

        if (name.value === '' && email.value === '') {
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
export default task_18;