import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_27 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const divResultElement = document.getElementById('result');
        if(divResultElement.innerText === 'false') {
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
export default task_27
