export function addDefaultLocalStorageTask(week, task) {
    let textErr = false
    if (week === "lesson_18" && +task === 20) {
        try {
            const arr = JSON.parse(localStorage.getItem('task19'))

            if (!arr) {
                localStorage.setItem('task19', JSON.stringify([1, 2, 3, 4, 5, 6]))
            }
            if (!Array.isArray(arr) || arr.length === 0) {
                localStorage.setItem('task19', JSON.stringify([1, 2, 3, 4, 5, 6]))
            }
        } catch (e) {
            textErr = JSON.stringify(e)
            localStorage.clear()
        }
    }
    if (week === 'lesson_18' && +task === 21) {

        try {
            const arr = JSON.parse(localStorage.getItem('cartItems'))

            if (!arr) {
                localStorage.setItem('cartItems', JSON.stringify(['Джинсы', 'Куртка', 'Ботинки']))
            }
            if (!Array.isArray(arr)) {
                localStorage.setItem('cartItems', JSON.stringify(['Джинсы', 'Куртка', 'Ботинки']))
            }
        } catch (e) {
            textErr = JSON.stringify(e)
            localStorage.clear()
        }
    }
    if (week === 'lesson_18' && +task === 22) {

        try {
            const arr = JSON.parse(localStorage.getItem('task22'))

            if (!arr) {
                localStorage.setItem('task22', JSON.stringify(['Джинсы', 'Куртка', 'Ботинки', 'Рубашка', 'Носки', 'Часы']))
            }
            if (!Array.isArray(arr)) {
                localStorage.setItem('task22', JSON.stringify(['Джинсы', 'Куртка', 'Ботинки', 'Рубашка', 'Носки', 'Часы']))
            }
        } catch (e) {
            textErr = JSON.stringify(e)
            localStorage.clear()
        }
    }
    if (week === 'lesson_18' && (+task === 23 || +task === 24)) {

        try {
            const arr = JSON.parse(localStorage.getItem('task23'))

            if (!arr) {
                localStorage.setItem('task23', JSON.stringify(
                    [
                        {
                            'user-name': 'Alex',
                            email: 'alex3454@gmail.com',
                            password: "qwerty",
                            userId: 324234
                        },
                        {
                            'user-name': 'Josh',
                            email: '23josh17@gmail.com',
                            password: "qazzaq",
                            userId: 34732847
                        },
                    ]))
            }
            if (!Array.isArray(arr)) {
                localStorage.setItem('task23', JSON.stringify([
                    {
                        'user-name': 'Alex',
                        email: 'alex3454@gmail.com',
                        password: "qwerty",
                        userId: 324234
                    },
                    {
                        'user-name': 'Josh',
                        email: '23josh17@gmail.com',
                        password: "qazzaq",
                        userId: 34732847
                    },
                ]))
            }
        } catch (e) {
            textErr = JSON.stringify(e)
            localStorage.clear()
        }
    }


    return textErr
}
