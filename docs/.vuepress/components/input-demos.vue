<template>
  <div>
    <style>
      input {
        margin: 0.5em;
      }
    </style>
    <z-input value="请输入"></z-input>
    <z-input value="只读输入框" readonly></z-input>
    <z-input value="禁用输入框" disabled></z-input>
    <z-input v-model="errorMsg" error="请重新输入"></z-input>
  </div>
</template>
<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'z-input': Input,
    },
    data () {
      return {
        errorMsg: '错误输入值',
      }
    },
  }
</script>
