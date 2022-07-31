import axios from 'axios'
import router from "page";
import { get } from 'svelte/store'

function getApiEndpoint() {
    return "http://127.0.0.1:8787/app"
}


//Set the base URL for qwoka
const instance = axios.create({
    baseURL: getApiEndpoint(),
    withCredentials: true,
    rejectUnauthorized: false
});

instance.defaults.withCredentials = true

const UNAUTHORIZED = 401;
instance.interceptors.response.use((response) => {
    return response
},
    function (error) {
        const { status } = error.response;
        if (status === UNAUTHORIZED) {
            router("/login")
        }
        return Promise.reject(error);
    });

export default () => instance