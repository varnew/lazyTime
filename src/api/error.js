import { get } from './base.js'

const baseUrl = '/fundebug'

const getErrorById = function getErrorById (params) {
  return get(`${baseUrl}/get`, params)
}
const getErrors = function getErrors (params) {
  return get(`${baseUrl}/getErrors`, params)
}

const errorAPI = {
  getErrorById,
  getErrors
}
export default errorAPI
