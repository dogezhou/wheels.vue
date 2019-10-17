<template>
  <div>
    <h3>click 触发</h3>
    <z-popover trigger="click" position="left" class="popover">
        <z-button>左</z-button>
        <div slot="content">提示信息</div>
    </z-popover>
    <z-popover trigger="click" position="top" class="popover">
        <z-button>上</z-button>
        <div slot="content"><a href="/">中间的提示信息</a></div>
    </z-popover>
    <z-popover trigger="click" position="bottom" class="popover">
        <z-button>下</z-button>
        <div slot="content">提示信息</div>
    </z-popover>
    <z-popover trigger="click" position="right" class="popover">
        <z-button>右</z-button>
        <div slot="content">提示信息</div>
    </z-popover>    
      <pre><code>
        {{code1}}
        </code></pre> 
    <h3>hover 触发</h3>
    <z-popover trigger="hover" position="left" class="popover">
        <z-button>左</z-button>
        <div slot="content">提示信息</div>
    </z-popover>
    <z-popover trigger="hover" position="top" class="popover">
        <z-button>上</z-button>
        <div slot="content"><a href="/">中间的提示信息</a></div>
    </z-popover>
    <z-popover trigger="hover" position="bottom" class="popover">
        <z-button>下</z-button>
        <div slot="content">提示信息</div>
    </z-popover>
    <z-popover trigger="hover" position="right" class="popover">
        <z-button>右</z-button>
        <div slot="content">提示信息</div>
    </z-popover>    
      <pre><code>
        {{code2}}
        </code></pre>         
  </div>
</template>
<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'

  export default {
    components: {
      'z-button': Button,
      'z-popover': Popover,
    },
    data () {
      return {
        code1: `
        <z-popover trigger="click" position="left" class="popover">
            <z-button>左</z-button>
            <div slot="content">提示信息</div>
        </z-popover>
        <z-popover trigger="click" position="top" class="popover">
            <z-button>上</z-button>
            <div slot="content">提示信息</div>
        </z-popover>
        <z-popover trigger="click" position="bottom" class="popover">
            <z-button>下</z-button>
            <div slot="content">提示信息</div>
        </z-popover>
        <z-popover trigger="click" position="right" class="popover">
            <z-button>右</z-button>
            <div slot="content">提示信息</div>
        </z-popover>        
        `.trim(),  
        code2: `
        <z-popover trigger="hover" position="left" class="popover">
            <z-button>左</z-button>
            <div slot="content">提示信息</div>
        </z-popover>
        <z-popover trigger="hover" position="top" class="popover">
            <z-button>上</z-button>
            <div slot="content">提示信息</div>
        </z-popover>
        <z-popover trigger="hover" position="bottom" class="popover">
            <z-button>下</z-button>
            <div slot="content">提示信息</div>
        </z-popover>
        <z-popover trigger="hover" position="right" class="popover">
            <z-button>右</z-button>
            <div slot="content">提示信息</div>
        </z-popover>        
        `.trim(),         
      }
    },
  }
</script>
