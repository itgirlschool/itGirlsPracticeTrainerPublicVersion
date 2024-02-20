import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_11 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);
        const paragraphValue = document.getElementById('practicum').innerText;
        if (
            paragraphValue.includes('Опция 1')
            && paragraphValue.includes('Опция 2')
            && paragraphValue.includes('Опция 3')
        ) {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: '',
                consoleMessages: consoleMessages,
            };
        }
        return {
            valid: false,
            validText: 'Что-то пошло не так. Попробуй ещё раз.',
            result: '',
            consoleMessages: consoleMessages,
        }
    } catch (e) {
        console.log(e instanceof SyntaxError);
        return {valid: false, validText: 'Ошибка синтаксиса', result: e.toString()}
    }
}
export default task_11;