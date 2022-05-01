import { createApp } from 'vue'
import { globalRegister } from './global'

import App from './App.vue'

import router from './router'
import store from './store'
import jxRequest from './service'

const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
console.log(process.env.VUE_APP_BASE_URL)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
jxRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res)
  })
