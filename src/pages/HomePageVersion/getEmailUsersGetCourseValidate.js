export  default  function getEmailUsersGetCourseValidate(data,email){
    const  arrEmailsUsers  = data.info.items.map(item => item[1])
    return arrEmailsUsers.includes(email)
}
