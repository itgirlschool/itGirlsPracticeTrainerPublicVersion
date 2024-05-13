export default function  task8 (value){
    value = value.trim();

    if (value.includes('https://t.me/itgirlschool') && value.includes('https://vk.com/itgirlschool')) {
        return true;
    } else {
        return false;
    }
}
