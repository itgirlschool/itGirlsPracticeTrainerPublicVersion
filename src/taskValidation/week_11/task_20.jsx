import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_20 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const divElement = document.getElementById('practicum20');
        if(divElement.innerHTML === '<p>Добавлено в начало</p>Задание 20') {
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
export default task_20
