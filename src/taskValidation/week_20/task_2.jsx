import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_2 = async(value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const paragraphValue = document.querySelector('#practicum').textContent;
        if (paragraphValue.includes('Не удалось перезаписать константу:')) {
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
export default task_2;