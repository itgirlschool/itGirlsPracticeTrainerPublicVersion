
import { Modal } from "antd";

import {FormattedHtml} from "../FormattedString/FormattedString.jsx";
import modalContent from './modalContent.json'

const ModalRules = ({ setIsOpenModalRules, makeRulesLesson, id }) => {
  const lesson = modalContent.find((lesson) => lesson?.weekNumber === id);
  return (
    <>
      <Modal
        title="Правила пользования практикумом"
        open={true}
        onCancel={() => setIsOpenModalRules(false)}
        onOk={() => makeRulesLesson()}
      >
        <div> <FormattedHtml jsonString={lesson.content}/></div>
      </Modal>
    </>
  );
};

export default ModalRules;
