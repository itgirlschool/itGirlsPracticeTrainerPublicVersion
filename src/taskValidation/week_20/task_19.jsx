import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_19 = async (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const paragraphValue = document.querySelector('#practicum').textContent;
        const paragraphValueFinally = document.querySelector('#practicumFinally').textContent;

        if (
            (paragraphValue === 'Данные успешно получены'  && paragraphValueFinally === 'finally19')
            || (paragraphValue === 'Произошла ошибка при получении данных'  && paragraphValueFinally === 'finally19')
        ) {
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
export default task_19;

