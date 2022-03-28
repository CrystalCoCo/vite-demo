import { get, post } from "@/utils/request"

export function getArticleList(params) {
  return get('yi-website/public/byCondition', params)
}
export function getArticleList1(params) {
  return get('yi-website/public/label/list', params)
}
export function getArticleList2() {
  return get('yi-sharing/home/runningStatusUnauth', null, false)
}


export function login(params) {
  return post('account-center/login', params)
}
export function getInfo(params) {
  return post('account-center/member/info', params)
}