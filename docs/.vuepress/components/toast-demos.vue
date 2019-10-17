<template>
  <div>
    <z-button class="toast"  @click="showToastTop">Toast 上</z-button>
    <z-button class="toast" @click="showToastMiddle">Toast 中和支持输入 html</z-button>
    <z-button class="toast" @click="showToastBottom">Toast 下和关闭按钮</z-button>
    <z-button class="toast" @click="showToastCallback">Toast 回调</z-button>
      <pre><code>
        {{code1}}
    </code></pre>    
  </div>
</template>
<script>
  import Vue from 'vue'
  import Button from '../../../src/button'
  import plugin from '../../../src/plugin'

  Vue.use(plugin)

  export default {
    components: {
      'z-button': Button,
    },
    data () {
      return {
        code1: `
        <z-button class="toast"  @click="showToastTop">Toast 上</z-button>
        <z-button class="toast" @click="showToastMiddle">Toast 中和支持输入 html</z-button>
        <z-button class="toast" @click="showToastBottom">Toast 下和关闭按钮</z-button>
        <z-button class="toast" @click="showToastCallback">Toast 回调</z-button>        

        ...
        methods: {
          showToastTop () {
            this.$toast('上面的提示信息', {
              position: 'top'
            })
          },
          showToastMiddle () {
            this.$toast('<a href="/">中间的提示信息</a>', {
              position: 'middle',
              enableHtml: true,
              autoClose: 3,
            })
          },
          showToastBottom () {
            this.$toast('底下的提示信息', {
              position: 'bottom',
              autoClose: false,
              closeButton: {
                text: '关闭'
              }
            })
          },
          showToastCallback () {
            this.$toast('中间的提示信息', {
              position: 'middle',
              autoClose: false,
              closeButton: {
                text: '关闭',
                callback () {
                  alert('提示框关闭回调')
                }
              }
            })        
          }
        }        
        ...
        `.trim(),
      }
    },
    methods: {
      showToastTop () {
        this.$toast('上面的提示信息', {
          position: 'top'
        })
      },
      showToastMiddle () {
        this.$toast('<a href="/">中间的提示信息</a>', {
          position: 'middle',
          enableHtml: true,
          autoClose: 3,
        })
      },
      showToastBottom () {
        this.$toast('底下的提示信息', {
          position: 'bottom',
          autoClose: false,
          closeButton: {
            text: '关闭'
          }
        })
      },
      showToastCallback () {
        this.$toast('中间的提示信息', {
          position: 'middle',
          autoClose: false,
          closeButton: {
            text: '关闭',
            callback () {
              alert('提示框关闭回调')
            }
          }
        })        
      }
    }
  }
</script>
