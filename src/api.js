import axios from 'axios';

const address = "http://106.10.53.116:8099/";

const api = axios.create({
    baseURL: address,
    timeout: 1000,
    params: {}
});

export default api;

export const userInfoApi = {
    userName: () => api.get("")
}