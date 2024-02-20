import captureConsoleMessages from "../captureConsoleMesseges.jsx";

let firstCall = true;

function  task_17 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const divElement = document.getElementById('practicum17');
        if(firstCall && divElement.classList.value === 'boxWithBorder html-yellow-div red') {
            firstCall = false //перезаписываем
            return {
                valid: false,
                validText: 'Отлично! Нажми ещё раз, чтобы проверить работу метода toggle.',
                result: '',
                consoleMessages
            };
        }
        if(!firstCall && divElement.classList.value === 'boxWithBorder html-yellow-div') {
            firstCall = true //снова перезаписываем
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
export default task_17
