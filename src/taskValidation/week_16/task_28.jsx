import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_28 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const selectFormOne = document.getElementById('firstSelect');
        const paragraphValue = document.getElementById('practicum').textContent;

        if(selectFormOne.value === 'Опция 1') {
            return {
                valid: true,
                validText: 'Выберите вторую или третью опцию из выпадающего списка.',
                result: '',
                consoleMessages: consoleMessages,
            }
        }

        if (selectFormOne.value === paragraphValue) {
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
export default task_28;