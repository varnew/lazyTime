<template lang="pug">
  div
    h4 其他信息
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") 插件版本
      el-col(:span="18") {{errorDetail.notifierVersion}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") 事件ID
      el-col(:span="18") {{errorDetail.id}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") userAgent
      el-col(:span="18") {{errorDetail.userAgent}}
</template>
<script>
export default {
  props: {
    errorDetail: {
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
