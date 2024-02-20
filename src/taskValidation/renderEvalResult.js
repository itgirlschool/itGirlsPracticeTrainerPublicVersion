import evalFunction from "./evalFunction.js";
export  default function renderEvalResult(value){
    let consoleValue
    try {
        consoleValue = evalFunction(value)
    }catch (e){
        consoleValue = e.toString()
    }
    return consoleValue
}
