<template lang="pug">
  el-container
    el-header
      Aside
    el-container
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
</style>
