import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_25 = async (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const paragraphValue = document.querySelector('#practicum').textContent;
        if (paragraphValue === 'Результат: Асинхронная операция успешно выполнена'
            || paragraphValue === 'Произошла ошибка: Произошла ошибка при асинхронной операции') {
            return {
                valid: true,
                validText: 'Молодец! Отличная работа. Можешь приступать к следующему заданию.',
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
export default task_25;
