<template lang="pug">
  div
    h4.title 设备信息
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") 浏览器
      el-col(:span="18") {{userAgent.browser.family}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") 浏览器版本
      el-col(:span="18") {{userAgent.browser.major}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") 操作系统
      el-col(:span="18") {{userAgent.os.family}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") 设备
      el-col(:span="18") {{userAgent.device.type}}
</template>
<script>
export default {
  props: {
    userAgent: {
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
  .border-bottom{
    box-shadow: 0px 0px 6px @color3;
    color: @color3;
  }
  .title{
    color: @color3;
  }
</style>
