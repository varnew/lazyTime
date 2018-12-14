<template lang="pug">
  el-menu(:default-active="active" class="header" mode="horizontal" @select="handleSelect" :collapse="false")
    el-menu-item(index="1") 操作面板
    el-menu-item(index="2") 自动化系统
    el-menu-item(index="3") 常用工具
    el-menu-item(index="4") 在线可编辑blog
    el-menu-item(index="5") 错误监控与访问统计
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      active: '1'
    }
  },
  methods: {
    handleSelect (index) {
      console.log('----------index')
      console.log(index)
      console.log('----------index')
    }
  }
}
</script>

<style scoped>
  .header{
    height: 60px;
  }
</style>
