<template lang="pug">
  section.wrap
    div.menu
      div.menu-item 参数
      div.menu-item 布局
    div.container
      div.parameter
        div.parameter-item(v-for="(item, index) in params" v-if="params.length")
          el-tooltip(effect="dark" :content="item.desc" placement="top")
            div.parameter-item-left {{item.key}}
          div.parameter-item-right
            el-input(v-model="item.value" type="text" size="mini")
      div.layout
    div.footer
</template>

<script>
import draggable from 'vuedraggable'
// import label from '../../json/label.js'
export default {
  components: {
    draggable
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      params: []
    }
  },
  mounted () {
    const params = {
      labelName: 'input 单行文本', // 标签名字
      nikeName: '单行文本', // label名字
      labelKey: 'input',
      type: 'text',
      value: new Date().getTime().toString(),
      placeholder: '',
      disabled: '',
      readonly: '',
      max: '',
      min: '',
      autofocus: '',
      size: 'mini'
    }
    Object.keys(params).forEach((key, index) => {
      const item = {
        key: key,
        value: params[key],
        desc: params[key]
      }
      this.params.push(item)
    })
    // label.map((item) => {
    //   if (this.type === item.labelKey) {
    //     this.params = item
    //   }
    // })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .menu{
      width: 100%;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background: #f2f2f2;
      display: flex;
      .menu-item{
        flex: 1;
        cursor: pointer;
        &:hover{
          background: #c0c4cc;
        }
      }
    }
    .container{
      flex: 1;
      overflow-y: auto;
      .parameter{
        .parameter-item{
          display: flex;
          padding: 0px 4px;
          min-height: 36px;
          line-height: 36px;
          cursor: pointer;
          .parameter-item-left{
            min-width: 96px;
            text-align: right;
            padding-right: 4px;
          }
          .parameter-item-right{
            flex: 1;
          }
        }
      }
    }
    .footer{
      height: 36px;
      background: pink;
    }
  }
</style>
