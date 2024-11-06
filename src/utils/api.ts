// src/utils/api.ts

import axios from 'axios';

/**
 * Configures axios instance for making requests to the backend server.
 * @constant
 * @type {AxiosInstance}
 */
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
