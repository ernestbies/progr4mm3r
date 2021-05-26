import {BACKEND_URL} from "../information";

export const fetchPosts = () => {
    return fetch(`${BACKEND_URL}/api/posts`).then(response => response.json());
}

export const sendMessage = (data) => {
    return fetch(`${BACKEND_URL}/api/contact`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
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
