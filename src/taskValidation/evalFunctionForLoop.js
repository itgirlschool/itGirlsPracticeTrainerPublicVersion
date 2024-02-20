function evalFunctionForLoop(value) {
    let results = [];
    const originalConsoleLog = console.log;
    console.log = (output) => {
        results.push(output);
    };

    eval(value);

    console.log = originalConsoleLog;
    return results;
}

export default evalFunctionForLoop;