import axios from 'axios';

const apiLeodan = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});
//interceptores

export default apiLeodan;
