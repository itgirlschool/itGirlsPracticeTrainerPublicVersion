import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_7 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const linkElement = document.querySelector('.html-link');
        if(linkElement.href === 'https://www.google.com/' && linkElement.textContent === "Ссылка на Google") {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: linkElement.href,
                consoleMessages
            };
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: linkElement.href,consoleMessages}
    }catch (e) {
        return {valid: false, validText: 'Ошибка', result: e.toString()}
    }

}
export default task_7
