import logFunction from "../logFunction.js";
function  task_3 (value){
    const resultTextValid = 'Отличная работа, похоже ты поняла разницу между строками и числами. Переходи к следующему заданию.'
    const resultErrTextValid = 'Видимо что-то не так. Помни, что тип данных numbers пишется без кавычек. Попробуй еще раз.'
    try {
        const result = logFunction(value)
        if(typeof result === "number" && result < 13)return {valid:true,validText:resultTextValid,result:result}
        return {valid:false,validText:resultErrTextValid,result: result}
    }catch (e){
        console.log(e instanceof SyntaxError);
    }
    return ({valid:false,validText:'Ошибка синтаксиса! Проверь, закрыты ли все скобки и кавычки.',result:value})

}
export default task_3