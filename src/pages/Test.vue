<template lang="pug">
  draggable(element="ul" v-model="list" :move="allow" :options="{draggable: true}")
    li(v-for="item in list") {{item.name}}
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 'b'
        },
        {
          id: 3,
          name: 'c'
        },
        {
          id: 4,
          name: 'd'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f'
        }
      ]
    }
  },
  methods: {
    allow (evt) {
      console.log(evt.draggedContext.index)
      console.log(evt.draggedContext.element)
      console.log(evt.draggedContext.futureIndex)
      console.log(evt.relatedContext.index)
      console.log(evt.relatedContext.element)
      console.log(evt.relatedContext.list)
      console.log(evt.relatedContext.component)
      return (evt.draggedContext.element.name !== 'b')
    }
  }
}
</script>

<style scoped>
  li{
    width: 200px;
    list-style: none;
    border: 1px solid red;
    margin-top: 10px;
  }
</style>
