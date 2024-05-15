export default function task3(value) {
    return !!value.includes('<title>') && value.includes('</title>');
}
