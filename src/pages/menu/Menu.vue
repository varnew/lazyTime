<template lang="pug">
  div
    DragDropBox(:list="list" @start="start" @end="end" @move="move")
    DragDropBox(:list="layoutList" @start="layoutStart" @end="layoutEnd" @move="layoutMove")
</template>

<script>
import DragDropBox from '../../components/Drag_drop_box'
import labelData from '../../json/label.js'
import layoutData from '../../json/layout.js'
export default {
  components: {
    DragDropBox
  },
  data () {
    return {
      list: [], // form元素原始数据
      layoutList: [] // 布局元素原始数据
    }
  },
  mounted () {
    this.list = labelData
    this.layoutList = layoutData
  },
  methods: {
    start (evt) {
    },
    end (evt) {
      this.$store.commit('form/addItem', { element: this.list[evt.oldIndex] })
      this.$store.commit('form/setActive', { type: 'end', evt: evt })
    },
    move (evt, originalEvent) {
    },
    layoutStart (evt) {
    },
    layoutEnd (evt) {
      this.$store.commit('form/addItem', { element: this.layoutList[evt.oldIndex] })
      this.$store.commit('form/setActive', { type: 'end', evt: evt })
    },
    layoutMove (evt, originalEvent) {
    }
  },
  watch: {
    list: function (newValue, oldValue) {
      this.list = labelData
    },
    layoutList: function (newValue, oldValue) {
      this.layoutList = layoutData
    }
  }
}
</script>

<style scoped>
</style>
