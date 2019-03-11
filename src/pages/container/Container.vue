<template lang="pug">
  div.wrap
    draggable.list-group(element="div" v-model="list" :options="dragOptions")
        div.list-group-item(:key="new Date().getTime().toString()")
          el-form(ref="form" :model="formObj.form" :inline="formObj.inline" label-width="110px" :label-position="formObj.labelPosition")
            draggable.list-group(element="div" v-model="list" :options="dragOptions")
              div.item(v-for="(element, index) in list" :key="index" @click="setParameter(element, index)" :class="{ 'active': element === active }")
                template(v-if="element.labelKey.name !== 'grid'")
                  render-item(:element="element" :index=index :class="{ 'active': element === active }")
                // layout
                template(v-if="element.labelKey.name === 'grid'")
                  el-row(type="flex")
                    el-col(:span="12" style="border: 1px dashed rgb(153, 153, 153);")
                      draggable.list-group(element="div" v-model="element.columns[0].list" :options="dragOptions")
                        template(v-for="(ele, index) in element.columns[0].list")
                          render-item(:element="ele" :index=index :class="{ 'active': ele === active }")
                    el-col(:span="12" style="border: 1px dashed rgb(153, 153, 153);")
                      draggable.list-group(element="div" v-model="element.columns[1].list" :options="dragOptions")
                        template(v-for="(ele, index) in element.columns[1].list")
                          render-item(:element="ele" :index=index :class="{ 'active': ele === active }")
                <!--template(v-if="element.labelKey.name === 'grid'")-->
                  <!--div.action-box(v-if="element.labelKey.name === 'secondLayout'")-->
                    <!--div.copy(@click.stop="handleCopy(index, element)") 复制-->
                    <!--div.delete(@click.stop="handleDelete(index, element)") 删除-->
                    <!--div(style="background: red")-->
</template>

<script>
import draggable from 'vuedraggable'
import RenderItem from '../../components/Render_item'
// import labelList from '../../json/label.js'
export default {
  name: 'container',
  components: {
    RenderItem,
    draggable
  },
  props: {
  },
  data () {
    return {
      editable: true, // 是否可拖拽
      isDragging: false,
      formObj: {
        form: {},
        labelPosition: 'left', // left;right;center;
        inline: true // 表单是否行内显示
      }
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'name',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    list: { // 生成数据
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
      set (list) {
        this.$store.commit('form/active', list)
      }
    }
  },
  methods: {
    onMove ({ relatedContext, draggedContext }) {
      // relatedContext:获取移动对象在活动数组中的下标;被移动元素;被移动数组;
      // draggedContext:移动元素原来的位置
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    handleCopy (index, element) {
      this.$store.commit('form/addItem', { element: element })
    },
    handleDelete (index, element) {
      this.$store.commit('form/deleteItem', index)
    },
    setParameter (element, index) {
      if (element.labelKey.name === 'grid') { return }
      this.$store.commit('form/setActive', { type: 'click', element: element, index: index })
    }
  },
  watch: {
    list: function (newValue, oldValue) {
    }
  }
}
</script>

<style lang="less" scoped>
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    width: 100%;
    min-height: 20px;
    margin: 0px;
    padding:0px 0px 66px 0px;
    .list-group-item {
      width: 100%;
      min-height: 60px;
      cursor: move;
      text-align: left;
      background: #f2f2f2;
      &.list-group-item+.list-group-item{
        margin-top: 4px;
      }
      .item{
        box-sizing: border-box;
        min-height: 30px;
        background: #fff;
        &.active{
          background: #e68c3c63;
        }
        &:hover{
          border: 1px dashed #66b1ff;
          color: #66b1ff;
        }
        :hover.action-box{
          position: relative;
          .copy{
            display: block;
          }
          .delete{
            display: block;
          }
        }
        .copy{
          display: none;
          position: absolute;
          right: 20px;
          bottom: -15px;
          width: 60px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border: 1px solid #66b1ff;
          color: #66b1ff;
          border-radius: 6px;
          background: #fff;
          cursor: pointer;
        }
        .delete{
          display: none;
          position: absolute;
          right: 100px;
          bottom: -15px;
          width: 60px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border: 1px solid #f56c6c;
          color: #f56c6c;
          border-radius: 6px;
          background: #fff;
          cursor: pointer;
        }
      }
    }
    .placeholder{
      width: 100%;
      height: 100px;
    }
  }
</style>
