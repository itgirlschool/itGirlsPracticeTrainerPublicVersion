import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_7 = async (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        if (consoleMessages.length) {
            const consoleObj = consoleMessages[0];
            const result = Number(consoleObj.props.children);
            if(consoleObj.props.children.includes('Деление на ноль недопустимо') || !isNaN(result)) {
                return {
                    valid: true,
                    validText: 'Молодец! Отличная работа.',
                    result: '',
                    consoleMessages: consoleMessages,
                };
            }
            return {
                valid: false,
                validText: 'Что-то пошло не так. Прочитай внимательно задание и попробуй ещё раз.',
                result: '',
                consoleMessages: consoleMessages,
            };
        }
        return {
            valid: false,
            validText: 'Что-то пошло не так. Прочитай внимательно задание и попробуй ещё раз.',
            result: '',
            consoleMessages: consoleMessages,
        };
    } catch (e) {
        return {valid: false, validText: 'Синтаксическая ошибка!', result: e.toString()}
    }
}
export default task_7;
