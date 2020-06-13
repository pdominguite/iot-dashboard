import axios from 'axios';

const api = axios.create({
  baseURL: 'https://broker.shiftr.io',
  auth: { username: '09f3b188', password: '879abfcbf91337ee' },
});

export default api;
