import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface JXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface JXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: JXRequestInterceptors<T>
  showLoading?: boolean
}
