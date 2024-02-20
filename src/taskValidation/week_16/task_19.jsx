import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_19 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const formsContainer = document.querySelector('.forms-container');
        const form = document.forms.formOne;
        const select = form.elements.firstSelect;

        if (
            (select.value === 'Опция 1' && formsContainer.style.backgroundColor === 'red')
            || (select.value === 'Опция 2' && formsContainer.style.backgroundColor === 'green')
            || (select.value === 'Опция 3' && formsContainer.style.backgroundColor === 'blue')
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
export default task_19;