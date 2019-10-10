<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      <slot></slot>
      {{result || '&nbsp;'}}
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
  computed: {
    result () {
      return this.selected.map(item => item.name).join('/')
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