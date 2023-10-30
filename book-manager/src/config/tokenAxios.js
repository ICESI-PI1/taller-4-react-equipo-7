import axios from "axios";
const instance = axios.create({baseURL: "http://localhost:8080"});
localStorage.getItem('token') && (instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token'));
console.log("tokenAxios.js: " + localStorage.getItem('token'));
export default instance;



