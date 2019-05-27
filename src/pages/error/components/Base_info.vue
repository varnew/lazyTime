<template lang="pug">
  div
    h4.title 概要信息
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") 时间
      el-col(:span="18") {{formatTime(errorDetail.time)}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") 类型
      el-col(:span="18") {{errorDetail.type}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") title
      el-col(:span="18") {{errorDetail.title}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="6") URL
      el-col(:span="18") {{errorDetail.url}}
</template>
<script>
import { parseTime } from '../../../utils/utils'
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
  methods: {
    formatTime (time) {
      return time && parseTime(time, '{y}-{m}-{d} {h}:{i}:{s}')
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../../assets/css/base.less";
  .border-bottom{
    box-shadow: 0px 0px 6px @color1;
    color: @color1;
  }
  .title{
    color: @color1;
  }
</style>
