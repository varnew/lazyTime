<template lang="pug">
  code-carbon(:code="errorDetail.metadata")
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
  components: {codeCarbon},
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
  pre{
    display: block;
    margin: 0px;
    padding: 0px 15px;
    background: @bgSubColor3;
    code{
      color: @color5;
    }
  }
</style>
