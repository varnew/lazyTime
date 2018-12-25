<template lang="pug">
  div.wrap
    draggable.list-group(element="div" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false")
      <!--transition-group(type="transition" :name="'flip-list'")-->
        div.list-group-item(:key="new Date().getTime().toString()")
          el-form(ref="form" :model="formObj.form" :inline="formObj.inline" label-width="110px" :label-position="formObj.labelPosition")
            draggable.list-group(element="div" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false")
              div.item(v-for="(element, index) in list" :key="index" @click="setParameter(element, index)" :class="{ 'active': element === active }")
                // input
                div.action-box(v-if="element.labelKey === 'input'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-input(v-model="element.value" :type="element.type" :size="element.size" :placeholder="element.placeholder")
                // radio
                div.action-box(v-if="element.labelKey === 'radio'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-radio(v-model="element.value" :type="element.type" :label="element.label")
                // checkbox
                div.action-box(v-if="element.labelKey === 'checkbox'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-checkbox(v-model="element.value" :label="element.label" :size="element.size") {{element.label}}
                // inputNumber
                div.action-box(v-if="element.labelKey === 'inputNumber'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-input-number(v-model="element.value" :label="element.label" :size="element.size") {{element.label}}
                // select
                div.action-box(v-if="element.labelKey === 'select'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-select(v-model="element.value" :size="element.size")
                      el-option(v-for="(item, index) in element.options" :key="index" :label="item.name" :value="item.value" :size="element.size")
                // switch
                div.action-box(v-if="element.labelKey === 'switch'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-switch(v-model="element.value")
                // slide
                div.action-box(v-if="element.labelKey === 'slide'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-slider(v-model="element.value")
                // timePicker
                div.action-box(v-if="element.labelKey === 'timePicker'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-time-select(v-model="element.value" :picker-options="element['picker-options']" :size="element.size" :placeholder="element.placeholder")
                // datePicker
                div.action-box(v-if="element.labelKey === 'datePicker'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-date-picker(v-model="element.value" :picker-options="element['picker-options']" :size="element.size" :placeholder="element.placeholder")
                // datePicker
                div.action-box(v-if="element.labelKey === 'dateTimePicker'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-date-picker(v-model="element.value" :type="element.type" :size="element.size" :placeholder="element.placeholder")
                // upload
                div.action-box(v-if="element.labelKey === 'upload'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-upload(:file-list="element.value" @on-success="" @on-error="" @before-upload="" :action="element.action" :limit="element.limit"  multiple list-type="picture-card")
                      i(class="el-icon-plus")
                // rate
                div.action-box(v-if="element.labelKey === 'rate'")
                  div.copy(@click.stop="handleCopy(index, element)") 复制
                  div.delete(@click.stop="handleDelete(index, element)") 删除
                  el-form-item(:label="element.nikeName")
                    el-rate(v-model="element.value" disabled show-score :text-color="element['text-color']" score-template="{value}")
</template>

<script>
import draggable from 'vuedraggable'
import labelList from '../../json/label.js'
export default {
  components: {
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
      const labelKey = element.labelKey
      let ele = null
      labelList.map((item) => {
        if (labelKey === item.labelKey) {
          ele = item
        }
      })
      this.$store.commit('form/copyItem', { index: index, ele: ele })
    },
    handleDelete (index, element) {
      this.$store.commit('form/deleteItem', index)
    },
    setParameter (element, index) {
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
