import axios from 'axios';

// Crea una instancia de axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Intercepta respuestas para manejar errores
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 400) {
      return Promise.reject(new Error('The user is already enrolled in the class.'));
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
