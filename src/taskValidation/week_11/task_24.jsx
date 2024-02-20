import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_24 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const input = document.getElementById('practicum24');
        if(input.defaultValue === 'Новое значение') {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: '',
                consoleMessages
            };
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: '',consoleMessages}
    }catch (e) {
        return {valid: false, validText: 'Ошибка', result: e.toString()}
    }

}
export default task_24
