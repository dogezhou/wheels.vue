<template>
  <div class="popover" @click.stop="switchPopover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
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
      switchPopover () {
        this.visible = !this.visible
        if (this.visible === true) {
          this.$nextTick(() => {
            document.body.appendChild(this.$refs.contentWrapper)
            const { width, height, top, left } =
                this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
            this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
          })
          const eventHandler = () => {
            this.visible = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
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