import captureConsoleMessages from "../captureConsoleMesseges.jsx";

let id;
const task_2 = async (value) => {
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
                const paragraphValue = document.querySelector('#practicum');
                if (paragraphValue.textContent !== '' && paragraphValue.textContent !== '[Object Object]') {
                    clearInterval(checkInterval);
                    id = undefined;
                    resolve({
                        valid: true,
                        validText: 'Отличная работа!',
                        result: '',
                        consoleMessages,
                    });
                }
                if (count === 5 && paragraphValue.textContent === '') {
                    clearInterval(id);
                    id = undefined;
                    resolve({
                        valid: false,
                        validText: 'Что-то пошло не так. Попробуй ещё раз.',
                        result: '',
                        consoleMessages,
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
export default task_2;