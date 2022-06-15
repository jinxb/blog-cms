import { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'

import { accountLoginRequest } from '@/service/login/login'

// 当前模块state类型和根state类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现登录逻辑
      // try {
      console.log(commit)
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
      // } catch (error) {
      //   console.log(error)
      // }
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log(commit, payload)
    }
  }
}

export default loginModule
