import  {addDefaultLocalStorageTask} from './funcDefaultaddLocalStorage.js'
import renderEvalResult from "../renderEvalResult.js";

export default function  task_21 (value) {

    let resultTextErr = addDefaultLocalStorageTask("lesson_18",21)
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const inputValue = document.querySelector('#task21').value
    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('cartItems'))
        } catch (e) {
            resultTextErr = 'Попытка записать невалидные данные в localStorage, проверьте, правильно ли вы их записываете.'
            console.log(resultTextErr)
            console.error(e)
            return {}
        }
    }
        if (Array.isArray(resultStorageValid()) && resultStorageValid().length > 3 && resultStorageValid()[resultStorageValid().length - 1] === inputValue) return {
            valid: true,
            validText: resultTextValid,
            result: 'Добавлен новый элемент в массив arr.',
            localStorage: true,
        }
        return {valid: false, validText: resultTextErrValid, result:resultTextErr || consoleValue, localStorage: true}

}
