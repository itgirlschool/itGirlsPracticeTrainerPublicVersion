// export default function  task13 (value){
//     return true
// }

export default function task13(value) {
    value = value.trim();
    if (value.includes('<title>Document</title>')) {
        return true;
    } else {
        return false;
    }
}