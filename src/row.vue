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
    align: {
      type: String,
      validator (value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      const { gutter } = this
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    },
    rowClass() {
      const { align } = this
      return [align && `align-${align}`]
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
  .row{
    display: flex;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-center{
      justify-content: center;
    }
    &.align-right{
      justify-content: flex-end;
    }
  }
</style>
