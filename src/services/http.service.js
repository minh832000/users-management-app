import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://6280b82a7532b4920f72c262.mockapi.io',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const errorInterceptor = (err) => Promise.reject(err);

const responseInterceptor = (res) => {
  if (res.data) {
    return res.data;
  }
  return res;
};

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
