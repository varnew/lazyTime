<template lang="pug">
  div.action.pt10.pb10.pl10.pr10(:class="{ 'console': item.type === 'console', 'http': item.type === 'XMLHttpRequest'  }")
    div.action-title {{item.type}}
    el-row.mt10.mb10(v-if="item.page.url")
      el-col(:span="6") path
      el-col(:span="18") {{item.page.url}}
    el-row.mt10.mb10(v-if="item.type === 'XMLHttpRequest'")
      el-col(:span="6") method
      el-col(:span="18") {{item.detail.method}}
    el-row.mt10.mb10(v-if="item.detail.url")
      el-col(:span="6") url
      el-col(:span="18") {{item.detail.url}}
    el-row.mt10.mb10(v-if="item.detail.status")
      el-col(:span="6") status
      el-col(:span="18") {{item.detail.status}}
    el-row.mt10.mb10(v-if="item.detail.statusText")
      el-col(:span="6") statusText
      el-col(:span="18") {{item.detail.statusText}}
    el-row.mt10.mb10(v-if="item.src")
      el-col(:span="6" v-if="item.type === 'XMLHttpRequest'") src
      el-col(:span="18") {{item.src}}
    el-row.mt10.mb10(v-if="item.elapsedTime")
      el-col(:span="6") elapsedTime
      el-col(:span="18") {{item.elapsedTime}}
    el-row.mt10.mb10(v-if="item.detail.arguments")
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
  @import "../../../assets/css/base.less";
  .action-title{
    padding: 8px 0px;
    font-size: 18px;
    font-weight: bold;
  }
  .action{
    box-shadow: 0px 0px 6px @color2;
    color: @color2;
  }
  .console{
    box-shadow: 0px 0px 6px @color5;
    color: @color5;
  }
  .http{
    box-shadow: 0px 0px 6px @color6;
    color: @color6;
  }
</style>
