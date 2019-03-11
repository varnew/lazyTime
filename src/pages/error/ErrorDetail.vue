<template lang="pug">
  article.wrap
    div.header
      el-radio-group(v-model="tabObj.active" size="small")
        el-radio-button(v-for="(item) in tabObj.data" :key="item.value" :label="item.value") {{item.label}}
    div.list
      <!--img(src="https://bpic.588ku.com/element_banner/20/19/01/841ae0deb44f1ff8c552035abb2bb0acd.jpg")-->
    // 基本信息
    div.base-info(v-if="tabObj.active === 'baseInfo'")
      section.error-info(v-if="errorDetail")
        base-info(:errorDetail="errorDetail")
        source-info(:errorDetail="errorDetail")
        stack-info(:errorDetail="errorDetail")
        error-info(:errorDetail="errorDetail")
      section.device-info(v-if="userAgent")
        device-info(:userAgent="userAgent")
        position-info(:errorDetail="errorDetail")
        order-info(:errorDetail="errorDetail")
    // 用户行为
    div.user-action(v-if="tabObj.active === 'userAction' && errorDetail")
      section.action-item(v-for="(item) in errorDetail.breadcrumbs")
        user-action(:item="item")
    // 页面性能
    div.performance-info(v-if="tabObj.active === 'performance' && errorDetail")
      performance(:errorDetail="errorDetail")
    // 携带参数
    div.performance-info(v-if="tabObj.active === 'metaData' && errorDetail")
      metadata(:errorDetail="errorDetail")
</template>
<script>
import errorAPI from '@/api/error.js'
import baseInfo from './components/Base_info'
import sourceInfo from './components/source_info'
import stackInfo from './components/stack_info'
import errorInfo from './components/error_info'
import deviceInfo from './components/device_info'
import positionInfo from './components/position_info'
import orderInfo from './components/order_info'
import userAction from './components/user_action'
import performance from './components/performance'
import metadata from './components/metadata'
const detect = require('@/utils/detect')
export default {
  components: {
    baseInfo,
    sourceInfo,
    stackInfo,
    errorInfo,
    deviceInfo,
    positionInfo,
    orderInfo,
    userAction,
    performance,
    metadata
  },
  data: () => {
    return {
      errorDetail: null,
      userAgent: null,
      tabObj: {
        active: 'baseInfo',
        data: [
          { label: '基本信息', value: 'baseInfo' },
          { label: '用户行为', value: 'userAction' },
          { label: '页面性能', value: 'performance' },
          { label: '携带参数', value: 'metaData' }
        ]
      }
    }
  },
  mounted () {
    this.init(this.$route.query.id)
  },
  methods: {
    init (id) {
      const params = {
        id: id
      }
      errorAPI.getErrorById(params)
        .then((res) => {
          if (res.data.code === 200) {
            this.errorDetail = res.data.data
            this.detect(this.errorDetail.userAgent)
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    detect (userAgent) {
      // this.userAgent = detect.parse(userAgent)
      this.userAgent = detect.parse('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36')
      console.log(this.userAgent)
    }
  }
}
</script>
<style lang="less" scoped>
  .wrap{
    width: 100%;
    height: 100%;
    padding-top: 36px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    position: relative;
    word-break: break-all;
    color: #f56c6c;
    .header{
      width: 100%;
      height: 36px;
      position: absolute;
      top: 0px;
      left: 0px;
      border-bottom: 1px solid #eee;
      .el-radio-group{
        position: absolute;
        left: 300px;
        top: 5px;
      }
    }
    .list{
      width: 300px;
      height:100%;
    }
    .base-info {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: row;
      word-wrap: break-word;
      border-left: 1px solid #eee;
      overflow-y: auto;
      &::-webkit-scrollbar{
        display: none;
      }
      .error-info{
        flex: 1;
        height: 100%;
        padding: 0px 12px;
      }
      .device-info{
        flex: 1;
        height: 100%;
        padding: 0px 12px;
      }
    }
    .user-action{
      flex: 1;
      height: 100%;
      overflow-y: auto;
      border-left: 1px solid #eee;
      &::-webkit-scrollbar{
        display: none;
      }
      .action-item {
        padding: 6px;
        & + .action-item {
          border-top: 2px dashed #eee;
        }
      }
    }
    .performance-info{
      width: 100%;
      height: 100%;
      background: #fcf6db;
      border-left: 1px solid #eee;
    }
  }
</style>
