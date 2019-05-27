<template lang="pug">
  div.box.chartStatus
    article.wrap
      div.header
        div.menu-box
          div.menu-item.mr10.pt4.pb4(v-for="(item) in tabObj.data" :key="item.value" @click="tabObj.active = item.value" :class="{ 'active': tabObj.active === item.value }") {{item.label}}
      div.list(v-loading="loading.list")
        div.list-item(:class="{ 'active': item.id === activeErrorId }" v-for="(item, index) in errorList" :key="index" @click="init(item.id)")
          div.name {{item.name}}
          div.time {{formatTime(item.time)}}
          div.type {{item.type}}
      // 基本信息
      div.base-info(v-if="tabObj.active === 'baseInfo'" v-loading="loading.detail")
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
      div.user-action(v-if="tabObj.active === 'userAction' && errorDetail" v-loading="loading.detail")
        section.action-item(v-for="(item) in errorDetail.breadcrumbs")
          user-action(:item="item")
      // 页面性能
      div.performance-info(v-if="tabObj.active === 'performance' && errorDetail" v-loading="loading.detail")
        performance(:errorDetail="errorDetail")
      // 携带参数
      div.performance-info(v-if="tabObj.active === 'metaData' && errorDetail" v-loading="loading.detail")
        metadata(:errorDetail="errorDetail")
</template>
<script>
import errorAPI from '@/api/error.js'
import {parseTime} from '../../utils/utils'
const baseInfo = () => import('./components/Base_info')
const sourceInfo = () => import('./components/source_info')
const stackInfo = () => import('./components/stack_info')
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
      clientObj: {
        height: '100%'
      },
      chartStatus: false,
      errorDetail: null,
      userAgent: null,
      loading: {
        list: false,
        detail: false
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
    this.init(this.$route.params.id)
    this.fetchList(this.$route.query.typeId)
  },
  methods: {
    init (id) {
      const params = {
        id: id
      }
      this.activeErrorId = id
      this.loading.detail = true
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
        .finally(() => {
          this.loading.detail = false
        })
    },
    fetchList (typeId) { // 根据tupeId获取列表
      const params = {
        typeId: typeId
      }
      this.loading.list = true
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
        .finally(() => {
          this.loading.list = false
        })
    },
    detect (userAgent) {
      this.userAgent = detect.parse(userAgent)
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
  @import "../../assets/css/base.less";
  .box{
    height: 100%;
    width: 100%;
  }
  .wrap{
    width: 100%;
    min-height: 100%;
    padding-top: 50px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    position: relative;
    word-break: break-all;
    .header{
      width: 100%;
      height: 50px;
      position: fixed;
      top: 0px;
      left: 0px;
      background: @bgSubColor;
      color: @writeColor;
      z-index: 2;
      .menu-box{
        position: relative;
        left: 300px;
        height: 100%;
        max-width: 360px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .menu-item{
          flex: 1;
          text-align: center;
          &.active{
            border: 1px solid @color6;
            color: @color6;
          }
          &:hover{
            background: @bgMainColor;
            color: @color6;
          }
        }
      }
    }
    .list{
      width: 300px;
      max-height:100%;
      background: @bgSubColor;
      .list-item{
        font-size: 12px;
        height: 12px;
        line-height: 12px;
        padding: 10px 8px;
        cursor: pointer;
        &+.list-item{
          border-top: 1px solid @color6;
        }
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
          color: @color6;
        }
        &:hover{
          background: @bgMainColor;
          font-weight: bold;
        }
      }
    }
    .base-info {
      min-height: 100%;
      flex: 1;
      display: flex;
      flex-direction: row;
      word-wrap: break-word;
      padding-bottom: 20px;
      background: @bgMainColor;
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
      min-height: 100%;
      overflow-y: auto;
      background: @bgMainColor;
      &::-webkit-scrollbar{
        display: none;
      }
      .action-item {
        padding: 6px;
      }
    }
    .performance-info{
      flex: 1;
      width: 100%;
      min-height: 100%;
      background: @bgMainColor;
    }
  }
  .hide{
    transition: transform 0.3s ease-in;
    transform: translateY(-342px);
  }
  .show{
    transition: transform 0.3s ease-in;
    transform: translateY(0px);
  }
</style>
