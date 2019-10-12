<template>
  <div class="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      <slot></slot>
      {{result || '&nbsp;'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-item :load-data="loadData" :items="source" :height="popoverHeight" :selected="selected" @update:selected="onChangeSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'
import ClickOutside from './click-outside'

export default {
  name: "ZCascader",
  components: { CascaderItem },
  directives: { ClickOutside },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
    }
  },
  data () {
    return {
      popoverVisible: false,
    }
  },
  computed: {
    result () {
      return this.selected.map(item => item.name).join('/')
    }
  },
  methods: {
    open () {
      this.popoverVisible = true
    },
    close () {
      this.popoverVisible = false
    },
    toggle () {
      if (this.popoverVisible === true) {
        this.close()
      } else {
        this.open()
      }
    },
    onChangeSelected (selected) {
      this.$emit('update:selected', selected)
      const lastSelectedItem = selected[selected.length - 1]
      // 通过上一个选中的内容的 id 在 source 中找到需要插入 children 的节点
      const getNodeById = (children, id) => {
        let node = undefined
        children.forEach(item => {
          if (item.children) {
            node = getNodeById(item.children, id)
          } else {
            if (item.id === id) {
              node = item
            }
          }
        })
        return node
      }
      const updateSource = (result) => {
        // 遵循单向数据流原则，子组件不要修改 props
        // this.$set(lastSelectedItem, 'children', result)
        const copy = JSON.parse(JSON.stringify(this.source))
        const nodeToUpdate = getNodeById(copy, lastSelectedItem.id)
        if (nodeToUpdate) {
          nodeToUpdate.children = result
        }
        this.$emit('update:source', copy)
      }
      if (!lastSelectedItem.isLeaf) {
        this.loadData && this.loadData(lastSelectedItem, updateSource)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader {
    position: relative;
    display: inline-block;
    .trigger {
      display: inline-flex;
      align-items: center;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 1em;
      height: 32px;
      min-width: 10em;
    }
    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      @extend .box-shadow;
      display: flex;
      margin-top: 8px;
    }
  }
</style>