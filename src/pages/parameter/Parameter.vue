<template lang="pug">
  section.wrap
    div.menu
      div.menu-item 参数
      div.menu-item 布局
    div.container
      div.parameter
        div.parameter-item(v-for="(item, key, index) in list[activeIndex]" v-if="list[activeIndex]")
          el-tooltip(effect="dark" :content="list[activeIndex]['desc']" placement="top")
            div.parameter-item-left {{key}}
          div.parameter-item-right
            el-input(v-model="list[activeIndex][key]" type="text" size="mini")
      div.layout
    div.footer
</template>

<script>
import draggable from 'vuedraggable'
// import label from '../../json/label.js'
export default {
  components: {
    draggable
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      params: [],
      activeIndex: null
    }
  },
  computed: {
    list: { // 操作数据
      get () {
        return this.$store.state.form.list
      },
      set (list) {
        this.$store.commit('form/upListData', list)
      }
    },
    active: {
      get () {
        return this.$store.state.form.active
      },
      set (active) {
        const data = {
          type: 'edit',
          active: active
        }
        this.$store.commit('form/setActive', data)
      }
    }
  },
  mounted () {
  },
  methods: {
    init () {
      if (this.active) {
        this.params = []
        let activeItem = null
        this.list.map((item, index) => {
          if (item.id === this.active.id) {
            activeItem = item
            this.activeIndex = index
          }
        })
        Object.keys(activeItem).forEach((key, index) => {
          const item = {
            key: key,
            value: activeItem[key],
            desc: activeItem[key]
          }
          this.params.push(item)
        })
      }
    }
  },
  watch: {
    'active': {
      handler: function (val, oldVal) {
        this.init()
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .menu{
      width: 100%;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background: #f2f2f2;
      display: flex;
      .menu-item{
        flex: 1;
        cursor: pointer;
        &:hover{
          background: #c0c4cc;
        }
      }
    }
    .container{
      flex: 1;
      overflow-y: auto;
      .parameter{
        .parameter-item{
          display: flex;
          padding: 0px 4px;
          min-height: 36px;
          line-height: 36px;
          cursor: pointer;
          .parameter-item-left{
            min-width: 96px;
            text-align: right;
            padding-right: 4px;
          }
          .parameter-item-right{
            flex: 1;
          }
        }
      }
    }
    .footer{
      height: 36px;
      background: pink;
    }
  }
</style>
