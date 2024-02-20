import renderEvalResult from "../renderEvalResult.js";

export default function  task_1 (value){
    const consoleValue =    renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const resultStorage = localStorage.getItem('games')
        if(+resultStorage === 11)return {
            valid: true,
            validText: resultTextValid,
            result: '{game:11}',
            localStorage:true
        }

        return {valid:false,validText:resultTextErrValid,result:consoleValue,localStorage:true}
}





































