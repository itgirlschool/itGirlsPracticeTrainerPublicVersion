import logFunction from "../logFunction.js";
function  task_1 (value){
    try {
        const consoleValue = logFunction(value)
        const resultTextValid = `Ура! Мы получили верный результат. Можешь приступать к следующему заданию.`
        const resultTextErrValid = 'К сожалению ответ неверный. Прочти еще раз внимательно задание и попробуй заново. Обрати внимание на синтаксис, возможно где-то не закрыта кавычка или скобка.'
        if('Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть!' === consoleValue)return {valid:true,validText:resultTextValid,result:consoleValue}
        return {valid:false,validText:resultTextErrValid,result:consoleValue}
    }catch (e){
        console.log(e instanceof SyntaxError);
    }
    return ({valid:false,validText:'Ошибка синтаксиса! Проверь, закрыты ли все скобки и кавычки.',result:value})


}
export default task_1
