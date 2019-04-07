<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZCol',
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid black;
}

$class: col-;
@for $n from 1 through 24 {
  .col.#{$class}#{$n} {
    width: ($n / 24) * 100%;
  }
}

$class: offset-;
@for $n from 1 through 24 {
  .col.#{$class}#{$n} {
    margin-left: ($n / 24) * 100%;
  }
}
</style>