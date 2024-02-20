export default function progressBarValid(resultValid,arrSuccessfully,setArrSuccessfully,taskId,id) {
    const filterProgressItemLength = arrSuccessfully.filter(item => item.numberTask === taskId)

    if (filterProgressItemLength.length === 0) {
        setArrSuccessfully(prevState => [...prevState, {
            valid: resultValid.valid,
            numberTask: taskId,
            lessonId: id
        }])
    } else if (filterProgressItemLength.length > 0) {
        const arrValid = arrSuccessfully.map(item => {
            if (item.numberTask === taskId && item.valid === false) {
                item.valid = resultValid.valid
                return item
            }
            return item
        })
        setArrSuccessfully(arrValid)
    } else {
        setArrSuccessfully([...arrSuccessfully, {valid: resultValid.valid, numberTask: taskId, lessonId: id}])
    }
}
