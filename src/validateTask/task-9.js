export default function task9(value) {
    value = value.trim();
    
    if (value.includes('<title>') && value.includes('</title>')) {
        return true;
    } else {
        return false;
    }
}



