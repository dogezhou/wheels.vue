<template>
    <div>
      <z-button>按钮</z-button>
      <z-button :loading="true">按钮</z-button>
      <z-button icon="settings">按钮</z-button>
      <z-button icon="info" iconPosition="right">按钮</z-button>
      <z-button disabled>按钮</z-button>
    </div>
</template>
<script>
  import Button from '../../../src/button'
  
  export default {
    components: {
      'z-button': Button,
    }
  }
</script>