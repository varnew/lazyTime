const labelData = [
  // form部分
  {
    labelName: { // 标签名字
      name: 'input 单行文本',
      type: 'string',
      isEdt: false
    },
    nikeName: { // label名字
      name: '单行文本',
      type: 'string',
      isEdt: true
    },
    labelKey: { // label名字
      name: 'input',
      type: 'string',
      isEdt: false
    },
    type: {
      name: 'text',
      type: 'string',
      isEdit: false,
      isOption: true,
      value: ''
    },
    value: {
      name: new Date().getTime().toString(),
      type: 'string',
      isEdit: true,
      isOption: true,
      value: ''
    },
    placeholder: {
      name: '',
      type: 'string',
      isEdit: true,
      isOption: true,
      value: ''
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true,
      isOption: true,
      value: ''
    },
    readonly: {
      name: '',
      type: 'option',
      options: [
        { label: 'readonly:true', value: true },
        { label: 'readonly:false', value: false }
      ],
      isEdit: true,
      isOption: true,
      value: ''
    },
    max: {
      name: '',
      type: 'string',
      isEdit: true,
      isOption: true,
      value: ''
    },
    min: {
      name: '',
      type: 'string',
      isEdit: true,
      isOption: true,
      value: ''
    },
    autofocus: {
      name: '',
      type: 'option',
      options: [
        { label: 'autofocus:true', value: true },
        { label: 'autofocus:false', value: false }
      ],
      isEdit: true,
      isOption: true,
      value: ''
    },
    size: {
      name: 'mini',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      optionSeleted: '',
      isEdit: true,
      isOption: true,
      value: ''
    }
  },
  {
    labelName: {
      name: 'radio 单选框',
      type: 'string',
      isEdit: false
    },
    nikeName: { // label名字
      name: '单选框',
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'radio',
      type: 'string',
      isEdit: false
    },
    label: {
      name: '选项一',
      type: 'string',
      isEdit: true
    },
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    border: {
      name: '',
      type: 'option',
      options: [
        { label: '有边框', value: true },
        { label: '无边框', value: false }
      ],
      isEdit: true
    },
    size: {
      name: 'mini',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      optionSeleted: '',
      isEdit: true
    }
  },
  {
    labelName: {
      name: 'checkbox 复选框',
      type: 'string',
      isEdit: true
    },
    nikeName: { // label名字
      name: '复选框',
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'checkbox',
      type: 'string',
      isEdit: false
    },
    label: {
      name: '选项一',
      type: 'string',
      isEdit: true
    },
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    'true-label': {
      name: '',
      type: 'string',
      isEdit: true
    },
    'false-label': {
      name: '',
      type: 'string',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    border: '', // true or false
    size: {
      name: 'mini',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    checked: {
      name: '',
      type: 'option',
      options: [
        { label: '选中', value: true },
        { label: '不选中', value: false }
      ]
    }
  },
  {
    labelName: {
      name: 'inputNumber 计数器',
      type: 'string',
      isEdit: false
    },
    nikeName: {
      name: '计数器',
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'inputNumber',
      type: 'string',
      isEdit: true
    },
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    min: {
      name: '',
      type: 'string',
      isEdit: true
    },
    max: {
      name: '',
      type: 'string',
      isEdit: true
    },
    step: {
      name: '',
      type: 'string',
      isEdit: true
    },
    precision: {
      name: '',
      type: 'string',
      isEdit: true
    },
    size: {
      name: 'mini',
      type: 'option',
      options: [
        { label: 'large', name: 'large' },
        { label: 'small', name: 'small' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    controls: {
      name: '',
      type: 'option',
      options: [
        { label: 'controls:true', value: true },
        { label: 'controls:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'controls-position': {
      name: '',
      type: 'option',
      options: [
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    label: {
      name: '',
      type: 'string',
      isEdit: true
    },
    placeholder: {
      name: '',
      type: 'string',
      isEdit: true
    }
  },
  {
    labelName: {
      name: 'select 选择器',
      type: '',
      isEdit: false
    },
    nikeName: {
      name: '选择器', // label名字
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'select',
      type: '',
      isEdit: false
    },
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    multiple: {
      name: '',
      type: 'option',
      options: [
        { label: 'multiple:true', value: true },
        { label: 'multiple:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    size: {
      name: 'mini',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    clearable: {
      name: '',
      type: 'option',
      options: [
        { label: 'clearable:true', value: true },
        { label: 'clearable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'collapse-tags': {
      name: '',
      type: 'option',
      options: [
        { label: '多选时将选中值按文字的形式展示', value: true },
        { label: '多选时不将选中值按文字的形式展示', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'multiple-limit': { // 多选时用户最多可以选择的项目数，为 0 则不限制
      name: '',
      type: 'string',
      isEdit: true
    },
    autocomplete: {
      name: '',
      type: 'option',
      options: [
        { label: 'select input 的 autocomplete 属性', value: 'off' },
        { label: 'select input 的 autocomplete 属性', value: 'no' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    placeholder: {
      name: '',
      type: 'string',
      isEdit: true
    },
    // 辅助数据：
    options: [{ name: '选项一', value: 'one' }, { name: '选项二', value: 'two' }]
  },
  {
    labelName: {
      name: 'switch 开关',
      type: '',
      isEdit: false
    },
    nikeName: {
      name: '开关', // label名字
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'switch',
      type: '',
      isEdit: false
    },
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    width: {
      name: '',
      type: 'string',
      isEdit: true
    },
    'active-text': {
      name: '开启', // switch 打开时的文字描述
      type: 'string',
      isEdit: true
    },
    'inactive-text': {
      name: '关闭', // switch 关闭时的文字描述
      type: 'string',
      isEdit: true
    },
    'active-value': {
      name: '', // switch 打开时的值
      type: 'string',
      isEdit: true
    },
    'inactive-value': {
      name: '', // switch 关闭时的值
      type: 'string',
      isEdit: true
    },
    'active-color': {
      name: '', // switch 打开时的背景色
      type: 'string',
      isEdit: true
    },
    'inactive-color': {
      name: '', // switch 关闭时的背景色,
      type: 'string',
      isEdit: true
    }
  },
  {
    labelName: {
      name: 'slide 滑块',
      type: 'string',
      isEdit: true
    },
    nikeName: {
      name: '滑块',
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'slide',
      type: 'string',
      isEdit: true
    },
    value: {
      name: 50,
      type: 'string',
      isEdit: true
    },
    min: {
      name: 'slide 滑块',
      type: 'string',
      isEdit: true
    },
    max: {
      name: 'slide 滑块',
      type: 'string',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    step: {
      name: '', // 步长
      type: 'string',
      isEdit: true
    },
    'show-input': {
      name: '',
      type: 'option',
      options: [
        { label: '显示输入框，仅在非范围选择时有效', value: true },
        { label: '不显示输入框，仅在非范围选择时有效', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'show-input-controls': {
      name: '',
      type: 'option',
      options: [
        { label: '在显示输入框的情况下，显示输入框的控制按钮', value: true },
        { label: '在显示输入框的情况下，不显示输入框的控制按钮', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'input-size': {
      name: '',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' },
        { label: 'large', name: 'large' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'show-stops': {
      name: '',
      type: 'option',
      options: [
        { label: '显示间断点', value: true },
        { label: '不显示间断点', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'show-tooltip': {
      name: '',
      type: 'option',
      options: [
        { label: '显示 tooltip', value: true },
        { label: '不显示 tooltip', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    range: {
      name: '',
      type: 'option',
      options: [
        { label: '范围选择', value: true },
        { label: '不是范围选择', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    vertical: {
      name: '',
      type: 'option',
      options: [
        { label: '竖向模式', value: true },
        { label: '横向模式', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    height: {
      name: '', // Slider 高度，竖向模式时必填
      type: 'string',
      isEdit: true
    }
  },
  {
    labelName: {
      name: 'timePicker 时间选择器',
      type: 'string',
      isEdit: false
    },
    nikeName: {
      name: '时间选择器', // label名字
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'timePicker',
      type: 'string',
      isEdit: false
    },
    readonly: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    editable: {
      name: '',
      type: 'option',
      options: [
        { label: 'editable:true', value: true },
        { label: 'editable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    clearable: {
      name: '',
      type: 'option',
      options: [
        { label: 'clearable:true', value: true },
        { label: 'clearable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    size: {
      name: 'mini',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      optionSeleted: '',
      isEdit: true
    }, // medium / small / mini
    placeholder: {
      name: '选择时间',
      type: 'string',
      isEdit: true
    },
    'start-placeholder': {
      name: '开始时间', // 范围选择时开始日期的占位内容
      type: 'string',
      isEdit: true
    },
    'end-placeholder': {
      name: '结束时间', // 范围选择时开始日期的占位内容
      type: 'string',
      isEdit: true
    },
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    align: {
      name: '',
      type: 'option',
      options: [
        { label: 'left', value: 'left' },
        { label: 'center', value: 'center' },
        { label: 'right', value: 'right' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'range-separator': {
      name: '-', // 选择范围时的分隔符
      type: 'string',
      isEdit: true
    },
    'value-format': {
      name: '',
      type: 'option',
      options: [
        { label: 'yyyy-MM-dd', value: 'yyyy-MM-dd' },
        { label: 'yyyy-MM-dd HH:mm:ss', value: 'yyyy-MM-dd HH:mm:ss' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'default-value': {
      name: '',
      type: 'option',
      options: [
        { label: 'yyyy-MM-dd', value: 'yyyy-MM-dd' },
        { label: 'yyyy-MM-dd HH:mm:ss', value: 'yyyy-MM-dd HH:mm:ss' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    // 辅助字段
    'picker-options': {
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }
  },
  {
    labelName: {
      name: 'datePicker 日期选择器',
      type: 'string',
      isEdit: false
    },
    nikeName: {
      name: '日期选择器', // label名字
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'datePicker',
      type: 'string',
      isEdit: false
    },
    readonly: {
      name: '',
      type: 'option',
      options: [
        { label: 'readonly:true', value: true },
        { label: 'readonly:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    editable: {
      name: '',
      type: 'option',
      options: [
        { label: 'editable:true', value: true },
        { label: 'editable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    clearable: { // 是否显示清除按钮 true or false
      name: '',
      type: 'option',
      options: [
        { label: 'clearable:true', value: true },
        { label: 'clearable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    size: {
      name: 'mini',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    placeholder: {
      name: '选择时间',
      type: 'string',
      isEdit: true
    },
    'start-placeholder': {
      name: '开始时间', // 范围选择时开始日期的占位内容
      type: 'string',
      isEdit: true
    },
    'end-placeholder': {
      name: '结束时间', // 范围选择时开始日期的占位内容
      type: 'string',
      isEdit: true
    },
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    align: {
      name: '',
      type: 'option',
      options: [
        { label: 'left', value: 'left' },
        { label: 'center', value: 'center' },
        { label: 'right', value: 'right' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'range-separator': {
      name: '-', // 选择范围时的分隔符
      type: 'string',
      isEdit: true
    },
    'value-format': {
      name: '',
      type: 'option',
      options: [
        { label: 'yyyy-MM-dd', value: 'yyyy-MM-dd' },
        { label: 'yyyy-MM-dd HH:mm:ss', value: 'yyyy-MM-dd HH:mm:ss' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'default-value': {
      name: '',
      type: 'option',
      options: [
        { label: 'yyyy-MM-dd', value: 'yyyy-MM-dd' },
        { label: 'yyyy-MM-dd HH:mm:ss', value: 'yyyy-MM-dd HH:mm:ss' }
      ],
      optionSeleted: '',
      isEdit: true
    }
  },
  {
    labelName: {
      name: 'dateTimePicker 日期时间选择器',
      type: 'string',
      isEdit: false
    },
    nikeName: {
      name: '日期时间选择器', // label名字
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'dateTimePicker',
      type: 'string',
      isEdit: false
    },
    readonly: {
      name: '',
      type: 'option',
      options: [
        { label: 'readonly:true', value: true },
        { label: 'readonly:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    editable: {
      name: '',
      type: 'option',
      options: [
        { label: 'editable:true', value: true },
        { label: 'editable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    clearable: { // 是否显示清除按钮 true or false
      name: '',
      type: 'option',
      options: [
        { label: 'clearable:true', value: true },
        { label: 'clearable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    size: {
      name: 'mini',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    placeholder: {
      name: '选择时间',
      type: 'string',
      isEdit: true
    },
    'start-placeholder': {
      name: '开始时间', // 范围选择时开始日期的占位内容
      type: 'string',
      isEdit: true
    },
    'end-placeholder': {
      name: '结束时间', // 范围选择时开始日期的占位内容
      type: 'string',
      isEdit: true
    },
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    type: {
      name: 'datetime',
      type: 'option',
      options: [
        { label: 'year', value: 'year' },
        { label: 'month', value: 'month' },
        { label: 'date', value: 'date' },
        { label: 'week', value: 'week' },
        { label: 'datetime', value: 'datetime' },
        { label: 'datetimerange', value: 'datetimerange' },
        { label: 'daterange', value: 'daterange' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    align: {
      name: '',
      type: 'option',
      options: [
        { label: 'left', value: 'left' },
        { label: 'center', value: 'center' },
        { label: 'right', value: 'right' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'range-separator': {
      name: '-', // 选择范围时的分隔符
      type: 'string',
      isEdit: true
    },
    'value-format': {
      name: '',
      type: 'option',
      options: [
        { label: 'yyyy-MM-dd', value: 'yyyy-MM-dd' },
        { label: 'yyyy-MM-dd HH:mm:ss', value: 'yyyy-MM-dd HH:mm:ss' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'default-value': {
      name: '',
      type: 'option',
      options: [
        { label: 'yyyy-MM-dd', value: 'yyyy-MM-dd' },
        { label: 'yyyy-MM-dd HH:mm:ss', value: 'yyyy-MM-dd HH:mm:ss' }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'format': {
      name: '',
      type: 'option',
      options: [
        { label: 'yyyy-MM-dd', value: 'yyyy-MM-dd' },
        { label: 'yyyy-MM-dd HH:mm:ss', value: 'yyyy-MM-dd HH:mm:ss' }
      ],
      optionSeleted: '',
      isEdit: true
    }
  },
  {
    labelName: {
      name: 'upload 上传',
      type: '',
      isEdit: false
    },
    nikeName: {
      name: '上传', // label名字
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'upload', // label名字
      type: '',
      isEdit: false
    },
    value: {
      name: [],
      type: 'string',
      isEdit: true
    },
    action: {
      name: 'https://jsonplaceholder.typicode.com/posts/', // 必选参数，上传的地址
      type: 'string',
      isEdit: true
    },
    headers: {
      name: '', // 设置上传的请求头部
      type: 'string',
      isEdit: true
    },
    multiple: { // 是否支持多选文件
      name: '',
      type: 'option',
      options: [
        { label: 'multiple:true', value: true },
        { label: 'multiple:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    data: {
      name: '', // 上传时附带的额外参数
      type: 'string',
      isEdit: true
    },
    name: {
      name: '', // 上传的文件字段名
      type: 'string',
      isEdit: true
    },
    'with-credentials': {
      name: '',
      type: 'option',
      options: [
        { label: '支持发送 cookie 凭证信息', value: true },
        { label: '不支持发送 cookie 凭证信息', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'show-file-list': {
      name: '',
      type: 'option',
      options: [
        { label: '显示已上传文件列表', value: true },
        { label: '不显示已上传文件列表', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    drag: {
      name: '',
      type: 'option',
      options: [
        { label: '启用拖拽上传', value: true },
        { label: '不启用拖拽上传', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    accept: {
      name: '', // 接受上传的文件类型（thumbnail-mode 模式下此参数无效）
      type: 'string',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    limit: {
      name: 10, // 最大允许上传个数
      type: 'string',
      isEdit: true
    }
  },
  {
    labelName: {
      name: 'rate 评分',
      type: 'string',
      isEdit: true
    },
    nikeName: {
      name: '评分', // label名字
      type: 'string',
      isEdit: true
    },
    labelKey: {
      name: 'rate',
      type: 'string',
      isEdit: true
    },
    value: {
      name: 4.5,
      type: 'string',
      isEdit: true
    },
    max: {
      name: '',
      type: 'string',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    'allow-half': {
      name: '',
      type: 'option',
      options: [
        { label: '允许半选', value: true },
        { label: '不允许半选', value: false }
      ],
      optionSeleted: '',
      isEdit: true
    },
    colors: { // icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色['#F7BA2A', '#F7BA2A', '#F7BA2A']
      name: '',
      type: 'string',
      isEdit: true
    },
    'void-color': {
      name: '', // 未选中 icon 的颜色#C6D1DE
      type: 'string',
      isEdit: true
    },
    'disabled-void-color': {
      name: '', // 只读时未选中 icon 的颜色#EFF2F7
      type: 'string',
      isEdit: true
    },
    'text-color': {
      name: '', // '#ff9900'
      type: 'string',
      isEdit: true
    }
  }
]
export default labelData
