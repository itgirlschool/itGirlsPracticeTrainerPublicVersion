import logFunction from "../logFunction.js";
function  task_2 (value){



    try {
        const result = logFunction(value)
        const resultTextValid = `Ура! Мы получили верный результат. Можешь приступать к следующему заданию.`
        const errText = 'Хм, что-то не так, имя какое-то странное, попробуй еще раз!'
        if(result.length >2 && result.length < 10 )return  {valid:true,validText:resultTextValid,result:result}
        return {valid:false,validText:errText,result:result}
    }catch (e){
        console.log(e instanceof SyntaxError);
    }


    return ({valid:false,validText:'Ошибка синтаксиса! Проверь, закрыты ли все скобки и кавычки.',result:value})
}
export default task_2