import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_1 = (value) => {
    try{
        const consoleMessages = captureConsoleMessages(value);
        const paragraph = document.getElementById('practicum');
        if(+paragraph.innerText === 5) {
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
export default task_1;