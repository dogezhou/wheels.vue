<template>
    <div>
      <z-button>按钮</z-button>
      <z-button :loading="true">按钮</z-button>
      <z-button icon="settings">按钮</z-button>
      <z-button icon="info" iconPosition="right">按钮</z-button>
      <z-button disabled>按钮</z-button>
      <z-button-group>
        <z-button icon="left">上一页</z-button>
        <z-button >中间</z-button>
        <z-button icon="right" icon-position="right">下一页</z-button>
      </z-button-group>
    </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      'z-button': Button,
      'z-button-group': ButtonGroup,
    }
  }
</script>