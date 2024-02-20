import evalFunctionForLoop from "./evalFunctionForLoop.js";
export  default function renderEvalFunctionForLoop(value){
    let consoleValue
    try {
        consoleValue = evalFunctionForLoop(value)
    }catch (e){
        consoleValue = e.toString()
    }
    return consoleValue
}
