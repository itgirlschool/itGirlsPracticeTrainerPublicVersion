import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_3 = async(value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const paragraphValue = document.querySelector('#practicum').textContent;
        if (paragraphValue.includes('Ошибка!')) {
            return {
                valid: true,
                validText: 'Отличная работа! Можешь приступать к следующему заданию.',
                result: '',
                consoleMessages: consoleMessages,
            };
        }

        return {
            valid: false,
            validText: 'Что-то пошло не так. Прочитай внимательно задание и попробуй ещё раз.',
            result: '',
            consoleMessages: consoleMessages,
        };
    } catch (e) {
        return {valid: false, validText: 'Синтаксическая ошибка!', result: e.toString()}
    }
}
export default task_3;