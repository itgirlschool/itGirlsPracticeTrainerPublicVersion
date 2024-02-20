import renderEvalResult from "../renderEvalResult.js";

export default function  task_18 (value){
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё стерлось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
        if(value.indexOf('localStorage.clear()') !== -1)return {
            valid: true,
            validText: resultTextValid,
            result:consoleValue ,
            localStorage:true
        }
        return {valid:false,validText:resultTextErrValid,result:consoleValue,localStorage:true}

}
