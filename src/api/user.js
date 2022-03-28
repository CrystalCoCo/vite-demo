import { get, post } from "@/utils/request"

export function refreshToken(params) {   //刷新token
  return post('account-center/refresh/token', params)
}
export function reqLogout() {    //退出登录
  return post('account-center/logout')
}
export function getAvatar() {   //获取头像
  return get('account-center/member/info')
}