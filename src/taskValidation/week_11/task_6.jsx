import captureConsoleMessages from "../captureConsoleMesseges.jsx";

function  task_6 (value){
    try{
        const consoleMessages = captureConsoleMessages(value)
        const img = document.getElementById('practicum6');
        if(img.alt === 'Новое изображение') {
            return {
                valid: true,
                validText: 'Отличная работа! Ты всё сделала правильно.',
                result: 'Новое изображение',
                consoleMessages
            };
        }
        return {valid: false, validText: 'Что-то пошло не так. Попробуй ещё раз.', result: '',consoleMessages}
    }catch (e) {
        return {valid: false, validText: 'Ошибка', result: e.toString()}
    }

}
export default task_6
