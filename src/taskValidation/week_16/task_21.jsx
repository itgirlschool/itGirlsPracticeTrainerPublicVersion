import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_21 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);
        const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
        const paragraph = document.getElementById('practicum').textContent;
        let isChecked;

        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                isChecked = true;
            }
        })

        if (
            (!isChecked && paragraph === 'Проверка не пройдена')
            || (isChecked && paragraph === 'Проверка пройдена')
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
export default task_21;