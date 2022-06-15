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

export default store
