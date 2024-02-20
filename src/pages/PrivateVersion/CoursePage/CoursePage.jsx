import {useParams, useNavigate} from "react-router-dom";
import {Collapse} from "antd";
import {frontendTasks} from "../../../dataCourse/frontendData.js";
import {backendTasks} from "../../../dataCourse/backendData.js";
import {getCourseItems} from "./getCourseItems.jsx";
import "./CoursePage.scss";
import {useEffect, useState} from "react";
import {getAllLessonsIndexedBD} from "../../../common/servicesIndexdBD/lessonsIndexedBD.js";
import Spinner from "../../../components/Spinner/Spinner.jsx";

const CoursePage = () => {
    const navigate = useNavigate()
    const {courseId} = useParams();

    const [stateArrAllLessonsIndexedBD, setStateArrAllLessonsIndexedBD] = useState(false)

    useEffect(() => {
        setStateArrAllLessons()

    }, [])


    async function setStateArrAllLessons() {
        const result = await getAllLessonsIndexedBD()
        setStateArrAllLessonsIndexedBD(result)
    }

    const getItems = () => {
        if (courseId === "frontend") {
            return getCourseItems(frontendTasks, courseId, stateArrAllLessonsIndexedBD);
        }
        if (courseId === "backend") {
            return getCourseItems(backendTasks, courseId, stateArrAllLessonsIndexedBD);
        }
    };


    if (!stateArrAllLessonsIndexedBD) {
        return <Spinner/>
    }
    return (
        <main className="home-container">
            <h2 className="home-title">Приветствуем тебя на "название"!</h2>
            <div className="home-citation-container">
                <p className="home-citation">
                    &laquo;Идите уверенно в направлении своей мечты. Живите той жизнью,
                    которую вы себе представляли.&raquo;
                </p>
                <p className="home-author">&mdash; Генри Дэвид Торо</p>
            </div>
            <Collapse
                className="home-accordion"
                accordion={true}
                bordered={false}
                items={getItems()}
            />
        </main>
    );
};
export default CoursePage;
