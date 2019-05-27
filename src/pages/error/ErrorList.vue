<template lang="pug">
  div.error-list
    el-table(ref="table" :data="tableList" tooltip-effect="dark" @selection-change="handleSelectionChange" @row-click="rowClick" stripe row-style="cursor:pointer;")
      el-table-column(type="selection" width="55")
      el-table-column(label="名称"     prop="name" width="" :show-overflow-tooltip="true")
      el-table-column(label="错误类型" prop="type" width="120")
      el-table-column(label="状态"     prop="status" width="120")
      el-table-column(label="时间"     prop="time" width="120" sortable)
      el-table-column(label="事件数"   prop="" width="120" sortable)
      el-table-column(label="用户数"   prop="" width="120" sortable)
      el-table-column(label="脚本版本" prop="notifierVersion" width="120" )
    el-row.mtb20(type="flex" class="row-bg" justify="end")
      el-pagination(@size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="pagination.page" :page-sizes="[10, 15, 20, 50]" :page-size="pagination.size"
      layout="total, sizes, prev, pager, next, jumper" :total="pagination.totalSize")

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
        size: 10,
        totalSize: 0
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
            console.log('----------')
            console.log(this.tableList)
            console.log('----------')
            this.pagination.totalSize = res.data.totalSize
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
    },
    handleSizeChange (size) {
      this.pagination.size = size
      this.init()
    },
    handleCurrentChange (page) {
      this.pagination.page = page
      this.init()
    }
  }
}
</script>
<style lang="less" scoped>
  .mtb20{
    margin: 20px 0px;
  }
</style>
