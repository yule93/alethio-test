import axios from 'axios';

const address = "http://106.10.53.116:8099/";

const api = axios.create({
    baseURL: address,
    timeout: 1000,
    params: {}
});

export default api;

export const myPageApi = {
    orderInfo : page =>
        setTimeout(api.get(`order?page=${page}`), 1000),
    detail: id =>
        api.get(`order/${id}`)
}

// 받아온 토큰 값은 전역 변수로 관리
export const userLoginApi = {
    logIn : ({email, password}) => api.post("login", {
        "email": `${email}`,
        "password": `${password}`
    }),
    userInfo: (response) => api.get("login", {
        "token": response.json.token
    })
}
