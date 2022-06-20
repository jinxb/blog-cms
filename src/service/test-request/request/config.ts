let BASE_URL = ''
const TIME_OUT = 500

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://127.0.0.1:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://kenym.cn/prod'
} else {
  BASE_URL = 'http://kenym.cn/test'
}

export { BASE_URL, TIME_OUT }
