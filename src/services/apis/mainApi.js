import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'http://localhost:8000',
});
export default mainApi;
