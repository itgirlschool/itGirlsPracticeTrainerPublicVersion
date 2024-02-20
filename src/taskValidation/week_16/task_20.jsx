import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_20 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const emailValue = document.forms.formOne.elements.firstEmail;
        const errorMessage = document.getElementById('errorMessage');
        const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (
            !regex.test(emailValue.value)
            && errorMessage.textContent !== ''
            && emailValue.style.border.includes('red')
        ) {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно. Можешь приступать к следующему заданию.',
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
export default task_20;