<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="onClickLabel(item)">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems" :height="height" :level="level+1" :selected="selected" @update:selected="onChangeSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  name: "CascaderItem",
  components: { Icon },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    rightItems () {
      const currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children
      } else {
        return null
      }
    }
  },
  methods: {
    onClickLabel (item) {
      this.$set(this.selected, this.level, item)
      const copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onChangeSelected (selected) {
      this.$emit('update:selected', selected)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left {
      height: 100%;
      padding: 0.3em 0;
    }
    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: 0.3em 1em;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 1em;
        transform: scale(0.6);
      }
    }
  }
</style>