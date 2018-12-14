<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import url('./assets/css/base');
  #app{
    height: 100%;
  }
</style>
