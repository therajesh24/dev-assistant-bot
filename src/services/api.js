import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Change to your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 