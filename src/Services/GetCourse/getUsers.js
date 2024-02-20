export async function getUsers(){
    const key = 'ihEXIXPkG5IZKMSf1FIzh9XVwoPRygAkMEqxAO67RH2ZGQlA9HPDCG1ziGLVfuwQ1vKuApwReh1h3ADxjR4En6OFyF7yEhxuxg7Uty5KUKAJdSjiw3bXWpjJY1rPgkYb'
    const resp = await fetch(`https://itgirlschoolcom.getcourse.ru/pl/api/account/users?key=${key}&status=active`)
    const data =  await resp.json()
    const usersJson = await fetch(`https://itgirlschoolcom.getcourse.ru/pl/api/account/exports/${data.info.export_id}?key=${key}`)
    const respUsers =  await usersJson.json()
    console.log(respUsers)
}
