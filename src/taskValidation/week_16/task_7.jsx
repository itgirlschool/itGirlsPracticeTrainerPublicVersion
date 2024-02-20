import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_7 = (value) => {
    try{
        const consoleMessages = captureConsoleMessages(value);
        const paragraphValue = document.getElementById('practicum').innerText;
        if(
            paragraphValue.includes('-secondName')
            && paragraphValue.includes('-secondEmail')
            && paragraphValue.includes('-checkboxOne')
            && paragraphValue.includes('-checkboxTwo')
            && paragraphValue.includes('-checkboxThree')
            && paragraphValue.includes('-checkboxThree')
        ) {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: '',
                consoleMessages: consoleMessages,
            };
        }
        return {
            valid: false,
            validText: 'Что-то пошло не так. Попробуй ещё раз.',
            result: '',
            consoleMessages: consoleMessages,
        }
    }catch (e) {
        console.log(e instanceof SyntaxError);
        return {valid: false, validText: 'Ошибка синтаксиса', result: e.toString()}
    }
}
export default task_7;