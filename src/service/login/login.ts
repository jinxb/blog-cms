import JXRequest from '../index'

import { IAccount } from './types'

enum LoginAPI {
  AccountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  return JXRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
