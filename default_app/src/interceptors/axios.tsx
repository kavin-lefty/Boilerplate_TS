import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const CommonApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

CommonApi.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    console.error(error, "error in request");
    return Promise.reject(error);
  }
);

CommonApi.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    console.error("unauthorized access...");
    return Promise.reject(error);
  }
);

export default CommonApi;
