<template lang="pug">
  div.main
    el-button(@click="getBacc") 获取
    el-table(:data="baccList" style="width: 100%")
      el-table-column(prop="symbol" label="币种")
      el-table-column(prop="close" label="最新价")
      el-table-column(prop="rate" label="涨幅")
      el-table-column(prop="high" label="最高价")
      el-table-column(prop="low" label="最低价")
</template>

<script>
import baccAPI from '../api/bacc'

export default {
  data () {
    return {
      list: [],
      baccList: []
    }
  },
  mounted () {
  },
  methods: {
    getBacc () {
      const params = {'query': '{' + 'overviewBySymbols(symbols: ["btcusdt","eosusdt","htusdt","ethusdt","dateth","bchusdt","bchbtc","etcusdt","xrpusdt","xemusdt","ltcusdt","neousdt","eoseth","omgeth","ctxceth","itceth","iosteth","gnxeth","btmeth","onteth","qtumeth","datxeth","blzeth","neobtc","blzbtc","storjbtc","btmbtc","ethbtc","xrpbtc","eosbtc","ltcbtc","ontusdt","etcbtc","xembtc","qtumbtc","qtumusdt","waneth","dashusdt","bixeth","hiteth","elaeth","acteth","boxeth","abteth","dtaeth","elfeth","hteth","htbtc","bsvbtc","iicbtc","hptusdt","baccusdt"]) {symbol high low open close rate amount vol estimate {high low open close btc}},qoutes {code text weight}}'}
      baccAPI.getBacc(params)
        .then((res) => {
          if (res) {
            this.list = res.data.data.overviewBySymbols || []
            this.list.map((item) => {
              if (item.symbol === 'baccusdt') {
                console.log('----------')
                console.log(item)
                console.log('----------')
                this.baccList.push(item)
              }
            })
          }
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped>
  html,body,.main{
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
  .main{
  }
</style>
