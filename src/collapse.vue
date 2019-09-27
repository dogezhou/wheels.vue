<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "ZCollapse",
    props: {
      accordion: {
        type: Boolean,
        default: false,
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide () {
      if (this.accordion) {
        return {
          eventBus: this.eventBus
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $grey: #ccc;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>