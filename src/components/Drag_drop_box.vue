<template lang="pug">
  div.wrap
    draggable.list-group(element="div" v-model="sourceList" :options="dragOptions" :move="onMove" @start="onStart" @end="onEnd")
      <!--transition-group(type="transition" :name="'flip-list'")-->
        div.list-group-item(v-for="(element, index) in sourceList" :key="index") {{element.labelName.name}}
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'DragDropBox',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    draggable
  },
  data () {
    return {
      timer: null,
      sourceList: [],
      editable: true, // 是否可拖拽
      isDragging: false
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        sort: false, // 设置是否可以排序
        // group: { name: 'people', pull: [true, false, 'clone'], put: [true, false, []] },
        group: 'name',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  mounted () {
    this.timer = setTimeout(() => {
      this.sourceList = this.list
    }, 100)
  },
  methods: {
    onStart (evt) {
      this.isDragging = true
      this.$emit('start', evt)
    },
    onEnd (evt) {
      this.sourceList = this.list
      this.isDragging = false
      this.$emit('end', evt)
    },
    onMove ({ relatedContext, draggedContext }) {
      // relatedContext:获取移动对象在活动数组中的下标;被移动元素;被移动数组;
      // draggedContext:移动元素原来的位置
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      this.$emit('move', relatedContext, draggedContext)
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    add (evt) {
      console.log('----------dd')
      console.log(event)
      console.log('----------dd')
    }
  },
  beforeDestroy () {
    if (!this.timer) {
      window.clearTimeout(this.timer)
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
  }
  .list-group-item {
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    line-height: 30px;
    cursor: move;
    text-align: center;
    background: #f2f2f2;
    font-size: 14px;
    color: #333;
    &.list-group-item+.list-group-item{
      margin-top: 4px;
    }
    &:hover{
      border: 1px dashed #66b1ff;
      color: #66b1ff;
    }
  }
</style>
