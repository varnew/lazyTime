<template lang="pug">
  div.main
    div.left
      div.menu(v-for="item in menu" :key="item.value" draggable="true" @dragstart="dragStart($event, item)") {{item.name}}
    div.right(@drop="drop" @dragover="dragOver")
      div.menu(v-for="(item, index) in list" :key="index" draggable="true" :id="index" @dragenter="dragEnter") {{item.name}}
    <!--img(src="zzpic140044.jpg")-->
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {name: '单选', value: 'radio'},
        {name: '表单', value: 'input'}
      ],
      currentData: null,
      list: []
    }
  },
  mounted () {
  },
  methods: {
    /**
       * @author varnew
       * @date 2019/4/25
       * @desc: 拖拽什么 - ondragstart 和 setData()
       * setData第二个参数只能传递字符串
       */
    dragStart (event, data) {
      console.log(event + 'dragStart')
      this.currentData = data
      event.dataTransfer.setData('data', JSON.stringify(data))
    },
    /**
       * @author varnew
       * @date 2019/4/25
       * @desc: 进行放置 - ondrop
       */
    drop (event) {
      console.log(event + 'drop')
      event.preventDefault()
      const data = JSON.parse(event.dataTransfer.getData('data'))
      this.list.push(data)
    },
    /**
       * @author varnew
       * @date 2019/4/25
       * @desc: 放到何处 - ondragover
       */
    dragOver (event) {
      event.preventDefault()
    },
    /**
       * @author varnew
       * @date 2019/4/25
       * @desc: 目标对象被源对象拖动着进入
       */
    dragEnter (event) {
      this.list.splice(event.target.id, 0, this.currentData)
      console.log(event.target.id)
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
  html,body,.main{
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
  .main{
    width: 100%;
    display: flex;
  }
  .main .left{
    flex: 1;
    background: #f2f2f2;
  }
  .main .right{
    flex: 4;
    background: #CCC;
  }
  .main .left .menu{
    padding: 10px;
    margin: 10px;
    background: gray;
    color: #f2f2f2;
    border-radius: 4px;
  }
  .main .right .menu{
    width: 200px;
    padding: 10px;
    margin: 10px;
    background: gray;
    color: #f2f2f2;
    border-radius: 4px;
  }
</style>
