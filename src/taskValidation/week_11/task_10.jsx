import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_10 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const divElement = document.querySelector('.html-yellow-div');
        if(divElement.style.display === 'none') {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.Элемент исчез',
                result:'',
                consoleMessages
            };
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: '',consoleMessages}
    }catch (e) {
        return {valid: false, validText: 'Ошибка', result: e.toString()}
    }

}
export default task_10
