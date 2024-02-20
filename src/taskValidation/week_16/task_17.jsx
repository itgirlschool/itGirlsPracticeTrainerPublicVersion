import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_17 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const nameValue = document.getElementById('firstName').value;
        const emailValue = document.getElementById('firstEmail').value;
        const errorValue = document.getElementById('errorMessage').innerText;

        if (nameValue === '' && emailValue === '' && errorValue !== '') {
            return {
                valid: true,
                validText: 'Отличная работа! Введи имя или почту и попробуй ещё раз.',
                result: '',
                consoleMessages: consoleMessages,
            };
        }

        if (
            (nameValue === '' && errorValue !== '')
            || (emailValue === '' && errorValue !== '')
            || (nameValue === '' && emailValue === '' && errorValue !== '')
        ) {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: '',
                consoleMessages: consoleMessages,
            };
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: ''}
    } catch (e) {
        console.log(e instanceof SyntaxError);
        return {valid: false, validText: 'Ошибка синтаксиса', result: e.toString()}
    }
}
export default task_17;