import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'jinxb',
      age: 18
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

// vuex中用户数据初始化
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
