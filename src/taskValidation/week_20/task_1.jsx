import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_1 = async(value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const paragraphValue = document.querySelector('#practicum').textContent;
        if (paragraphValue.includes('Ошибка была перехвачена:')) {
            return {
                valid: true,
                validText: 'Отличная работа! Ты правильно обработала ошибку',
                result: '',
                consoleMessages: consoleMessages,
            };
        }
        return  {
            valid: false,
            validText: 'Что-то пошло не так. Попробуй ещё раз.',
            result: '',
            consoleMessages: consoleMessages,
        };
    } catch (e) {
        return {valid: false, validText: 'Синтаксическая ошибка!', result: e.toString()}
    }
}
export default task_1;