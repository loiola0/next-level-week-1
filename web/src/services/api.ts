import axios from 'axios';
//axios: Cliente HTTP usado para enviar requisições à API;
const api = axios.create({
    baseURL: 'http://localhost:3333'
});


export default api;