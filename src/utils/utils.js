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
