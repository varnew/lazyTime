<template lang="pug">
  div(v-if="errorDetail.stacktrace")
    h4.title.pt10.pb10.pl10 错误信息
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col.error-info-title(:span="6") 名称
      el-col(:span="18") {{errorDetail.name}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col.error-info-title(:span="6") 信息
      el-col(:span="18") {{errorDetail.message}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col.error-info-title(:span="24") 文件-行号-列号：
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="24") {{errorDetail.stacktrace}}
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
