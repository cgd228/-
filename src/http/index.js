import request from './config'

// 登录
const homeInfo = params => request.post('/homeInfo', params)
// 登出
const loginOut = params => request.post('/user/loginOut', params)

export default {
  homeInfo,
  loginOut
}
