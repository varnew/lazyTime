<template lang="pug">
  div(class="wrap")
    div.echart-box(:class="{'hide': status}")
      echart(@chartStatus="chartStatus")
    div.contain-box(:class="{ 'hide': status }")
      router-view
</template>

<script>
import search from './components/Search'
const echart = () => import('./components/Echart')
export default {
  components: {
    search,
    echart
  },
  data () {
    return {
      status: true
    }
  },
  mounted () {
  },
  methods: {
    chartStatus (status) {
      this.chartStatus = status
    }
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
      &.hide{
        transform: rotateY(100);
      }
    }
  }
</style>
