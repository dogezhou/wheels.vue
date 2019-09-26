<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transform: translateY(-100%);
  }
</style>