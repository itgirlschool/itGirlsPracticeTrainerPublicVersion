import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_24 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const inputFields = document.querySelectorAll('.form__input');
        const values = Object.values(inputFields)
            .map(input => input.getAttribute('placeholder') === 'Введите данные')
            .filter(item => item === false)

        if (!values.length) {
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
export default task_24;