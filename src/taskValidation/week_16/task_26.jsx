import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_26 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const paragraphValue = document.getElementById('practicum').textContent;

        if (paragraphValue === 'Ваше имя') {
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
export default task_26;