function evalFunction(value) {
    let result;
    const originalConsoleLog = console.log;
    console.log = (output) => {
        result = output
    };
    console.log(value)
    eval(value)
    console.log = originalConsoleLog;
    return result;
}

export default evalFunction