export default function task10 (value) {
    value = value.trim();

    if (value.includes('<!DOCTYPE html>')) {
        return true;
    } else {
        return false;
    }
}