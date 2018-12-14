<template lang="pug">
  el-container.default
    el-header
    el-container.main
      router-view
</template>

<script>
import Aside from '../components/Aside'
export default {
  components: {
    Aside
  },
  data () {
    return {
      height: '',
      code: `el-container
el-main Main
el-footer Footer`
    }
  },
  mounted () {
    this.code = encodeURI(this.code)
  }
}
</script>

<style lang="less">
  .default{
    height: 100%;
    .main{
      height: 100%;
    }
  }
</style>
