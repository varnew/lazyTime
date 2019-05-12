const render = (list) => {
  let temp = ''
  list.map((element) => {
    let options = ''
    Object.keys(element).forEach((key, index) => {
      if (element[key].isOption && (element[key].name || element[key].optionSeleted)) {
        options += `${key}="${element[key].name || element[key].optionSeleted}" `
      }
    })
    console.log('----------')
    console.log(options)
    console.log('----------')
    const ele = `el-form-item(:label="${element.nikeName.name}")` + `
` + `  el-input(${options})`
    temp = temp + ele + `
`
  })
  return temp
}
export default render
