import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_22 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);
        const paragraph = document.getElementById('practicum').textContent;
        const form = document.forms.formThree;
        const name = form.elements.thirdName;

        if (
            (name.value === '' && paragraph === 'Введите имя!')
            || (name.value !== '' && paragraph === 'Проверка пройдена')
        ) {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: '',
                consoleMessages: consoleMessages,
            }
        }
        return {
            valid: false,
            validText: 'Что-то пошло не так. Попробуй ещё раз.',
            result: value,
            consoleMessages: consoleMessages,
        };
    } catch (e) {
        console.log(e instanceof SyntaxError);
        return ({valid: false, validText: 'ошибка синтаксиса', result: e.toString()});
    }
}
export default task_22;