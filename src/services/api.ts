import axios from 'axios';

const username = process.env.REACT_APP_BROKER_USERNAME
  ? process.env.REACT_APP_BROKER_USERNAME
  : '';
const password = process.env.REACT_APP_BROKER_USERNAME
  ? process.env.REACT_APP_BROKER_USERNAME
  : '';

const api = axios.create({
  baseURL: 'https://broker.shiftr.io',
  auth: { username, password },
});

export default api;
