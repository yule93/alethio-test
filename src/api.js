import axios from 'axios';

const address = "http://106.10.53.116:8099/";

const api = axios.create({
    baseURL: address,
    timeout: 1000,
    params: {}
});

export default api;

export const myPageApi = {
    userName: () => api.get(""),
    orderInfo : page => setTimeout(api.get(`order?page=${page}`), 1000)
}

export const userLoginApi = {
    logIn : ({email, password}) => api.post("login", {
        "email": `${email}`,
        "password": `${password}`
    }),
}
