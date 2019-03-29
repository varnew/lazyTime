<template lang="pug">
  div.error-list
    el-table(ref="table" :data="tableList" tooltip-effect="dark" @selection-change="handleSelectionChange" @row-click="rowClick")
      el-table-column(type="selection" width="55")
      el-table-column(label="名称"     prop="name" width="")
      el-table-column(label="错误类型" prop="type" width="120")
      el-table-column(label="状态"     prop="status" width="120")
      el-table-column(label="时间"     prop="time" width="120" sortable)
      el-table-column(label="事件数"   prop="" width="120" sortable)
      el-table-column(label="用户数"   prop="" width="120" sortable)
      el-table-column(label="脚本版本" prop="notifierVersion" width="120" )

</template>

<script>
import errorAPI from '@/api/error.js'
export default {
  components: {
  },
  data () {
    return {
      tableList: [],
      selectedList: [],
      pagination: {
        page: 1,
        size: 10
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const params = {
        page: this.pagination.page,
        size: this.pagination.size
      }
      errorAPI.getErrors(params)
        .then((res) => {
          if (res.data.code === 200) {
            this.tableList = res.data.data
            this.tableList.map((item) => {
              item.name = item.stacktrace || item.target.src
            })
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    handleSelectionChange (list) {
      this.selectedList = list
    },
    rowClick (row, column, event) {
      this.$router.push({ name: 'errorDetail', params: {}, query: {id: row.id, typeId: row.typeId} })
    }
  }
}
</script>
<style lang="less" scoped>
  .error-list{
  }
</style>
