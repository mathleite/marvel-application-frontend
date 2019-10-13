import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
});

export default httpClient;
