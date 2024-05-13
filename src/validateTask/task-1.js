export default function task1(value) {

     const correctAnswer = `<!DOCTYPE html>
<html lang="ru">
<head>
  <title>Я заголовок страницы</title>
</head>
<body>Я содержимое страницы</body>
</html>
     `
    return value.trim() === correctAnswer.trim();
 }
