<template lang="pug">
  pre.pre
    code.code {{errorDetail.metadata}}
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
    font-size: .85em;
    line-height: 1.2em;
    overflow: auto;
    height: 200px;
    resize: vertical;
    cursor: pointer;
    .code{
      display: block;
      overflow-x: auto;
      padding: .5em;
    }
  }
</style>
