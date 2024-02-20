import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_25 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const inputs = document.querySelectorAll('.form__input');
        const result = Object.values(inputs)
            .map(input => {
                input.focus()
                return input.style.border === '1px solid rgb(0, 255, 0)' && input.style.outline === 'none';
            })
            .filter(item => item === false);

        if(!result.length) {
            return {
                valid: true,
                validText: 'Отлично! Теперь установи фокус в одном из инпутов и посмотри результат.',
                result: '',
            }
        }

        return {
            valid: false,
            validText: 'Что-то пошло не так. Возможно стили применились не ко всем инпутам.',
                result: '',
                consoleMessages: consoleMessages,
            }

    } catch (e) {
        console.log(e instanceof SyntaxError);
        return ({valid: false, validText: 'ошибка синтаксиса', result: e.toString()});
    }
}
export default task_25;