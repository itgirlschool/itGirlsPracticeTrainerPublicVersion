import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_27 = async (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const paragraphValue = document.querySelector('#practicum').textContent;
        if (paragraphValue !== '') {
            return {
                valid: true,
                validText: 'Молодец! Ты нашла ошибку и исправила её.',
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
        return {
            valid: true,
            validText: 'В данном коде присутствует синтаксическая ошибка. Подумай, почему так произошло. Исправлять ошибку не надо.',
            result: e.toString()
        }
    }
}
export default task_27;
