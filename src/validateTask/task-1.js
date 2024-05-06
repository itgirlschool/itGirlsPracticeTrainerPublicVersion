// import tasksPublic from "../pages/PublicVersion/tasksPublic.json";

export default function task1(value) {
    
    // const correctAnswer = tasksPublic[0].correctAnswer;
    const correctAnswer = '<!DOCTYPE html><html lang="ru"><head><title>Я заголовок страницы</title></head><body>Я содержимое страницы</body> </html>';
    console.log(correctAnswer);
    console.log(value);

    if (value.trim() !== correctAnswer.trim()) {
        return false;
    } else {
        return true;
    } 

}

