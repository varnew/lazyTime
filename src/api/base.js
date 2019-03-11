import axios from 'axios'
import { Message } from 'element-ui'
import { removeEmptyValue } from '../utils/utils.js'

axios.interceptors.request.use(config => {
  if (config.method === 'get') {
    config.url = config.url + `?time=${new Date().getTime()}`
  }
  window.fundebugQuestDate = config.params
  return config
}, err => {
  Message.error({ message: '请求超时!' })
  return Promise.resolve(err)
})
axios.interceptors.response.use(data => {
  if (data && data.data && data.data.code !== 200) {
    if ('fundebug' in window) {
      window.fundebug.notifyError(new Error('fundebug_http'),
        {
          metaData: window.fundebugQuestDate
        })
    }
  }
  return data
}, err => {
  if (err.response.status === 504 || err.response.status === 404) {
    Message.error({ message: '服务器被吃了⊙﹏⊙∥' })
  } else if (err.response.status === 403) {
    Message.error({ message: '权限不足,请联系管理员!' })
  } else {
    Message.error({ message: '未知错误!' })
  }
  return Promise.resolve(err)
})
var base = ''
export const post = (url, params) => {
  params = removeEmptyValue(params)
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: { 'Content-Type': 'application/json', 'debug': '1', 'Accept': '*/*' }
  })
}
export const postImg = (url, params) => {
  params = removeEmptyValue(params)
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data',
      'api_key': 'access_token',
      'X-Requested-With': 'XMLHttpRequest',
      'debug': '1',
      'Accept': '*/*'
    }
  })
}
export const upload = (url, params) => {
  params = removeEmptyValue(params)
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': '*/*' // 图片上传组件在ie下需要设置改header,但使用的上传图片插件有自己的header设置，此处设置是属于无效的
    }
  })
}
export const put = (url, params) => {
  params = removeEmptyValue(params)
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (var it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
  })
}
export const del = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  })
}
export const get = (url, params) => {
  params = removeEmptyValue(params)
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params,
    headers: { 'cache': false }
  })
}
