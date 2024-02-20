import captureConsoleMessages from "../captureConsoleMesseges.jsx";

const task_10 = async (value) => {
    try {
        const consoleMessages = captureConsoleMessages(value);

        if(consoleMessages.length) {
            const consoleObj = consoleMessages[0];
            if (consoleObj.props.children === 'Доступ запрещен для лиц младше 18 лет') {
                return {
                    valid: true,
                    validText: 'Молодец! Ты успешно перехватила ошибку.',
                    result: '',
                    consoleMessages: consoleMessages,
                };
            } else {
                return {
                    valid: false,
                    validText: 'Результат не соответствует ожидаемому.',
                    result: '',
                    consoleMessages: consoleMessages,
                };
            }
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
export default task_10;
