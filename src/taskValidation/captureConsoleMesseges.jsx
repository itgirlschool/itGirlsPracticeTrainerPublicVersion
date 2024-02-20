import {v4 as uuidv4} from "uuid";

 function captureConsoleMessages(code) {
    const consoleMessages = [];

    const originalConsoleLog = console.log;
    const originalConsoleWarn = console.warn;
    const originalConsoleError = console.error;

    console.log = function (...args) {
        consoleMessages.push({ type: 'log', message: args.join(' ') });
        originalConsoleLog.apply(console, args);
    };

    console.warn = function (...args) {
        consoleMessages.push({ type: 'warn', message: args.join(' ') });
        originalConsoleWarn.apply(console, args);
    };

    console.error = function (...args) {
        consoleMessages.push({ type: 'error', message: args.join(' ') });
        originalConsoleError.apply(console, args);
    };

    // Выполняем код
    const executeCode =  new Function(code);
    executeCode();

    console.log = originalConsoleLog;
    console.warn = originalConsoleWarn;
    console.error = originalConsoleError;

     return  consoleMessages.map(item => {
        if (item.message == null || item.message === '' ) {
            return <span key={uuidv4()}>null</span>
        }
        return <span key={uuidv4()}>{item.message}</span>
    })

}
export default captureConsoleMessages
