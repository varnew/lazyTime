<template lang="pug">
  div
    h4 位置信息
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") IP
      el-col(:span="18") {{errorDetail.ip}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") 地点
      el-col(:span="18") xxx
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") 运营商
      el-col(:span="18") xxx
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
