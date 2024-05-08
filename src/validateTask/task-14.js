// export default function  task14 (value){
//     return true
// }

export default function task14 (value) {
    value = value.trim();
    if (value.includes('<!DOCTYPE html>')) {
        return true;
    } else {
        return false;
    }
}