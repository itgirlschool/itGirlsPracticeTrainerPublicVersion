import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_8 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const liElements = document.querySelectorAll('li');
        for (const liElement of liElements) {
            if(liElement.innerText === 'Новый элемент') {
                return {
                    valid: true,
                    validText: 'Отличная работа! Ты всё сделала правильно.',
                    result: 'Новый элемент',
                    consoleMessages
                };
            }
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result:'',consoleMessages}

    }catch (e) {
        return {valid: false, validText: 'Ошибка', result: e.toString()}
    }
}
export default task_8
