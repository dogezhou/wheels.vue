<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (['span', 'offset'].indexOf(key) < 0) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'ZCol',
    props: {
      span: {
        type: [Number, String],
      },
      offset: {
        type: [Number, String],
      },
      ipad: {type: Object, validator,},
      narrowPc: {type: Object, validator,},
      pc: {type: Object, validator,},
      widePc: {type: Object, validator,}
    },
    data() {
      return {
        gutter: 0
      }
    },
    methods: {
      createClasses (obj, str = '') {
        if (!obj) {return []}
        let array = []
        if (obj.span) { array.push(`col-${str}${obj.span}`) }
        if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
        return array
      }
    },
    computed: {
      colClass() {
        let {span, offset, ipad, narrowPc, pc, widePc} = this
        let createClasses = this.createClasses
        return [
          ...createClasses({span, offset}),
          ...createClasses(ipad, 'ipad-'),
          ...createClasses(narrowPc, 'narrow-pc-'),
          ...createClasses(pc, 'pc-'),
          ...createClasses(widePc, 'wide-pc-'),
        ]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .col {
    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    // 对应 ant design 的 xs sm md lg xl xxl
    // https://ant.design/components/grid-cn/#Col
    /**
    * 设置 min-width 使得网格响应式往下找最近的，
    * span ipad narrowPc 如果没有写 ipad 属性（也许前端工程师没有 ipad 的设计稿）那在 ipad 上使用 span 也就是
    * 手机的布局。也就是说此组件是 Mobile First (移动端优先的）
     */
    @media (min-width: 577px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px){
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }


</style>