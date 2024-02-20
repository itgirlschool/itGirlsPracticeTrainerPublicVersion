import servicesIndexedDb from "./servicesIndexedDb.js";
const {getItemsFromStore1, getItemsFromStore2, addItemToStore1, addItemToStore2, updateItemInStore1, updateItemInStore2, deleteItemFromStore1, deleteItemFromStore2,} = servicesIndexedDb()

export async function addlessonsIndexedBD(lesson, arr, rules = false){
    const item = {id:lesson,arrValid:arr,rules}
    await addItemToStore1(item)
}

export  async  function  addRulesStatusIndexedBD(statusRules){
    await addItemToStore2({id:'rules',status:statusRules})
}
export  async  function  getRulesStatusIndexedBD(){
    return await getItemsFromStore2()
}

export async function getLessonIndexedBd (id){
    const lessons = await getItemsFromStore1()
    const lessonActive = lessons.find(item => item.id === id)
    return lessonActive ? lessonActive.arrValid : []
}

export async function  getAllLessonsIndexedBD(){
    const  result = await  getItemsFromStore1()

    return result ? result : false
}
