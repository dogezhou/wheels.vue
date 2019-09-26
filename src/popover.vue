<template>
  <div class="popover" @click.stop="switchPopover">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
          const eventHandler = () => {
            this.visible = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15)
    }
  }
</style>