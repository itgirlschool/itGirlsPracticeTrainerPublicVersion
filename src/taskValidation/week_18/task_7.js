import renderEvalResult from "../renderEvalResult.js";

export default function  task_7 (value){
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    function resultStorageValid (){
        try {
            return  JSON.parse( localStorage.getItem('objectSeven'))
        }
        catch (e){
            console.error(e)
            return {}
        }
    }
        if(resultStorageValid()?.hasOwnProperty('city') && resultStorageValid().hasOwnProperty('country') && resultStorageValid().hasOwnProperty('population') && resultStorageValid().hasOwnProperty('language'))return {
            valid: true,
            validText: resultTextValid,
            result: 'Объект obj был записан в Local Storage.',
            localStorage:true
        }

        return {valid:false,validText:resultTextErrValid,result:consoleValue,localStorage:true}
}
