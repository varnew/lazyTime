<template lang="pug">
  div
    h4.title.pt10.pb10.pl10(v-if="errorDetail.target") 资源信息
    el-row.border-bottom.pt16.pb16.pl10.pr10(v-if="errorDetail.target")
      el-col.error-info-title(:span="6") outerHTML
      el-col(:span="18") {{errorDetail.target.outerHTML}}
    el-row.border-bottom.pt16.pb16.pl10.pr10(v-if="errorDetail.target")
      el-col.error-info-title(:span="6") src
      el-col(:span="18") {{errorDetail.target.src}}
    el-row.border-bottom.pt16.pb16.pl10.pr10(v-if="errorDetail.target")
      el-col.error-info-title(:span="6") tagName
      el-col(:span="18") {{errorDetail.target.tagName}}
    el-row.border-bottom.pt16.pb16.pl10.pr10(v-if="errorDetail.target")
      el-col.error-info-title(:span="6") XPath
      el-col(:span="18") {{errorDetail.target.XPath}}
    el-row.border-bottom.pt16.pb16.pl10.pr10(v-if="errorDetail.target")
      el-col.error-info-title(:span="6") selector
      el-col(:span="18") {{errorDetail.target.selector}}
    el-row.border-bottom.pt16.pb16.pl10.pr10(v-if="errorDetail.target")
      el-col.error-info-title(:span="6") timeStamp
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
  @import "../../../assets/css/base.less";
  .border-bottom{
    background: @bgSubColor3;
    color: @color6;
    .error-info-title{
      color: @color8;
    }
  }
  .title{
    margin-bottom: 0px;
    background: @titleColor;
    color: @writeColor;
  }
</style>
