export default function task7(value) {
    value = value.trim();

    if (value.includes('<img src="https://static.tildacdn.one/tild3265-3236-4131-b461-613339343237/girl_.svg">') &&
        value.indexOf('<img>') < value.indexOf('<h1>')) {
        return true;
    } else {
        return false;
    }
}