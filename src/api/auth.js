
import axios  from "axios";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8001/";


const API = `${URL}/usuario`
const API_LOGIN = `${URL}/usuario/login`

export const Resister_users = query => axios.post(`${API}`, query) 

export const Logins = (data) => {
    const formData = new URLSearchParams();
    formData.append('username', data.username);
    formData.append('password', data.password);
    
    return axios.post(`${API_LOGIN}`, formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}