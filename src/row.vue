<template>
  <div
    class="row"
    :style="rowStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZRow',
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  computed: {
    rowStyle() {
      const { gutter } = this
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    }
  },
  created() {
    // console 打印数组为空，点开有元素，说明在 created 中是没有子元素的
    // console.log(this.$children)
  },
  mounted() {
    // console.log(this.$children)
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
