<template lang="pug">
  div(v-if="errorDetail.stacktrace")
    h4 堆栈信息
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") Error
      el-col(:span="18") {{errorDetail.message}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="24")
        div(v-html="errorDetail.stacktrace")
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
