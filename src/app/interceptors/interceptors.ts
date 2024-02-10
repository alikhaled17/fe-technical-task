/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

// Request interceptor
http.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    const configClone = { ...config };
    configClone.headers = {
      ...configClone.headers,
      "Content-Type": "application/json",
      Accept: "application/json",
    } as AxiosRequestHeaders;
    return configClone;
  },
  (error: Error) => {
    Promise.reject(error);
  }
);

// Response interceptor
http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error.response);
  }
);

export default http;
