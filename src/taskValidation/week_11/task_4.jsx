import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_4 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const divElement = document.getElementById('practicum4');
        if(divElement.style.backgroundColor === 'red') {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: value,
                consoleMessages
            };
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: value,consoleMessages}
    }catch (e) {
        return {valid: false, validText: 'Ошибка синтаксиса', result: e.toString()}
    }

}
export default task_4
