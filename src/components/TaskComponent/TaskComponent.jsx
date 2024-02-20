import {FormattedHtml, FormattedString} from "../FormattedString/FormattedString.jsx";
import parse from 'html-react-parser';
import React from "react";

function TaskComponent({task}) {
    return <div className="container_task">
        <h1>{task.title}</h1>
        <FormattedString string={task.description}/>
        {task.comment &&
            <p className="container_task-comment">{task.comment}</p>
        }
        {task.html &&
            <>
                <div className="container_task-html-comment">
                    <FormattedHtml jsonString={task.html}/>
                </div>
                <div>{parse(task.htmlJSX)}</div>
            </>
        }
    </div>;
}
export default TaskComponent;