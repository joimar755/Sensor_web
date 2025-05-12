import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/"; 


const API = `${URL}/api/motion/data/bombillos`;    

const Venta = "http://127.0.0.1:8001/api/payu/payment";

const getToken = () => localStorage.getItem("token");


//export const Pro = pro => axios.post(`${API}`, pro);
export const Ven = ven => axios.post(`${Venta}`, ven);

export const Logins = (data) => {
    const formData = new URLSearchParams();
    formData.append('username', data.username);
    formData.append('password', data.password);
    
    return axios.post(`${API_LOGIN}`, formData, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const Pro = (data) => {
    const token = getToken(); // Obtén el token desde localStorage
  
    return axios.post(
      API, 
      data, // Enviando directamente el objeto como JSON
      {
        headers: {
          "Content-Type": "application/json", // Asegura que el contenido sea JSON
          "Authorization": `Bearer ${token}`, // Agrega el token al encabezado
        },
      }
    );
  };
