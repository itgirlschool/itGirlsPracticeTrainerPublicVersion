export default function task10 (value) {
    value = value.trim();
    
    if (value.includes('div class="resume">') && 
    value.includes('<img class="resume__img"') && 
    value.includes('<h1 class="resume__title">') && 
    value.includes('<h2 class="resume__subtitle">') && 
    value.includes('<p class="resume__text">') && 
    (value.match(/<a class="resume__link"/g) || []).length === 2) {
        return true;
    } else {
        return false;
    }
}