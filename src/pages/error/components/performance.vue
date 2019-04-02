<template lang="pug">
  pre.pre
    code.code {{errorDetail.performance}}
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
  .pre{
    font-size: 13px;
    line-height: 24px;
    overflow: auto;
    height: 100%;
    min-height: 500px;
    resize: vertical;
    cursor: pointer;
    .code{
      display: block;
      overflow-x: auto;
      padding: .5em;
    }
  }
</style>
