export default function getCurrentUserId(obj,id) {
        const  arrUsers = Object.values(obj)
        return  arrUsers.find(el => {
            if(el.id === id) return el
        })
}
