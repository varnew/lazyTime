<template lang="pug">
  div(v-if="errorDetail.stacktrace")
    h4.title.pt10.pb10.pl10 堆栈信息
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col.error-info-title(:span="24") 提示信息:
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col(:span="24") {{errorDetail.message}}
    el-row.border-bottom.pt16.pb16.pl10.pr10
      el-col.error-info-title(:span="24") 详细信息:
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
