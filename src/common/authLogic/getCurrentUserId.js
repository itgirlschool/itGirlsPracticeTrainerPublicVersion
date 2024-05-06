export default function getCurrentUserId(obj,id) {
        const  arrUsers = Object.values(obj)
        return  arrUsers.find(el => {
            console.log(el.id)

            if(el.id === id) return el
        })
}
