<template>
  <div class="cascader-item">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="leftSelected=item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems"></cascader-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "CascaderItem",
  props: {
    items: {
      type: Array
    }
  },
  data () {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems () {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader-item {
    border: 1px solid pink;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .right {
      margin-top: -1px;
    }
  }
</style>