<template lang="pug">
  code-carbon(:code="errorDetail.performance")
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
  pre{
    display: block;
    margin: 0px;
    padding: 0px 15px;
  }
</style>
