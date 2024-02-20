import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_13 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const listItems = document.getElementsByTagName('li');
        const firstItem = listItems.item(0);
        if(firstItem.innerText === 'Первый!') {
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
export default task_13
