import axios from 'axios'
import { Message } from 'element-ui'

const request = axios.create({
  // API 请求的默认前缀
  baseURL: '/introduce',
  timeout: 10000 // 请求超时时间
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    const token = ''
    if (token) {
      config.headers['Access-Token'] = token
    }
    return config
  },
  error => {
    console.log('axios请求拦截器错误信息', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    Message.closeAll()
    console.log('响应信息', response)
    if (response.data.returnCode !== '00') {
      // throw Error(response.data?.errorMessage)
      // return errorHandler(response.data?.errorMessage)
      Message({
        message: response.data.returnCode.message || 'Error',
        type: 'error',
        duration: 4000
      })
    } else {
      const { result, message } = response.data
      return Object.assign({}, { result, message })
    }
  },
  error => {
    Message({
      message: error || 'Error',
      type: 'error',
      duration: 4000
    })
    return Promise.reject(error)
  }
)

export default request
