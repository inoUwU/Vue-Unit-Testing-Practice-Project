import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
});
export default api;
