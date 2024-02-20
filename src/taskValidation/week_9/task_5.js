import logFunction from "../logFunction.js";
function  task_5 (value){
    const resultTextValid = 'Молодец! Мне кажется, ты очень хорошо разобралась в этом блоке, давай двигаться дальше.'
    const  resultErrTextValid = 'Что-то пошло не так, попробуй еще раз и помни: тип данных string мы оборачиваем в кавычки.'

    try {
        const newValue = logFunction(value)
        if(newValue === 'Владивосток 2000')return {valid:true,validText:resultTextValid,result:newValue}
        return {valid:false,validText:resultErrTextValid,result: newValue}
    }catch (e){
        console.log(e instanceof SyntaxError);
    }


    return ({valid:false,validText:'Ошибка синтаксиса! Проверь, закрыты ли все скобки и кавычки.',result:value})
}
export default task_5