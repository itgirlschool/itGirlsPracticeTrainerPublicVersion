import renderEvalResult from "../renderEvalResult.js";

export default function  task_2 (value){
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Супер, ты научилась создавать методы, переходи к следующему заданию.'
    const resultTextErrValid = 'Что-то не так, посмотри внимательно код. Передала ли ты классу имя и фамилию?\n  Присутствует ли запятая между именем и фамилией? \n  Помни, чтобы создать из класса инстанс обьекта, нам нужно перед ним поставить слово new.'

        if(typeof consoleValue === 'string' && consoleValue.indexOf(',') !== -1)return {
            valid: true,
            validText: resultTextValid,
            result: JSON.stringify(consoleValue)
        }

        return {valid:false,validText:resultTextErrValid,result:JSON.stringify(consoleValue)}
}
