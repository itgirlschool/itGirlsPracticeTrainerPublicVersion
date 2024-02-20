import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_8 = (value) => {
    try{
        const consoleMessages = captureConsoleMessages(value)
        const paragraphValue = document.querySelector('.html-text').textContent;
        if(+paragraphValue === 3) {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: '',
                consoleMessages
            };
        }
        return {
            valid: false,
            validText: 'Что-то пошло не так. Попробуй ещё раз.',
            result: '',
            consoleMessages
        }
    }catch (e) {
        return {valid: false, validText: 'Ошибка', result: e.toString()}
    }

}
export default task_8;
