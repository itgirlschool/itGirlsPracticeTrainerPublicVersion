export function validateEmail(value) {
    const re =
        /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!re.test(String(value).toLowerCase()) || !value) {
        const errorMessage = !value
            ? 'Email не может быть пустым'
            : 'Некорректный email';
        return errorMessage;
    } else {
        return '';
    }
}


