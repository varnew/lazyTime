/* eslint-disable */

/**
 * @author varnew
 * @date 2019/5/26
 * @desc: 移除对象中值为空的属性
 * @params: （Object）
 * @return: (Object)
*/
export const removeEmptyValue = (obj) => {
  const newObj = {}
  if (typeof obj === 'object') {
    Object.keys(obj).forEach((k) => {
      if (obj[k] !== '') {
        newObj[k] = obj[k]
      }
    })
    return newObj
  }
  return obj
}

/**
 * @author varnew
 * @date 2019/5/6
 * @desc: 时间格式化
 * @params1: (Date Object | string | number) time*
 * @params2: (string) formatStr
 * @return: (string)
 */
export function parseTime (time, formatStr) {
  if (arguments.length === 0) {
    return null
  }
  const format = formatStr || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
