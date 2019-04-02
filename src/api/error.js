import { get } from './base.js'

const baseUrl = '/fundebug'

const getErrorById = function getErrorById (params) {
  return get(`${baseUrl}/get`, params)
}
const getErrors = function getErrors (params) {
  return get(`${baseUrl}/getErrors`, params)
}

const getErrorByTypeId = function getErrorByTypeId (params) {
  return get(`${baseUrl}/getErrorByTypeId`, params)
}

const getCounts = function getCounts (params) {
  return get(`${baseUrl}/counts`, params)
}

const errorAPI = {
  getErrorById,
  getErrors,
  getErrorByTypeId,
  getCounts
}
export default errorAPI
