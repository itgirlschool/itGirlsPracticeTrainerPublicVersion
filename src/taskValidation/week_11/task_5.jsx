import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_5 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const inputElement = document.getElementById('practicum5').value;
        if(inputElement === 'Новое значение') {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: inputElement,
                consoleMessages
            };
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: value,consoleMessages}
    }catch (e) {
        return {valid: false, validText: 'Ошибка синтаксиса', result: e.toString()}
    }

}
export default task_5
