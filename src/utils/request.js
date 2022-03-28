import axios from 'axios'
import store from '../store/index'
import { errorPrompt } from './errorPrompt'
import { getCookie } from './commonFunction'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL, 
  timeout: 30000, // 请求超时时间
  showLoading: true
})

let loadingNum = 0
instance.interceptors.request.use(config => {
  if(config.showLoading != 'false') {
    loadingNum ++
    store.commit('loading', true)
  }  
  if(getCookie('ZhongTai')) config.headers.Authorization = getCookie('ZhongTai')  
  return config
}, error => Promise.reject(error))

instance.interceptors.response.use(response => {
  loadingNum --
  if(loadingNum <= 0) store.commit('loading', false)
  if(response.data.code === '0000') return response.data
  else {
    errorPrompt(response.data)
    return Promise.reject(response)
  }
}, error => {
  loadingNum--
  if(loadingNum <= 0) store.commit('loading', false)
  errorPrompt(error.response)
  return Promise.reject(error.response)
})

export function get(url, data, loading) {
  let params = loading == false ? { params: data, showLoading: loading } : { params: data }
  return instance.get(url, params)
}
export function post(url, data, params) {
  return instance.post(url, data, { params: params })
}  
export function deleteReq(url, data) {
  return instance.delete(url, { params: data })
}  
export function put(url, data, params) {
  return instance.put(url, data, { params: params })
}




