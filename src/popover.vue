<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
      :class="{[`position-${position}`]: true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "ZPopover",
    data () {
      return {
        visible: false,
      }
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      contentPosition () {
        document.body.appendChild(this.$refs.contentWrapper)
        const { contentWrapper, triggerWrapper } = this.$refs
        const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
        if (this.position === 'top') {
          contentWrapper.style.left = `${left + window.scrollX}px`
          contentWrapper.style.top = `${top + window.scrollY}px`
        } else if (this.position === 'bottom') {
          contentWrapper.style.left = `${left + window.scrollX}px`
          contentWrapper.style.top = `${top + height + window.scrollY}px`
        } else if (this.position === 'left') {
          contentWrapper.style.left = `${left + window.scrollX}px`
          const { height: height2 } = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = `${top + window.scrollY + (height - height2) / 2}px`
        } else if (this.position === 'right') {
          contentWrapper.style.left = `${left + window.scrollX + width}px`
          const { height: height2 } = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = `${top + window.scrollY + (height - height2) / 2}px`
        }

      },
      onClickDocument (e) {
        if (this.$refs.contentWrapper.contains(e.target) ||
            this.$refs.popover === e.target || this.$refs.popover.contains(e.target)) {
          return
        }
        this.close()
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.contentPosition()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    border: 1px solid $border-color;
    position: absolute;
    border-radius: $border-radius;
    /*box-shadow: 0 2px 8px rgba(0,0,0,0.15);*/
    // 小三角也有阴影
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.15));
    background: white;
    padding: 0.5em 1em;
    max-width: 22em;
    word-break: break-all;
    &::before, &::after {
      content: '';
      position: absolute;
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      // 三角形
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top-color: black;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      // 三角形
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      // 三角形
      &::before, &::after {
        left: 100%;
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-left-color: black;
      }
      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      // 三角形
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-right-color: black;
        right: 100%;
      }
      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
  }

</style>