function logFunction(value){
    let result;
    const originalConsoleLog = console.log;
    console.log = (output) => { result = output };
    (function evaluateExpression(expression) {
        const func = new Function("return " + expression);
        return func();
    })(value)
    console.log = originalConsoleLog;
    return result;
}

 export default logFunction;