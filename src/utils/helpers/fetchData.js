import {BACKEND_URL} from "../data/information";

export const fetchPosts = (signal) => {
    return fetch(`${BACKEND_URL}/api/posts`, {signal}).then(response => response.json());
}

export const sendPost = (data) => {
    return fetch(`${BACKEND_URL}/api/posts`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}

export const validateRecaptcha = (recaptcha) => {
    return fetch(`${BACKEND_URL}/api/contact`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({recaptcha})
    })
}
