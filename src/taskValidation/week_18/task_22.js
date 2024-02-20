import  {addDefaultLocalStorageTask} from './funcDefaultaddLocalStorage.js'
import renderEvalResult from "../renderEvalResult.js";

export default function  task_22 (value) {

    let resultTextErr = addDefaultLocalStorageTask("lesson_18",22)
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const selectValue = document.querySelector('#task22').value
    const arrTestElement = ['Джинсы','Куртка','Ботинки','Рубашка','Носки','Часы'][selectValue]
    function resultStorageValid() {
        try {
            return JSON.parse(localStorage.getItem('task22'))
        } catch (e) {
            resultTextErr = 'Попытка записать невалидные данные в localStorage, проверьте правильно ли вы их записываете.'
            console.log(resultTextErr)
            console.error(e)
            return {}
        }
    }
        if (Array.isArray(resultStorageValid()) && resultStorageValid().length < 6 && !resultStorageValid().includes(arrTestElement)) return {
            valid: true,
            validText: resultTextValid,
            result: 'Добавлен новый элемент в массив arr.',
            localStorage: true,
        }
        return {valid: false, validText: resultTextErrValid, result:resultTextErr || consoleValue, localStorage: true}

}
