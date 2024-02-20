import './ProgressBar.scss';
import { v4 as uuidv4 } from 'uuid';
import {addlessonsIndexedBD} from "../../common/servicesIndexdBD/lessonsIndexedBD.js";
import {useEffect} from "react";
import log from "loglevel";


const ProgressBar = ({ totalTasks, currentTask, completedTasks,lessonNumber }) => {

    const  arrSortCompletedTask = sortCompletedTask(completedTasks)
    useEffect( ()=>{
        console.log(arrSortCompletedTask)
        addlessonsIndexedBD(lessonNumber,arrSortCompletedTask)
    })

    function sortCompletedTask(arr){
       const copyArr = [...arr]
        if(arr.length > 0){
            if(arr[0].numberTask > 1){
                console.log(arr[0].numberTask)
                for (let i = arr[0].numberTask -1; i > 0; --i){
                    copyArr.unshift({valid:false,numberTask:`${i}`,lessonId:lessonNumber})
                }
            }

        }
       return copyArr
    }




    const renderTasks = () => {
        const tasks = [];
        for (let i = 1; i <= totalTasks; i++) {
            let taskClass = 'task'
            if(arrSortCompletedTask.length === 0){
                 taskClass = 'task';

            }else if(+arrSortCompletedTask[i -1]?.numberTask === i) {

                taskClass = arrSortCompletedTask[i -1]?.valid ? 'task correct completed' : 'task incorrect completed'
            }
            tasks.push(<div key={i} className={taskClass}></div>)
        }
        return tasks.map((item, index) => {
            if (+currentTask === (index + 1)) {
                item = <div key={uuidv4()} className={item.props.className + ' current'}></div>
                return item
            }
            return item
        });
    };

    return (
        <div className="progress-bar">
            <h3>{currentTask}\{totalTasks}</h3>
            <div className="tasks">{renderTasks()}</div>
        </div>
    );
};

export default ProgressBar;








