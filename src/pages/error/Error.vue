<template lang="pug">
  div(class="wrap")
    div.echart-box(:class="{'hide': !status, 'show': status}")
      echart
    div.show-btn(@click="chartStatus") {{isShow ? '收起' : '展开'}}
    div.contain-box
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
    chartStatus () {
      this.status = !this.status
      if (!this.status) {
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .wrap{
    width: 100%;
    height: 100%;
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    .echart-box{
      width: 100%;
      transition-timing-function: ease-in-out;
      &.show{
        transition: 0.5s;
        min-height: 392px;
        max-height: 500px;
        padding-bottom: 20px;
      }
      &.hide{
        transition: 0.5s;
        min-height: 0px;
        height: 0px;
        padding: 0px;
      }
    }
    .contain-box{
      flex: 1;
    }
    .show-btn{
      height: 30px;
      line-height: 30px;
      background: #f2f2f2;
      text-align: center;
      color: gray;
      cursor: pointer;
      z-index: 2;
    }
  }
</style>
