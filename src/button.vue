<template>
  <button
    class="z-button"
    :class="{[`icon-${iconPosition}`] : true}"
    @click="$emit('click')"
  >
    <z-icon
      v-if="loading"
      name="loading"
      class="icon loading"
    ></z-icon>
    <z-icon
      v-if="icon && !loading"
      :name="icon"
      class="icon"
    ></z-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from './icon'

export default {
  name: 'ZButton',
  // props: ['icon', 'iconPosition']
  components: {
    'z-icon': Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].indexOf(value) > -1
      }
    }
  },
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.z-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  vertical-align: top;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }

  .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
