import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_14 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const pItems = document.querySelectorAll('p');
        let result;
        pItems.forEach(item => {
            if(item.innerText === 'Огого, что могу!') {
                result = true
            }
        })
        if(result) {
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
export default task_14
