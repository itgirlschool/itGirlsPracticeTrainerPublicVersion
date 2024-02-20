import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_29 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const form= document.forms.formTwo;
        const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked')
        const selectedOptions = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent);

        const paragraphValue = document.getElementById('practicum').textContent;
        if (!selectedOptions.length) {
            return {
                valid: false,
                validText: 'Выбери один или более вариантов.',
                result: '',
                consoleMessages: consoleMessages,
            }
        }
        if (paragraphValue === selectedOptions.join(',')) {
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
export default task_29;