<template lang="pug">
  div.main
    el-upload(action="/img/upload" :file-list="fileList" :on-success="handleAvatarSuccess")
      el-button(size="small" type="primary") 点击上传
</template>

<script>
export default {
  data () {
    return {
      fileList: []
    }
  },
  mounted () {
  },
  methods: {
    handleAvatarSuccess (res, file) {
      console.log('----------')
      console.log(res)
      console.log(file)
      console.log('----------')
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
    width: 100%;
    display: flex;
    padding: 20px 10px;
  }
</style>
