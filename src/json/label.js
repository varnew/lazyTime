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
      isEdit: false
    },
    value: {
      name: new Date().getTime().toString(),
      type: 'string',
      isEdit: true
    },
    placeholder: {
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
      isEdit: true
    },
    readonly: {
      name: '',
      type: 'option',
      options: {
        'readonly:true': true,
        'readonly:false': false
      },
      isEdit: true
    },
    max: {
      name: '',
      type: 'string',
      isEdit: true
    },
    min: {
      name: '',
      type: 'string',
      isEdit: true
    },
    autofocus: {
      name: '',
      type: 'option',
      options: {
        'autofocus:true': true,
        'autofocus:false': false
      },
      isEdit: true
    },
    size: {
      name: '',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      isEdit: true
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
      isEdit: true
    },
    border: {
      name: '',
      type: 'option',
      options: {
        '有边框': true,
        '无边框': false
      },
      isEdit: true
    },
    size: {
      name: '',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
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
      type: '',
      isEdit: true
    },
    'false-label': {
      name: '',
      type: '',
      isEdit: true
    },
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      isEdit: true
    },
    border: '', // true or false
    size: {
      name: '',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      isEdit: true
    }, // 仅在 border 为真时有效:medium / small / mini
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
    labelName: 'inputNumber 计数器',
    nikeName: '计数器', // label名字
    labelKey: 'inputNumber',
    value: 0,
    min: '',
    max: '',
    step: '',
    precision: '', // 精度
    size: 'small', // 计数器尺寸：large or small
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      isEdit: true
    },
    controls: '', // 控制按钮:true or false
    'controls-position': '', // 控制按钮位置: 'left' or 'right'
    label: '', // 输入框关联的label文字
    placeholder: ''
  },
  {
    labelName: 'select 选择器',
    nikeName: '选择器', // label名字
    labelKey: 'select',
    value: 'one',
    multiple: '', // 是否多选 true or false
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      isEdit: true
    },
    size: {
      name: '',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      isEdit: true
    }, // 输入框尺寸:medium/small/mini
    clearable: true, // 是否可以清空选择项 true or false
    'collapse-tags': '', // 多选时是否将选中值按文字的形式展示: true or false
    'multiple-limit': '', // 多选时用户最多可以选择的项目数，为 0 则不限制
    autocomplete: 'off', // select input 的 autocomplete 属性
    placeholder: '',
    // 辅助数据：
    options: [{ name: '选项一', value: 'one' }, { name: '选项二', value: 'two' }]
  },
  {
    labelName: 'switch 开关',
    nikeName: '开关', // label名字
    labelKey: 'switch',
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
      isEdit: true
    },
    width: '',
    'active-text': '开启', // switch 打开时的文字描述
    'inactive-text': '关闭', // switch 关闭时的文字描述
    'active-value': '', // switch 打开时的值
    'inactive-value': '', // switch 关闭时的值
    'active-color': '', // switch 打开时的背景色
    'inactive-color': '' // switch 关闭时的背景色
  },
  {
    labelName: 'slide 滑块',
    nikeName: '滑块', // label名字
    labelKey: 'slide',
    min: '',
    max: '',
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      isEdit: true
    },
    step: '', // 步长
    'show-input': '', // 是否显示输入框，仅在非范围选择时有效 true or false
    'show-input-controls': '', // 在显示输入框的情况下，是否显示输入框的控制按钮
    'input-size': 'mini', // 输入框的尺寸 large / medium / small / mini
    'show-stops': true, // 是否显示间断点 true or false
    'show-tooltip': true, // 是否显示 tooltip: true or false
    range: '', // 是否为范围选择 true or false
    vertical: '', // 是否竖向模式 true or false
    height: '' // Slider 高度，竖向模式时必填
  },
  {
    labelName: 'timePicker 时间选择器',
    nikeName: '时间选择器', // label名字
    labelKey: 'timePicker',
    readonly: '', // true or false
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      isEdit: true
    },
    editable: '', // 文本可输入 true or false
    clearable: '', // 是否显示清除按钮 true or false
    size: {
      name: '',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      isEdit: true
    }, // medium / small / mini
    placeholder: '选择时间',
    'start-placeholder': '开始时间', // 范围选择时开始日期的占位内容
    'end-placeholder': '结束时间', // 范围选择时开始日期的占位内容
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    align: '', // 对齐方式 left or center or right
    'range-separator': '-', // 选择范围时的分隔符
    'value-format': 'yyyy-MM-dd', // 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象
    'default-value': 'yyyy-MM-dd', // 可选，选择器打开时默认显示的时间
    // 辅助字段
    'picker-options': {
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }
  },
  {
    labelName: 'datePicker 日期选择器',
    nikeName: '日期选择器', // label名字
    labelKey: 'datePicker',
    readonly: '', // true or false
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      isEdit: true
    },
    editable: '', // 文本可输入 true or false
    clearable: '', // 是否显示清除按钮 true or false
    size: {
      name: '',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      isEdit: true
    },
    placeholder: '选择时间',
    'start-placeholder': '开始时间', // 范围选择时开始日期的占位内容
    'end-placeholder': '结束时间', // 范围选择时开始日期的占位内容
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    align: '', // 对齐方式 left or center or right
    'range-separator': '-', // 选择范围时的分隔符
    'value-format': 'yyyy-MM-dd', // 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象
    'default-value': 'yyyy-MM-dd' // 可选，选择器打开时默认显示的时间
  },
  {
    labelName: 'dateTimePicker 日期时间选择器',
    nikeName: '日期时间选择器', // label名字
    labelKey: 'dateTimePicker',
    readonly: '', // true or false
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      isEdit: true
    },
    editable: '', // 文本可输入 true or false
    clearable: '', // 是否显示清除按钮 true or false
    size: {
      name: '',
      type: 'option',
      options: [
        { label: 'mini', name: 'mini' },
        { label: 'small', name: 'small' },
        { label: 'medium', name: 'medium' }
      ],
      isEdit: true
    },
    placeholder: '选择时间',
    'start-placeholder': '开始时间', // 范围选择时开始日期的占位内容
    'end-placeholder': '结束时间', // 范围选择时开始日期的占位内容
    value: {
      name: '',
      type: 'string',
      isEdit: true
    },
    type: 'datetime', // 显示类型 year/month/date/week/ datetime/datetimerange/daterange
    align: '', // 对齐方式 left or center or right
    'range-separator': '-', // 选择范围时的分隔符
    format: 'yyyy-MM-dd HH:mm:ss', // 显示在输入框中的格式
    'value-format': 'yyyy-MM-dd HH:mm:ss', // 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象
    'default-value': 'yyyy-MM-dd HH:mm:ss' // 可选，选择器打开时默认显示的时间
  },
  {
    labelName: 'upload 上传',
    nikeName: '上传', // label名字
    labelKey: 'upload',
    value: [],
    action: 'https://jsonplaceholder.typicode.com/posts/', // 必选参数，上传的地址
    headers: '', // 设置上传的请求头部
    multiple: '', // 是否支持多选文件
    data: '', // 上传时附带的额外参数
    name: '', // 上传的文件字段名
    'with-credentials': '', // 支持发送 cookie 凭证信息
    'show-file-list': '', // 是否显示已上传文件列表
    drag: '', // 是否启用拖拽上传
    accept: '', // 接受上传的文件类型（thumbnail-mode 模式下此参数无效）
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      isEdit: true
    },
    limit: 10 // 最大允许上传个数
  },
  {
    labelName: 'rate 评分',
    nikeName: '评分', // label名字
    labelKey: 'rate',
    value: 4.5,
    max: '',
    disabled: {
      name: '',
      type: 'option',
      options: [
        { label: 'disable:true', value: true },
        { label: 'disable:false', value: false }
      ],
      isEdit: true
    },
    'allow-half': '', // 是否允许半选
    colors: '', // icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色['#F7BA2A', '#F7BA2A', '#F7BA2A']
    'void-color': '', // 未选中 icon 的颜色#C6D1DE
    'disabled-void-color': '', // 只读时未选中 icon 的颜色#EFF2F7
    'text-color': '#ff9900'
  }
]
export default labelData
