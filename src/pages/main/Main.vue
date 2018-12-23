<template lang="pug">
  div.wrap#wrap
    section.left#left
      Menu
    Move(move="move1" left="left" right="container" wrap="wrap")
    section.center#container
      Container
    Move(move="move2" left="container" right="right" wrap="wrap")
    section.right#right
      Parameter
</template>

<script>
import draggable from 'vuedraggable'
import Menu from '../menu/Menu'
import Container from '../container/Container'
import Parameter from '../parameter/Parameter'
import Move from '../../components/Move'
import DragDropBox from '../../components/Drag_drop_box'
export default {
  components: {
    draggable,
    Menu,
    Container,
    Parameter,
    Move,
    DragDropBox
  },
  data () {
    return {
    }
  },
  mounted () {
    document.body.ondrop = function (event) { // 解决每次拖拽后打开新窗口的问题
      event.preventDefault()
      event.stopPropagation()
    }
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
    .left{
      width: 240px;
      height: 100%;
    }
    .center{
      flex: 1;
      height: 100%;
    }
    .right{
      width: 300px;
    }
  }
</style>
