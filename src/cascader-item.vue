<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon class="loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="next" v-if="rightArrowVisible(item)" name="right"></icon>
          </template>
        </span>        
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item 
        :loading-item="loadingItem" 
        :load-data="loadData" 
        :items="rightItems" 
        :height="height" 
        :level="level+1" 
        :selected="selected" 
        @update:selected="onChangeSelected"></cascader-item>
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
    },
    loadData: {
      type: Function
    },
    loadingItem: {
      type: Object,
      default: () => ({})
    },
  },
  computed: {
    rightItems () {
      if (this.selected[this.level]) {
        let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
      }
    },
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
    },
    rightArrowVisible (item) {
      return this.loadData ? !item.isLeaf : item.children
    },
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
      overflow: auto;
    }
    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: 0.5em 1em;
      display: flex;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      &:hover {
        background: $grey;
      }
      .name {
        margin-right: 1em;
        user-select: none;
      }
      .icons {
        margin-left: auto;
        .next {
          transform: scale(0.4);
        }
        .loading {
          animation: spin 2s infinite linear;
        }
      }
    }
  }
</style>