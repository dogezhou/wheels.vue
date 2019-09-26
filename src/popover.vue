<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    methods: {
      contentPosition () {
        document.body.appendChild(this.$refs.contentWrapper)
        const { width, height, top, left } =
            this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
        this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
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
    transform: translateY(-100%);
    margin-top: -10px;
    padding: 0.5em 1em;
    max-width: 22em;
    word-break: break-all;
    // 三角形
    &::before, &::after {
      content: '';
      position: absolute;
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
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
</style>