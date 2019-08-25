import { post } from './base.js'

const baseUrl = ''

const getBacc = function getBacc (params) {
  return post(`${baseUrl}/-/x/g`, params)
}

const baccAPI = {
  getBacc
}
export default baccAPI
