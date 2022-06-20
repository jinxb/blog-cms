// 统一出口
import tsRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
export default new tsRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
