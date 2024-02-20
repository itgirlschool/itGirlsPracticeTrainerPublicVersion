import  captureConsoleMessages from '../captureConsoleMesseges.jsx'
import { v4 as uuidv4 } from 'uuid';
function task_1(value) {
    try {
        const consoleMessages = captureConsoleMessages(value)
        const paragraphValue = document.getElementById('practicum1').textContent;
        if (paragraphValue === 'Привет!') {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: value,
                consoleMessages: consoleMessages,
            };
        }
        return {
            valid: false,
            validText: 'Что-то пошло не так. Попробуй ещё раз.',
            result: value,
            consoleMessages: consoleMessages,
        };
    } catch (e) {
        return {
            valid: false,
            validText: 'Произошла ошибка, попробуй ее исправить',
            result: e.toString(),

        };
    }
}

export default task_1;
