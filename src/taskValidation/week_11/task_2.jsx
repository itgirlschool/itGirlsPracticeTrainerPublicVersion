import captureConsoleMessages from '../captureConsoleMesseges.jsx'

function task_2(value) {
    try {
        const consoleMessages = captureConsoleMessages(value)
        const spanValue = document.getElementById('practicum2').textContent;
        if (spanValue === 'Привет, Мир!') {
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
            result: spanValue,
            consoleMessages: consoleMessages
        }
    } catch (e) {
        return {valid: false, validText: 'Ошибка синтаксиса', result: e.toString()}
    }

}

export default task_2
