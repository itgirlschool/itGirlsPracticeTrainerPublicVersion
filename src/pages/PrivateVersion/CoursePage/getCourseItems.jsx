import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
export  function getCourseItems(courseData, courseId,stateArrAllLessonsIndexedBD) {
  const panelStyle = {
    marginBottom: 24,
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid rgb(234 93 128)",
  };
  const items = [];
  const uniqueBlocks = new Set(courseData.map((lesson) => lesson.block));
  uniqueBlocks.forEach((block) => {
    const lessons = courseData.filter((lesson) => lesson.block === block);
    items.push({
      key: block,
      label: block,
      style: panelStyle,
      children: lessons.map( (lesson) => {
        let resultValidTasks = false
        const arrValidLesson =  stateArrAllLessonsIndexedBD.filter(item => item.id === lesson.id)

        if(arrValidLesson.length > 0){
          resultValidTasks = arrValidLesson[0].arrValid.filter(item => item.valid)
        }
        let  renderSuccessfullyLesson;
        let  interest = 0
        if(resultValidTasks.length > 0 && resultValidTasks.length < lesson.tasks?.length){
          renderSuccessfullyLesson = 'start'
         interest = calcInterestSuccessfully(lesson.tasks?.length,resultValidTasks.length)
        }else if(resultValidTasks.length > 0 && resultValidTasks.length === lesson?.tasks?.length){
          renderSuccessfullyLesson = 'successfully'
        }



        return (
          <div className={`wrapper_list_tasks ${renderSuccessfullyLesson === 'successfully' || renderSuccessfullyLesson === 'start' ? 'borderSuccessfully' : null}`} key={uuidv4()} >
            <Link
              to={`/${courseId}/${lesson.id}`}
              className="home-accordion-link"
            >
              {lesson.title}
            </Link>
            { renderSuccessfullyLesson === 'successfully' ? <span>Пройдено</span> : renderSuccessfullyLesson === 'start' ?  <span>{interest}%</span> : null  }
          </div>
        );
      }),
    });
  });
  return items;
}


function  calcInterestSuccessfully(counterTask,successfullyTask){
  if(counterTask < 0) return 0
  return  ((successfullyTask / counterTask) * 100).toFixed()
}
