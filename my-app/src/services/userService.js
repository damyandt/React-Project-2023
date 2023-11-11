
const apiKey = `AIzaSyAAzlnTVSMcI7ed8tRhyhGd-TLIlRiwBKA`;

export const register = (data) => {
    return fetch(`https:identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    })
};

export const login = (data) => {
    return fetch(`https:identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    })
};