export default function task4(value) {
    value = value.trim();

    if (value.includes('<p>Welcome to my page!</p>')) {
        return true;
    } else {
        return false;
    }
}