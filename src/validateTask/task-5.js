export default function task5(value) {
    value = value.trim();
    
    if (value.includes('<h1>IT Girl</h1>') &&
        value.indexOf('<h1>') < value.indexOf('<p>')) {
        return true;
    } else {
        return false;
    }
}