export default function task2(value) {
    value = value.trim();
    
    if (value.includes('<title>') && value.includes('</title>')) {
        return true;
    } else {
        return false;
    }
}