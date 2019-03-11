<template lang="pug">
  el-menu(:default-active="active" class="header" mode="horizontal" @select="handleSelect" :collapse="false")
    el-menu-item(index="main") 生成
    el-menu-item(index="2") 自动化系统
    el-menu-item(index="3") 常用工具
    el-menu-item(index="4") 在线可编辑blog
    el-menu-item(index="error") 错误监控与访问统计
</template>

<script>
import redner from '../utils/render'
export default {
  name: 'Aside',
  data () {
    return {
      active: 'main'
    }
  },
  mounted () {
    this.active = this.$route.name
  },
  methods: {
    handleSelect (index) {
      this.toRender()
    },
    toRender () {
      const temp = redner(this.$store.state.form.list)
      console.log('----------temp')
      console.log(temp)
      console.log('----------temp')
    }
  }
}
</script>

<style scoped>
  .header{
    height: 60px;
  }
</style>
