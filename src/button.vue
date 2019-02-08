<template>
  <button
    class="z-button"
    :class="{[`icon-${iconPosition}`] : true}"
  >
    <z-icon
      v-if="icon"
      :name="icon"
      class="icon"
    ></z-icon>
    <div class="content">
      <slot>
        <slot>
    </div>
  </button>
</template>

<script>
export default {
  //   props: ['icon', 'iconPosition']
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].indexOf(value) > -1;
      }
    }
  }
}
</script>

<style lang="scss">
.z-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  vertical-align: top;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }

  .icon {
    margin-right: 0.1em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
  }
}
</style>
