<template lang="pug">
  div
    h4 设备信息
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") 浏览器
      el-col(:span="18") {{userAgent.browser.family}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") 浏览器版本
      el-col(:span="18") {{userAgent.browser.major}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") 操作系统
      el-col(:span="18") {{userAgent.os.family}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
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
</style>
