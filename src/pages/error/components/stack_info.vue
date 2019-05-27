<template lang="pug">
  div(v-if="errorDetail.stacktrace")
    h4.title 堆栈信息
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="24") 提示信息:
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="24") {{errorDetail.message}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="24") 详细信息:
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="24")
        div(v-html="errorDetail.stacktrace")
</template>
<script>
import codeCarbon from 'code-carbon'
export default {
  props: {
    errorDetail: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    codeCarbon
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
    box-shadow: 0px 0px 6px @color6;
    color: @color6;
  }
  .title{
    color: @color6;
  }
</style>
