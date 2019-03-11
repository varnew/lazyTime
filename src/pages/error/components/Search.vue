<template lang="pug">
  div(class="wrap")
    el-checkbox(v-model="form.selectAll" true-label='All' false-label='') 全部
</template>

<script>
// import errorAPI from '@/api/error.js'
export default {
  components: {
  },
  data () {
    return {
      form: {
        selectAll: '' // 选择全部
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
</style>
