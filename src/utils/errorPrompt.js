// 接口返回状态码逻辑处理
import { message } from 'ant-design-vue'

const HTTP_STATUS = {
  400: '错误请求',
  401: '用户没有权限',
  403: '拒绝访问',
  404: '资源不存在',
  405: '请求方法未允许',
  406: '请求格式不可得',
  408: '请求超时',
  410: '请求资源被永久删除',
  422: '验证错误',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'HTTP版本不受支持'
}
export const errorPrompt = res => {
    const { status } = res
    // if(status == 401) window.location.href = `${import.meta.env.VITE_APP_JUMPURL as any}/#/login?fromUrl=${encodeURIComponent(window.location.href)}`
    // else if(res.code=='0001'){
    //     message.warning(HTTP_STATUS[status]|| res.message)
    // }else {
    //     message.error(HTTP_STATUS[status]|| res.message) 
    // } 
}