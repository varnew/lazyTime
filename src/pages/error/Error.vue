<template lang="pug">
  div(class="wrap")
    div.echart-box
      echart
    div.contain-box
      router-view
</template>

<script>
import search from './components/Search'
import echart from './components/Echart'
export default {
  components: {
    search,
    echart
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  .wrap{
    width: 100%;
    height: 100%;
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    .echart-box{
      width: 100%;
      min-height: 392px;
      max-height: 500px;
    }
    .contain-box{
      flex: 1;
    }
  }
</style>
