<template lang="pug">
  div
    h4(v-if="errorDetail.target") 资源信息
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;" v-if="errorDetail.target")
      el-col(:span="6") outerHTML
      el-col(:span="18") {{errorDetail.target.outerHTML}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;" v-if="errorDetail.target")
      el-col(:span="6") src
      el-col(:span="18") {{errorDetail.target.src}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;" v-if="errorDetail.target")
      el-col(:span="6") tagName
      el-col(:span="18") {{errorDetail.target.tagName}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;" v-if="errorDetail.target")
      el-col(:span="6") XPath
      el-col(:span="18") {{errorDetail.target.XPath}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;" v-if="errorDetail.target")
      el-col(:span="6") selector
      el-col(:span="18") {{errorDetail.target.selector}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;" v-if="errorDetail.target")
      el-col(:span="6") timeStamp
      el-col(:span="18") {{errorDetail.target.timeStamp}}
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
