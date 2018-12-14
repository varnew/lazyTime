<template lang="pug">
  div.move(:id="move" @mousedown.stop="handleOnmounsedown($event, move, left, right)")
</template>

<script>
export default {
  name: 'Move',
  props: {
    left: {
      type: String,
      default: ''
    },
    move: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    wrap: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleOnmounsedown (e, resizeId, leftId, rightId) { // 可拖拽宽度
      var resize = document.getElementById(resizeId)
      var left = document.getElementById(leftId)
      var right = document.getElementById(rightId)
      var box = document.getElementById(this.wrap)
      var startX = e.clientX
      resize.left = resize.offsetLeft
      document.onmousemove = function (e) {
        var endX = e.clientX
        var moveLen = resize.left + (endX - startX)
        var maxT = box.clientWidth - resize.offsetWidth
        if (moveLen < 150) moveLen = 150
        if (moveLen > maxT - 150) moveLen = maxT - 150
        resize.style.left = moveLen
        left.style.width = moveLen + 'px'
        right.style.width = (box.clientWidth - moveLen - 5) + 'px'
      }
      document.onmouseup = function (evt) {
        document.onmousemove = null
        document.onmouseup = null
        resize.releaseCapture && resize.releaseCapture()
      }
      resize.setCapture && resize.setCapture()
      return false
    }
  }
}
</script>

<style lang="less" scoped>
  .move{
    width: 5px;
    height: 100%;
    background: #c0c4cc;
    &:hover{
      cursor: w-resize;
    }
  }
</style>
