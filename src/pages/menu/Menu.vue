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
    this.list = this.sourceList = labelData
  },
  methods: {
    start (evt) {},
    end (evt) {
      this.list = this.sourceList
      this.$store.commit('form/setActive', { type: 'end', evt: evt })
    },
    move (evt, originalEvent) {
    }
  }
}
</script>

<style scoped>
</style>
