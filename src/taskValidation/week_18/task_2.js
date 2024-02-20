import renderEvalResult from "../renderEvalResult.js";

export default function  task_2 (value){
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const resultStorage = localStorage.getItem('numbers')
        if(resultStorage === '7,6,5')return {
            valid: true,
            validText: resultTextValid,
            result: 'В local Storage была записана строка 7,6,5',
            localStorage:true
        }

        return {valid:false,validText:resultTextErrValid,result:consoleValue,localStorage:true}
}


