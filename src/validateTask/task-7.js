export default function task7(value) {
    value = value.trim();

    if (value.includes('<a>Telegram</a>') && value.includes('<a>VKontakte</a>') &&
        value.indexOf('<p>') < value.indexOf('<a>')) {
        return true;
    } else {
        return false;
    }
}