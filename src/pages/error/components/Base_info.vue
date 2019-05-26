<template lang="pug">
  div
    h4 概要信息
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") 时间
      el-col(:span="18") {{formatTime(errorDetail.time)}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") 类型
      el-col(:span="18") {{errorDetail.type}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
      el-col(:span="6") title
      el-col(:span="18") {{errorDetail.title}}
    el-row(style="margin: 10px 0px;padding:10px 0px;border-bottom:1px dashed #eee;")
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
</style>
