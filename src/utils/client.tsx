import axios from "axios";
import Cookies from "js-cookie"

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});

client.interceptors.request.use(
    config => {
        if (Cookies.get("jwt_token")) {
            config.headers["Authorization"] = "Bearer " + Cookies.get("jwt_token");
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

client.interceptors.response.use(
    response => {
        return response;
    }, err => {
        if (err.response.status == 401) {
            Cookies.remove("jwt_token")
        }
        return err;
    }
);


export default client;
