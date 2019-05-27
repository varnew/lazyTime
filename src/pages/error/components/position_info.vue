<template lang="pug">
  div
    h4.title 位置信息
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") IP
      el-col(:span="18") {{errorDetail.ip}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") 地点
      el-col(:span="18") xxx
    el-row.border-bottom.pt16.pb16.pl10.pr10
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
  @import "../../../assets/css/base.less";
  .border-bottom{
    box-shadow: 0px 0px 6px @color5;
    color: @color5;
  }
  .title{
    color: @color5;
  }
</style>
