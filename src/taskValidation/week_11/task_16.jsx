import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_16 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const divElement = document.getElementById('practicum16');
        if(divElement.classList.value === 'html-yellow-div red') {
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
export default task_16
