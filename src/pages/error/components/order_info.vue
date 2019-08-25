<template lang="pug">
  div
    h4.title.pt10.pb10.pl10 其他信息
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col.error-info-title(:span="6") 插件版本
      el-col(:span="18") {{errorDetail.notifierVersion}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col.error-info-title(:span="6") 事件ID
      el-col(:span="18") {{errorDetail.id}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col.error-info-title(:span="6") userAgent
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
