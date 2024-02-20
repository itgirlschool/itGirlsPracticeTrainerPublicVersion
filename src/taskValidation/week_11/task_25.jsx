import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_25 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const paragraph = document.querySelector('.html-text');
        if(paragraph.innerText === 'Добавленный атрибут: Дополнительная информация') {
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
export default task_25
