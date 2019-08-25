<template lang="pug">
  div.action.pt10.pb10.pl10.pr10.pl10(:class="{ 'console': item.type === 'console', 'http': item.type === 'XMLHttpRequest'  }")
    div.action-title.pt10.pb10.pl10 {{item.type}}
    el-row.info-item.pt10.pb10.pl10(v-if="item.page.url")
      el-col.error-info-title(:span="4") path
      el-col(:span="20") {{item.page.url}}
    el-row.info-item.pt10.pb10.pl10(v-if="item.type === 'XMLHttpRequest'")
      el-col.error-info-title(:span="4") method
      el-col(:span="20") {{item.detail.method}}
    el-row.info-item.pt10.pb10.pl10(v-if="item.detail.url")
      el-col.error-info-title(:span="4") url
      el-col(:span="20") {{item.detail.url}}
    el-row.info-item.pt10.pb10.pl10(v-if="item.detail.status")
      el-col.error-info-title(:span="4") status
      el-col(:span="20") {{item.detail.status}}
    el-row.info-item.pt10.pb10.pl10(v-if="item.detail.statusText")
      el-col.error-info-title(:span="4") statusText
      el-col(:span="20") {{item.detail.statusText}}
    el-row.info-item.pt10.pb10.pl10(v-if="item.src")
      el-col.error-info-title(:span="4" v-if="item.type === 'XMLHttpRequest'") src
      el-col(:span="20") {{item.src}}
    el-row.info-item.pt10.pb10.pl10(v-if="item.elapsedTime")
      el-col.error-info-title(:span="4") elapsedTime
      el-col(:span="20") {{item.elapsedTime}}
    el-row.info-item.pt10.pb10.pl10(v-if="item.detail.arguments")
      el-col.error-info-title(:span="4") console
      el-col(:span="20")
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
  @import "../../../assets/css/base.less";
  .action{
    color: @color6;
    .action-title{
      font-size: 18px;
      font-weight: bold;
      background: @titleColor;
      color: @writeColor;
    }
    .info-item{
      background: @bgSubColor3;
      .error-info-title{
        color: @color8;
      }
    }
    .console{
      box-shadow: 0px 0px 6px @color5;
      color: @color5;
    }
    .http{
      box-shadow: 0px 0px 6px @color6;
      color: @color6;
    }
  }
</style>
