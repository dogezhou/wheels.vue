<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-item :items="source" :height="popoverHeight" :selected="selected" @update:selected="onChangeSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
  name: "ZCascader",
  components: { CascaderItem },
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
    }
  },
  data () {
    return {
      popoverVisible: false,
    }
  },
  methods: {
    onChangeSelected (selected) {
      this.$emit('update:selected', selected)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader {
    position: relative;
    .trigger {
      border: 1px solid pink;
      height: 32px;
      width: 100px;
    }
    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      @extend .box-shadow;
      display: flex;
    }
  }
</style>