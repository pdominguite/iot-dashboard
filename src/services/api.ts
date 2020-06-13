import axios from 'axios';

const username = '09f3b188';
const password = '879abfcbf91337ee';

const api = axios.create({
  baseURL: 'https://broker.shiftr.io',
  auth: { username, password },
});

export default api;
