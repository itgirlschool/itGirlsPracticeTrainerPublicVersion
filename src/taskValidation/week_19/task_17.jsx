import captureConsoleMessages from "../captureConsoleMesseges.jsx";

let id;
const task_17 = async (value) => {
    clearInterval(id);
    id = undefined;
    let count = 0;
    const paragraphValue = document.querySelector('#practicum');
    paragraphValue.textContent = '';
    try {
        const consoleMessages = captureConsoleMessages(value);

        const result = await new Promise((resolve) => {
            const checkInterval = setInterval(() => {
                id = checkInterval;
                count++;
                const paragraphValue = document.querySelector('#practicum').textContent;
                if (paragraphValue !== '') {
                    clearInterval(checkInterval);
                    id = undefined;
                    if (paragraphValue.includes('{}')) {
                        resolve({
                            valid: true,
                            validText: 'Отличная работа! Ты всё сделала правильно.',
                            result: '',
                            consoleMessages
                        });
                    }
                    if (paragraphValue.includes('Ошибка')) {
                        resolve({
                            valid: true,
                            validText: 'Молодец! Ты правильно обработала ошибку сервера. Можешь приступать к следующему заданию.',
                            result: '',
                            consoleMessages
                        });
                    }
                    resolve({
                        valid: false,
                        validText: 'Что-то пошло не так. Попробуй ещё раз.',
                        result: '',
                        consoleMessages
                    });
                }
                if (count === 5 && paragraphValue === '') {
                    clearInterval(id);
                    id = undefined;
                    resolve({
                        valid: false,
                        validText: 'Что-то пошло не так. Попробуй ещё раз.',
                        result: '',
                        consoleMessages
                    });
                }
                if (count === 5) {
                    clearInterval(id);
                    id = undefined;
                }
            }, 500);
        });

        return result;
    } catch (e) {
        return {valid: false, validText: 'Синтаксическая ошибка!', result: e.toString()}
    }
}
export default task_17;