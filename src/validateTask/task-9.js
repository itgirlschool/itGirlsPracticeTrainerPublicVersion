export default function task9(value) {
    value = value.trim();

    if (value.includes('<img src="cat.png">') &&
        value.indexOf('<img>') < value.indexOf('<h1>')) {
        return true;
    } else {
        return false;
    }
}