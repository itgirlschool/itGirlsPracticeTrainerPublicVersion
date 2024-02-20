const cookies = document.cookie;
const cookieArray = cookies.split(';');
const cookieObject = {};

for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].split('=');
    const name = cookie[0].trim();
    const value = cookie[1].trim();
    cookieObject[name] = value;
}

const cookieJson = JSON.stringify(cookieObject);

console.log(cookieJson);
