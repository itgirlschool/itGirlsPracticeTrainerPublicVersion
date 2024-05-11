import task1 from "./task-1.js";
import task2 from "./task-2.js";
import task3 from "./task-3.js";
import task4 from "./task-4.js";
import task5 from "./task-5.js";
import task6 from "./task-6.js";
import task7 from "./task-7.js";
import task8 from "./task-8.js";
import task9 from "./task-9.js";
import task10 from "./task-10.js";

const objTasks = {task1,task2,task3,task4,task5,task6,task7,task8,task9,task10}


export default  function validateTask (value,numberTask){
    const resultTask = objTasks[numberTask]
        return resultTask(value)
}
