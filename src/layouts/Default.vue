<template lang="pug">
  el-container.default
    //el-header
      //Aside
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
