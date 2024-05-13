export default function task6(value) {
    value = value.trim();
    
    if (value.includes('<h2>Front-End Developer</h2>') &&
        value.indexOf('<h1>') < value.indexOf('<h2>')) {
        return true;
    } else {
        return false;
    }
}