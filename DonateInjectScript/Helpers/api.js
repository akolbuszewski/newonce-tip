const API_URL = 'https://newonce-tip-api.vercel.app/api';

export const getNowPlaying = async () => {
    try {
        const response = await fetch(`${API_URL}/now-playing`);
        const data = await response.json()
        return data;
    } catch (e) {
        console.error(e);
    }
}

export const donate = async (artist, blikCode, amount) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({artist, blikCode, amount});

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(`${API_URL}/donate`, requestOptions);
        const data = await response.json();
        return data
    } catch (e) {
        console.error(e);
    }
}

