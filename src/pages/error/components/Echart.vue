<template lang="pug">
  div.histogram
    ve-histogram(:data="chartData" :extend="extend" :settings="chartSettings" :data-zoom="dataZoom")
</template>

<script>
import errorAPI from '@/api/error.js'
import {parseTime} from '../../../utils/utils'
export default {
  components: {
  },
  data () {
    return {
      dataZoom: [
        {
          type: 'slider',
          start: 0,
          end: 20
        }
      ],
      chartSettings: {
        showLine: ['统计']
      },
      extend: {
        series: {
          label: { show: true, position: 'top' }
        }
      },
      chartData: {
        columns: ['日期', '资源错误', 'js错误', 'http错误', '统计'],
        rows: [
          // { '日期': '1/1', '资源错误': 1393, 'js错误': 1093, 'http错误': 1000, '统计': 8888 },
          // { '日期': '1/2', '资源错误': 3530, 'js错误': 3230, 'http错误': 1000, '统计': 8888 },
          // { '日期': '1/3', '资源错误': 2923, 'js错误': 2623, 'http错误': 1000, '统计': 8888 },
          // { '日期': '1/4', '资源错误': 1723, 'js错误': 1423, 'http错误': 1000, '统计': 8888 },
          // { '日期': '1/5', '资源错误': 3792, 'js错误': 3492, 'http错误': 1000, '统计': 8888 },
          // { '日期': '1/6', '资源错误': 4593, 'js错误': 4293, 'http错误': 1000, '统计': 8888 }
        ]
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      errorAPI.getCounts()
        .then((res) => {
          if (res.data.code === 200) {
            this.chartData.rows.push({
              '日期': parseTime(new Date(), '{y}-{m}-{d}'),
              '资源错误': res.data.data.source,
              'js错误': res.data.data.js,
              'http错误': res.data.data.http,
              '统计': res.data.data.js + res.data.data.source + res.data.data.http
            })
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>
<style lang="less" scoped>
  .wrap{
    width: 100%;
    height: 100%;
    .histogram {
      height: 420px;
    }
  }
</style>
