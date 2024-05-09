export default function task8(value) {
    
    const correctAnswer = '<!DOCTYPE html>\n' +
    '<html lang="ru">\n' +
    '  <head>\n' +
    '    <title>Я заголовок страницы</title>\n' +
    '  </head>\n' +
    '  <body>Я содержимое страницы</body>\n' +
    '</html>';
    console.log(correctAnswer); 
    console.log(value === correctAnswer);

    if (value.trim() !== correctAnswer.trim()) {
        return false;
    } else {
        return true;
    } 
}