import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  AxiosError,
} from "axios";

declare module "axios" {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class BaseAxios {
  protected readonly instance: AxiosInstance;

  constructor(confing?: AxiosRequestConfig) {
    this.instance = axios.create(confing);

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: AxiosError) => Promise.reject(error);
}

export default BaseAxios;
