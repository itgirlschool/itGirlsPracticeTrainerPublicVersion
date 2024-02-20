import captureConsoleMessages from "../captureConsoleMesseges.jsx";

let firstCall = true;

function  task_18 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const divElement = document.getElementById('practicum18');
        if(firstCall && divElement.classList.value === 'html-text active' && value.indexOf('toggle') !== 0) {
            console.log('первый вызов')
            firstCall = false //перезаписываем
            return {
                valid: false,
                validText: 'Отлично! Нажми ещё раз, чтобы проверить работу метода toggle.',
                result: '',
                consoleMessages
            };
        }
        if(!firstCall && divElement.classList.value === 'html-text'  && value.indexOf('toggle') !== 0) {
            console.log('второй вызов')
            firstCall = true //снова перезаписываем
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: '',
                consoleMessages
            };
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: ''}
    }catch (e) {
        return {valid: false, validText: 'Ошибка', result: e.toString()}
    }

}
export default task_18
