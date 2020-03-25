import axios, { AxiosInstance } from 'axios';

/**
 * Creates an axios instance
 * @returns {AxiosInstance} an instance of axios
 */
const axiosInstance = (): AxiosInstance => {
  const instanceCreate = axios.create({
    baseURL: process.env.API_URL,
    timeout: 3000,
    withCredentials: true,
  });
  return instanceCreate;
};

export default axiosInstance;
