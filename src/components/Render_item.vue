<template lang="pug">
  div
    // input
    div.action-box(v-if="element.labelKey.name === 'input'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-input(v-model="element.value.name" :type="element.type.name" :size="element.size.name" :placeholder="element.placeholder.name")
    // radio
    div.action-box(v-if="element.labelKey.name === 'radio'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-radio(v-model="element.value.name" :label="element.label.name")
    // checkbox
    div.action-box(v-if="element.labelKey.name === 'checkbox'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-checkbox(v-model="element.value.name" :label="element.label.name" :size="element.size.name") {{element.label.name}}
    // inputNumber
    div.action-box(v-if="element.labelKey.name === 'inputNumber'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-input-number(v-model="element.value.name" :label="element.label.name" :size="element.size.name") {{element.label.name}}
    // select
    div.action-box(v-if="element.labelKey.name === 'select'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-select(v-model="element.value.name" :size="element.size.name")
          el-option(v-for="(item, index) in element.options" :key="index" :label="item.name" :value="item.value" :size="element.size.name")
    // switch
    div.action-box(v-if="element.labelKey.name === 'switch'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-switch(v-model="element.value.name")
    // slide
    div.action-box(v-if="element.labelKey.name === 'slide'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-slider(v-model="element.value.name")
    // timePicker
    div.action-box(v-if="element.labelKey.name === 'timePicker'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-time-select(v-model="element.value.name" :picker-options="element['picker-options']" :size="element.size.name" :placeholder="element.placeholder.name")
    // datePicker
    div.action-box(v-if="element.labelKey.name === 'datePicker'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-date-picker(v-model="element.value.name" :picker-options="element['picker-options']" :size="element.size.name" :placeholder="element.placeholder.name")
    // datePicker
    div.action-box(v-if="element.labelKey.name === 'dateTimePicker'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-date-picker(v-model="element.value.name" :type="element.type.name" :size="element.size.name" :placeholder="element.placeholder.name")
    // upload
    div.action-box(v-if="element.labelKey.name === 'upload'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-upload(:file-list="element.value.name" @on-success="" @on-error="" @before-upload="" :action="element.action.name" :limit="element.limit.name"  multiple list-type="picture-card")
          i(class="el-icon-plus")
    // rate
    div.action-box(v-if="element.labelKey.name === 'rate'")
      div.copy(@click.stop="handleCopy(index, element)") 复制
      div.delete(@click.stop="handleDelete(index, element)") 删除
      el-form-item(:label="element.nikeName.name")
        el-rate(v-model="element.value.name" disabled show-score :text-color="element['text-color'].name" score-template="{value}")
</template>

<script>
export default {
  name: 'renderItem',
  props: {
    element: {
      type: Object,
      detail: () => {}
    },
    index: {
      type: Number,
      detail: () => 0
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    handleCopy (index, element) {
      this.$store.commit('form/addItem', { element: element })
    },
    handleDelete (index, element) {
      this.$store.commit('form/deleteItem', index)
    }
  },
  watch: {
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
