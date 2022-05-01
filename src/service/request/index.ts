import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { JXRequestInterceptors, JXRequestConfig } from './type'
// import { LoadingOptionsResolved } from 'element-plus/lib/components/loading/src/types'
import { ElLoading } from 'element-plus/lib/components'

const DEFAULT_LOADING = true
class jxRequest {
  instance: AxiosInstance
  interceptors?: JXRequestInterceptors
  showLoading: boolean
  loading?: any
  constructor(config: JXRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    // 对应实例传入的可配置的拦截器
    // 请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // const token = useUserStore().getToken
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'raba(0,0,0,.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        this.loading?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败，错误信息')
        } else {
          return data
        }
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }
  request<T>(config: JXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1. 单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 1. 判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1. 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2. 将showloading还原，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          // 3. 将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showloading还原，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: JXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: JXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: JXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}

export default jxRequest
