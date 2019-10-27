<template>
    <div>
      <z-icon
        name="loading"
        class="icon"
      ></z-icon>
      <z-icon
        name="error"
        class="icon"
      ></z-icon>
      <z-icon
        name="person"
        class="icon"
      ></z-icon>
      <z-icon
        name="settings"
        class="icon"
      ></z-icon>
      <pre><code>
        {{code}}
        </code></pre>       
    </div>
</template>
<script>
  import Icon from '../../../src/icon'

  export default {
    components: {
      'z-icon': Icon,
    },
    data () {
      return {
        code: `
      <z-icon
        name="loading"
        class="icon"
      ></z-icon>
      <z-icon
        name="error"
        class="icon"
      ></z-icon>
      <z-icon
        name="person"
        class="icon"
      ></z-icon>
      <z-icon
        name="settings"
        class="icon"
      ></z-icon>        
        `.trim()
      }
    }
  }
</script>

<style lang="scss" scoped>
.icon {
  font-size: 24px;
  margin: 16px;
}
</style>