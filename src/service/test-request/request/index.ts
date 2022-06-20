import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface TSRequestInterceptors {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requsetInterceptorCatch: (error: any) => any
  responseInterceptor: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}
interface TSRequestConfig extends AxiosRequestConfig {
  interceptors: TSRequestInterceptors
}
class tsRequest {
  instance: AxiosInstance
  interceptors: TSRequestInterceptors
  constructor(config: TSRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use()
  }
  request(config: AxiosRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}
export default tsRequest
