import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_22 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const paragraph = document.querySelector('.html-text');
        if(paragraph.innerText === 'Атрибут "src" присутствует: true' || paragraph.innerText === "Атрибут 'src' присутствует: true") {
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
export default task_22
