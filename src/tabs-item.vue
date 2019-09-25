<template>
  <div class="tabs-item" @click="onclick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ZTabsItem',
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed : {
      classes () {
        return {
          active: this.active,
          disabled: this.disabled,
        }
      }
    },
    created () {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    },
    methods: {
      onclick () {
        if (this.disabled) {
          return
        }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click')
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blue: #1890ff;
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>