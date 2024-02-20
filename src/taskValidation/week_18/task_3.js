import renderEvalResult from "../renderEvalResult.js";

export default function  task_3 (value){
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const resultStorage = localStorage.getItem('users')
        if(resultStorage === 'name=John,age=25')return {
            valid: true,
            validText: resultTextValid,
            result: 'Строка "name=John, age=25" была записана в Local Storage.',
            localStorage:true
        }

        return {valid:false,validText:resultTextErrValid,result:consoleValue,localStorage:true}
}
