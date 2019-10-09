<template>
  <div class="cascader-item">
    {{sourceItem.name}}
    <cascader-item
      v-for="(item, index) in sourceItem.children"
      :key="index"
      v-if="sourceItem.children"
      :sourceItem="item"
    >
    </cascader-item>
  </div>
</template>

<script>
export default {
  name: "CascaderItem",
  props: {
    sourceItem: {
      type: Object
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader-item {
    margin: 20px 20px;
    border: 1px solid pink;
  }
</style>