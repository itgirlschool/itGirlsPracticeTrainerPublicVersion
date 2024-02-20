import renderEvalResult from "../renderEvalResult.js";

export default function  task_10 (value){
    console.log(value)
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    function resultStorageValid (){
        try {
            return  JSON.parse( localStorage.getItem('arrayTen'))
        }
        catch (e){
            console.error(e)
            return {}
        }
    }
        if(Array.isArray(resultStorageValid()) && resultStorageValid().length === 3 )return {
            valid: true,
            validText: resultTextValid,
            result: 'Массив arr был записан в Local Storage.',
            localStorage:true
        }
        return {valid:false,validText:resultTextErrValid,result:consoleValue,localStorage:true}
}

