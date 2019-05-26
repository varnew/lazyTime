<template lang="pug">
  div.box(:class="{ 'hide': !chartStatus, 'show': chartStatus }")
    div.btn(@click="showChart") {{chartStatus ? '收起':'展开'}}
    article.wrap
      div.header
        el-radio-group(v-model="tabObj.active" size="small")
          el-radio-button(v-for="(item) in tabObj.data" :key="item.value" :label="item.value") {{item.label}}
      div.list
        div.list-item(:class="{ 'active': item.id === activeErrorId }" v-for="(item, index) in errorList" :key="index" @click="init(item.id)")
          div.name {{item.name}}
          div.time {{formatTime(item.time)}}
          div.type {{item.type}}
      // 基本信息
      div.base-info(v-if="tabObj.active === 'baseInfo'" v-loading="loading.list")
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
      div.user-action(v-if="tabObj.active === 'userAction' && errorDetail" v-loading="loading.list")
        section.action-item(v-for="(item) in errorDetail.breadcrumbs")
          user-action(:item="item")
      // 页面性能
      div.performance-info(v-if="tabObj.active === 'performance' && errorDetail" v-loading="loading.list")
        performance(:errorDetail="errorDetail")
      // 携带参数
      div.performance-info(v-if="tabObj.active === 'metaData' && errorDetail" v-loading="loading.list")
        metadata(:errorDetail="errorDetail")
</template>
<script>
import errorAPI from '@/api/error.js'
import {parseTime} from '../../utils/utils'
const baseInfo = () => import('./components/Base_info')
const sourceInfo = () => import('./components/source_info')
const stackInfo = import('./components/stack_info')
const errorInfo = () => import('./components/error_info')
const deviceInfo = () => import('./components/device_info')
const positionInfo = () => import('./components/position_info')
const orderInfo = () => import('./components/order_info')
const userAction = () => import('./components/user_action')
const performance = () => import('./components/performance')
const metadata = () => import('./components/metadata')
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
      chartStatus: false,
      errorDetail: null,
      userAgent: null,
      loading: {
        list: false
      },
      tabObj: {
        active: 'baseInfo',
        data: [
          { label: '基本信息', value: 'baseInfo' },
          { label: '用户行为', value: 'userAction' },
          { label: '页面性能', value: 'performance' },
          { label: '携带参数', value: 'metaData' }
        ]
      },
      errorList: [],
      activeErrorId: ''
    }
  },
  mounted () {
    this.init(this.$route.query.id)
    this.fetchList(this.$route.query.typeId)
  },
  methods: {
    init (id) {
      const params = {
        id: id
      }
      this.activeErrorId = id
      this.loading.list = true
      errorAPI.getErrorById(params)
        .then((res) => {
          if (res.data.code === 200) {
            this.errorDetail = res.data.data
            this.detect(this.errorDetail.userAgent)
            window.fundebug.notify('Test', 'Hello, Fundebug!')
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch((res) => {
          console.log(res)
        })
        .finally(() => {
          this.loading.list = false
        })
    },
    fetchList (typeId) { // 根据tupeId获取列表
      const params = {
        typeId: typeId
      }
      errorAPI.getErrorByTypeId(params)
        .then((res) => {
          if (res.data.code === 200) {
            this.errorList = res.data.data
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    detect (userAgent) {
      this.userAgent = detect.parse(userAgent)
      // this.userAgent = detect.parse('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36')
      // console.log(this.userAgent)
    },
    showChart () {
      this.chartStatus = !this.chartStatus
    },
    formatTime (time) {
      return time && parseTime(time, '{y}-{m}-{d} {h}:{i}:{s}')
    }
  }
}
</script>
<style lang="less" scoped>
  .box{
    height: 100%;
    background: #fff;
  }
  .hide{
    transition: transform 0.3s ease-in;
    transform: translateY(-342px);
  }
  .show{
    transition: transform 0.3s ease-in;
    transform: translateY(0px);
  }
  .btn{
    height: 30px;
    line-height: 31px;
    text-align: center;
    background: #f2f2f2;
    color: gray;
    cursor: pointer;
  }
  .wrap{
    width: 100%;
    height: 100%;
    min-height: 700px;
    padding-top: 36px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    position: relative;
    word-break: break-all;
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
      .list-item{
        font-size: 12px;
        height: 12px;
        line-height: 12px;
        padding: 10px 8px;
        .name{
          float: left;
        }
        .time{
          float: right;
        }
        .type{
          text-align: center;
        }
        &.active{
          background: #f2f2f2;
        }
        &:hover{
          background: #f2f2f2;
          cursor: pointer;
        }
      }
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
      flex: 1;
      width: 100%;
      height: 100%;
      background: #fcf6db;
      border-left: 1px solid #eee;
    }
  }
</style>
