<template>
  <transition name="slide">
    <div class="sider" v-show="visible">
      <slot></slot>
      <!-- <button @click="visible=false">X</button> -->
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ZSider',
    data () {
      return {
        visible: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }
  .slide-enter, .slide-leave-to {
    // TODO: sider 宽度固定200px, 如果设置sider 宽度，同时要覆盖这条css, 更好的办法是用 js 设置他的动画
    margin-left: -200px;
  }
</style>