import axios  from "axios";

let APIHandler = axios.create({
    baseURL: 'https://develop.ruletap.tk/api',
    timeout: 10000
});

export default APIHandler;