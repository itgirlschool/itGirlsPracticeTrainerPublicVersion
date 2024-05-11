export default function  task8 (value){
    value = value.trim();
    
    if (value.includes('<a href=\"https://t.me/itgirlschool\">') && value.includes('<a href=\"https://vk.com/itgirlschool\">')) {
        return true;
    } else {
        return false;
    }
}