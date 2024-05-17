export default function task10 (value) {
    value = value.trim();
    
    if (value.includes('<div class="page"') && 
    value.includes('<img class="img"') && 
    value.includes('<h1 class="title">') && 
    value.includes('<h2 class="subtitle">') && 
    value.includes('<p class="text">') && 
    (value.match(/<a class="link"/g) || []).length === 2) {
        return true;
    } else {
        return false;
    }
}