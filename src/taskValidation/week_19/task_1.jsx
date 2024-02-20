import captureConsoleMessages from "../captureConsoleMesseges.jsx";

let id;
const task_1 = async(value) => {
    clearInterval(id);
    id = undefined;
    let count = 0;
    try {
        const consoleMessages = captureConsoleMessages(value);

        const result = await new Promise((resolve) => {
            const checkInterval = setInterval(() => {
                id = checkInterval;
                count++

                const paragraphValue = document.querySelector('#practicum');
                if(paragraphValue.textContent !== '') {
                    clearInterval(checkInterval);
                    id = undefined;
                    if (
                        paragraphValue.textContent.includes('ошибка')
                        || +paragraphValue.textContent === 200
                        || +paragraphValue.textContent === 401
                        || +paragraphValue.textContent === 403
                        || +paragraphValue.textContent === 404
                        || +paragraphValue.textContent === 500
                    ) {
                        resolve({
                            valid: true,
                            validText: 'Отличная работа!',
                            result: '',
                            consoleMessages: consoleMessages,
                        });
                    } else {
                        resolve({
                            valid: false,
                            validText: 'Что-то пошло не так. Попробуй ещё раз.',
                            result: '',
                            consoleMessages: consoleMessages,
                        });
                    }
                }
                if (count === 5 && paragraphValue.textContent === '') {
                    clearInterval(id);
                    id = undefined;
                    resolve({
                        valid: false,
                        validText: 'Что-то пошло не так. Попробуй ещё раз.',
                        result: '',
                        consoleMessages
                    });
                }
                if(count === 5) {
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
export default task_1;
