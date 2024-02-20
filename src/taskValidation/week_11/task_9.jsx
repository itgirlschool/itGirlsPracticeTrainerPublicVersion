import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_9 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const options = document.querySelectorAll('option');
        for (const option of options) {
            if(option.innerText === 'Новый вариант') {
                return {
                    valid: true,
                    validText: 'Отличная работа! Ты всё сделала правильно.',
                    result: 'Новый вариант',
                    consoleMessages
                };
            }
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: '',consoleMessages}
    }catch (e) {
        return {valid: false, validText: 'Ошибка', result: e.toString()}
    }

}
export default task_9
