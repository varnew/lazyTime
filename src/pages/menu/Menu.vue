<template lang="pug">
  DragDropBox(:list="list" @start="start" @end="end" @move="move")
</template>

<script>
import DragDropBox from '../../components/Drag_drop_box'
import labelData from '../../json/label.js'
export default {
  components: {
    DragDropBox
  },
  data () {
    return {
      list: [
      ]
    }
  },
  mounted () {
    this.list = labelData
  },
  methods: {
    start (evt) {
    },
    end (evt) {
      this.$store.commit('form/addItem', { element: this.list[evt.oldIndex] })
      this.$store.commit('form/setActive', { type: 'end', evt: evt })
    },
    move (evt, originalEvent) {
    }
  },
  watch: {
    list: function (newValue, oldValue) {
      this.list = labelData
    }
  }
}
</script>

<style scoped>
</style>
