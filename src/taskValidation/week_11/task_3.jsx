import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_3 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const spanValue = document.getElementById('practicum3').textContent;
        if(spanValue === 'Заголовок изменен!' || spanValue === 'Заголовок изменён!') {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: value,
                consoleMessages
            };
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: spanValue,consoleMessages}
    }catch (e) {
        return {valid: false, validText: 'Ошибка синтаксиса', result: e.toString()}
    }

}
export default task_3
