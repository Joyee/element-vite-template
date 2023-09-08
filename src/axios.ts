import axios, { AxiosRequestConfig } from 'axios';

import debounce from 'lodash/debounce';

const baseURL = import.meta.env.VITE_APP_API;

const instance = axios.create({
  baseURL,
  timeout: 10000,
});

// http request 拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 创建一个错误
function errorCreate(msg: string) {
  const error = new Error(msg);
  errorLog(error);
  throw error;
}

// fix: 避免一次性弹出很多提示
const displayErrorMsg = debounce((msg: string) => alert(msg), 500);

// 记录和显示错误
function errorLog(error: Error) {
  // 打印到控制台
  if (process.env.NODE_ENV === 'development') {
    console.log(error);
  }
  // displayErrorMsg(error.message);
}
interface ResponseData {
  message: string;
  msg: string;
  success: boolean; // 请求成功还是失败
  data: any;
  code: string | number;
}
let isRefreshTrying = false;
// http response 拦截器
instance.interceptors.response.use(
  (response): any | never => {
    const dataAxios = response.data as ResponseData;
    return response;
  },
  error => {
    const { message, status } = error.toJSON();
    if (status !== 417 && status !== 418) {
      // 提示
    }
  }
);
export function request<T>(config: AxiosRequestConfig): Promise<T> {
  return instance.request(config);
}

export interface Response<T = any> {
  success: boolean;
  code: string | number;
  message: string;
  data: T;
}
export default instance;
