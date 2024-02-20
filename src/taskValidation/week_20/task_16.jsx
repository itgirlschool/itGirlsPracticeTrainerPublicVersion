import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_16 = async (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const paragraphValue = document.querySelector('#practicum').textContent;
        const paragraphValueFinally = document.querySelector('#practicumFinally').textContent;
        if (paragraphValue === '0'  && paragraphValueFinally === 'finally') {
            return {
                valid: true,
                validText: 'Молодец! Отличная работа.',
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
export default task_16;

