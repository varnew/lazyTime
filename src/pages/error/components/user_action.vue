<template lang="pug">
  div
    div.action-title {{item.type}}
    el-row(style="margin: 10px 0px;" v-if="item.page.url")
      el-col(:span="6") path
      el-col(:span="18") {{item.page.url}}
    el-row(style="margin: 10px 0px;" v-if="item.type === 'XMLHttpRequest'")
      el-col(:span="6") method
      el-col(:span="18") {{item.detail.method}}
    el-row(style="margin: 10px 0px;" v-if="item.detail.url")
      el-col(:span="6") url
      el-col(:span="18") {{item.detail.url}}
    el-row(style="margin: 10px 0px;" v-if="item.detail.status")
      el-col(:span="6") status
      el-col(:span="18") {{item.detail.status}}
    el-row(style="margin: 10px 0px;" v-if="item.detail.statusText")
      el-col(:span="6") statusText
      el-col(:span="18") {{item.detail.statusText}}
    el-row(style="margin: 10px 0px;" v-if="item.src")
      el-col(:span="6" v-if="item.type === 'XMLHttpRequest'") src
      el-col(:span="18") {{item.src}}
    el-row(style="margin: 10px 0px;" v-if="item.elapsedTime")
      el-col(:span="6") elapsedTime
      el-col(:span="18") {{item.elapsedTime}}
    el-row(style="margin: 10px 0px;" v-if="item.detail.arguments")
      el-col(:span="6") console
      el-col(:span="18")
        div(v-for="(subItem,index) in item.detail.arguments" :key="index") {{subItem}}
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data: () => {
    return {
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style lang="less" scoped>
  .action-title{
    padding: 8px 0px;
    font-size: 18px;
    font-weight: bold;
  }
</style>
