export const sendEmail = async (email) =>{
    try {
        await fetch('https://events.sendpulse.com/events/id/aebafa1b0a924f09e2ddfe357f0df451/7743645', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'no-cors',
            body: JSON.stringify({
                email,
            })
        })
    } catch (e) {
        console.log(e);
    }
}