import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_11 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const divElement = document.getElementById('practicum11');
        if(divElement.style.width === '400px' && divElement.style.height === '200px') {
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
export default task_11
