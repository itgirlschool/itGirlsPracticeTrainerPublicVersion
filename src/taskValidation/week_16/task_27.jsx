import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_27 = (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        const nameValue = document.querySelector('#thirdName').value;
        const emailValue = document.querySelector('#thirdEmail').value;
        const paragraphValue = document.getElementById('practicum').textContent;

        if(nameValue === '' || emailValue === '') {
            return {
                valid: false,
                validText: 'Необходимо заполнить поля формы.',
                result: '',
                consoleMessages: consoleMessages,
            }
        }
        if (
            (paragraphValue === nameValue + ', ' + emailValue)
            || (paragraphValue === nameValue + ',' + emailValue)
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
export default task_27;
