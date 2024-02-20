import allValidFunc_w_9 from "./week_9/allValidFunc_w_9.js";
import allValidfunc_w_10 from "./week_10/allValidfunc_w_10.js";
import allValidfunc_w_11 from "./week_11/allValidfunc_w_11.js";
import allValidfunc_w_12 from "./week_12/allValidfunc_w_12.js";
import allValidfunc_w_13 from "./week_13/allValidfunc_w_13.js";
import allValidfunc_w_14 from './week_14/allValidfunc_w_14.js';
import allValidfunc_w_15 from "./week_15/allValidfunc_w_15.js";
import allValidfunc_w_16 from "./week_16/allValidfunc_w_16.js";
import allValidfunc_w_17 from "./week_17/allValidfunc_w_17.js";
import allValidfunc_w_18 from "./week_18/allValidfunc_w_18.js";
import allValidfunc_w_19 from "./week_19/allValidfunc_w_19.js";
import allValidfunc_w_20 from "./week_20/allValidfunc_w_20.js";

const lesson_9 = allValidFunc_w_9;
const lesson_10 = allValidfunc_w_10;
const lesson_11 = allValidfunc_w_11;
const lesson_12 = allValidfunc_w_12;
const lesson_13 = allValidfunc_w_13;
const lesson_14 = allValidfunc_w_14;
const lesson_15 = allValidfunc_w_15;
const lesson_16 = allValidfunc_w_16;
const lesson_17 = allValidfunc_w_17;
const lesson_18 = allValidfunc_w_18;
const lesson_19 = allValidfunc_w_19;
const lesson_20 = allValidfunc_w_20;

const objLessonsValid = {
    lesson_9, lesson_10, lesson_11,lesson_12, lesson_13,lesson_14,lesson_15,lesson_16,lesson_17,lesson_18, lesson_19, lesson_20
}

export default function validation(value, lessonNumber, taskNumber) {
    const linkArrFunctionValidResult = objLessonsValid[lessonNumber];
    const linkFunctionValidateResult = linkArrFunctionValidResult[taskNumber - 1];
    return linkFunctionValidateResult(value);
}

export const resultTextValid = `Ура! Мы получили верный результат. Можешь приступать к следующему заданию.`;
export const resultTextErrValid = 'К сожалению ответ не верный. Прочти еще раз внимательно задание, и попробуй снова.';
