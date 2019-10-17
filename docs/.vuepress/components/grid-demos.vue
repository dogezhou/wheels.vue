<template>
    <div>
      <ul>
        <li>基础布局：使用 Row 和 Col 栅格组件，创建基本的栅格系统，所有 Col 必须放到 Row 中</li>
        <z-row>
          <z-col class="col" span="12"><div class="col-content">col-12</div></z-col>
          <z-col class="col" span="12"><div class="col-content">col-12</div></z-col>
        </z-row>       
        <z-row>
          <z-col class="col" span="8"><div class="col-content">col-8</div></z-col>
          <z-col class="col" span="8"><div class="col-content">col-8</div></z-col>
          <z-col class="col" span="8"><div class="col-content">col-8</div></z-col>
        </z-row>   
        <z-row>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>          
        </z-row>
        <pre><code>
          {{code1}}
        </code></pre>

        <li>分栏间隔：栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性</li>
        <z-row gutter="16">
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>          
        </z-row>
        <pre><code>
          {{code2}}
        </code></pre>        
        <li>分栏偏移：通过 col 组件的 offset 属性可以指定分栏偏移的栏数。</li>
        <z-row>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6" :offset="6"><div class="col-content">col-6</div></z-col>          
        </z-row>
        <z-row>
          <z-col class="col" span="6" :offset="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6" :offset="6"><div class="col-content">col-6</div></z-col>          
        </z-row>        
        <z-row>
          <z-col class="col" span="12" :offset="6"><div class="col-content">col-6</div></z-col>
        </z-row>
                <pre><code>
          {{code3}}
        </code></pre>  
      </ul>
    </div>
</template>
<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components: {
      'z-col': Col,
      'z-row': Row,
    },
    data () {
      return {
        code1: `
        <z-row>
          <z-col class="col" span="12"><div class="col-content">col-12</div></z-col>
          <z-col class="col" span="12"><div class="col-content">col-12</div></z-col>
        </z-row>       
        <z-row>
          <z-col class="col" span="8"><div class="col-content">col-8</div></z-col>
          <z-col class="col" span="8"><div class="col-content">col-8</div></z-col>
          <z-col class="col" span="8"><div class="col-content">col-8</div></z-col>
        </z-row>   
        <z-row>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>          
        </z-row>
        `.trim(),
        code2: `
        <z-row gutter="16">
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>          
        </z-row>        
        `.trim(),
        code3: `
        <z-row>
          <z-col class="col" span="6"><div class="col-content">col-6</div></z-col>
          <z-col class="col" span="6" :offset="6">
            <div class="col-content">col-6</div>
          </z-col>          
        </z-row>
        <z-row>
          <z-col class="col" span="6" :offset="6">
            <div class="col-content">col-6</div>
          </z-col>
          <z-col class="col" span="6" :offset="6">
            <div class="col-content">col-6</div>
          </z-col>          
        </z-row>        
        <z-row>
          <z-col class="col" span="12" :offset="6">
            <div class="col-content">col-6</div>
          </z-col>
        </z-row>
        `.trim(),
      }
    }
  }
</script>

<style lang="scss" scoped>
.col {
  margin: 8px 0;
  font-size: 14px;
  &:nth-child(2n+1) {
    .col-content {
      background: rgba(62, 175, 124, 0.7);
    }
  }  
  .col-content {
    color: white;
    background: rgb(62, 175, 124);
    text-align: center;
    padding: 16px 0;

  }
}

</style>