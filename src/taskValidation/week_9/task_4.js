import logFunction from "../logFunction.js";
function  task_4 (value){
    const resultTextValid = 'Склеивание строк получилось, ты молодец! Можем двигаться дальше.'
    const resultErrTextValid ='Результат не совсем верный, что-то где-то не так, посмотри внимательно на свой код и попробуй еще раз.'
    try {
        const newValue = logFunction(value)
        const arrValue = newValue.split(' ')
        if (arrValue.length > 1 && arrValue.length < 4){
            if(arrValue.includes('Добро') && arrValue.includes('пожаловать,'))return {valid:true,validText:resultTextValid,result:newValue}
        }
        return {valid:false,validText:resultErrTextValid,result: newValue}
    }catch (e){
        console.log(e instanceof SyntaxError);
    }


    return ({valid:false,validText:'Ошибка синтаксиса! Проверь, закрыты ли все скобки и кавычки.',result:value})
}
export default task_4