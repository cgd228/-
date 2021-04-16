import request from './config'

// 登录
const login = params => request.post('/user/login', params)

// 获取列表
const getList = params => request.get('/indexClassifyConfig/query', { params })

// 更换头像
const uploadImageByFile = params => {
  request.post('/indexClassifyConfig/query', params, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export default {
  login,
  getList,
  uploadImageByFile
}
