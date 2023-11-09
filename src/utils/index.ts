export function jsonToWebsocket(value: any) {
    try {
        const message = JSON.stringify({
            ...value,
        });
        return message;
    } catch {
        return null;
    }
}

export function stringFromWebsocket(string: any) {
    try {
        return JSON.parse(`${string}`);
    } catch {
        return null;
    }
}


export function generateRandomString(length = 22) {
    let result = '';

    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10);
    }

    return result;
}